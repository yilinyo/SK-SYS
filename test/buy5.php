<?php
//两级缓存+rabbitmq异步

header('Content-type:application/json');//json


$aid=isset($_POST['aid']) ? $_POST['aid'] : exit('error');//活动id
$gid=isset($_POST['gid']) ? $_POST['gid'] : exit('error');//商品id
$uid=isset($_POST['uid']) ? $_POST['uid'] : exit('error');//用户id
$num=isset($_POST['num']) ? $_POST['num'] : exit('error');//商品数量
$md5=isset($_POST['md5']) ? $_POST['md5'] : 'xxxxxx';//md5码
$t=isset($_POST['time']) ? $_POST['time'] : 0;//购买时间
$price=isset($_POST['price']) ? $_POST['price'] : exit('error');//价格




require_once './cache.php';
require_once './createorder.php';
// $total=2000;


$key='goods_'.$gid.'num';


//cache缓存标识
$cache = new Cache();

$check=$cache->get($key);

if($check!=false){
    
    
    $res = array(
        'status'=>'101',
        'msg'=>'下次再来吧...'
        );
    
    echo json_encode($res);
    return;
    
}

//redis缓存预减库存判断
require_once '../config/connect_rd.php';

//隐藏秒杀接口

//开启，将false改为true
if(false){

$isok=$redis->exists($md5);
if(!$isok){
    
    $res = array(
        'status'=>'106',
        'msg'=>'请求不合法..'
        );
    
    echo json_encode($res);
    
    exit;
}
}


//原子预减redis库存不超买
$stock=$redis->decr($key);

//原子减后判断是否还有库存
if($stock<0){
     $cache->put($key,1);
$stock=$redis->incr($key);//小于加回库存保持数据库缓存一致
   $res = array(
        'status'=>'102',
        'msg'=>'商品卖完了...'
        );
    echo json_encode($res);
    return;
}

 //抢购阶段
try{
    
//订单生成并入缓存    
  $info= array(
       
        'gid'=>$gid,
        
        'uid'=>$uid,
        
        'aid'=>$aid,
        
        'num'=>$num,
        
        'price'=>$price,
        
    
        );



//检查用户,并在redis中短暂记录用户订单信息，有过期时间
$ans= create_order($info,$t);
//有下单记录抛出异常
if(!$ans){
    
        throw new Exception("103");//已经购买了
    
}

//将下单信息加入rabbitmq消息队列
  require_once './send.php';

   $res = array(
        'status'=>'104',
        'msg'=>'恭喜你下单成功，请等待...'
        );
    
    echo json_encode($res);
   
  
}
catch (Exception $e) {
    $stock=$redis->incr($key);
    $check=$cache->get($key);
    if($check!=false) {
        $cache->move($key);
        
    }
     $code=$e->getMessage();
    
     if($code=='103'){
         
          $res = array(
        'status'=>'103',
        'msg'=>'已经参与过秒杀了'
        );
    
    echo json_encode($res);
     }
     
     else{
      $res = array(
        'status'=>'105',
        'msg'=>'系统繁忙，请稍后再试'
        );
    
    echo json_encode($res);
    
     }
}