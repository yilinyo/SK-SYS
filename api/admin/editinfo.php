<?php

//编辑信息api

header('Content-type:application/json');//json
$action=isset($_GET['action']) ? $_GET['action'] : null;//操作
$table=isset($_GET['action']) ? $_GET['table'] : null;//表单
$i=isset($_GET['info']) ? $_GET['info'] : null;//信息
$id=isset($_GET['id']) ? $_GET['id'] : null;

 require_once '../../config/connect_db.php';


if($action=='set'&&$table=='sk_goods')//建立商品

{
    $time=time();
   
      $sql="INSERT INTO `$table`( `active_id`, `goods_title`,`goods_rate`,`goods_term`,`goods_price_normal`,`goods_price_discount`,`num_total`,`num_left`,`num_user`,`sys_dateline`,`sys_lastmodify`) VALUES ('{$i['active_id']}','{$i['goods_title']}','{$i['goods_rate']}','{$i['goods_term']}','{$i['goods_price_normal']}','{$i['goods_price_discount']}','{$i['num_total']}','{$i['num_total']}','{$i['num_user']}',$time,$time)";
     $result = $con->query($sql);
        if($result){
            $sql="select goods_id from sk_goods where goods_title='{$i['goods_title']}'";
            $res=$con->query($sql);//查找good id
            
            if ($res->num_rows > 0) {
        while($row = $res->fetch_assoc()) {
       $gid=$row['goods_id'];
    }
}
        require_once '../include/connect_rd.php';          
        $goods_redis='sk_goods_'. $gid;
     $redis->hmSet($goods_redis,array('num'=>$i['num_total'],'left'=>$i['num_total'],'status'=>0));
        echo 1;//成功
            
        }
        else {
            echo '0'; // 失败.
        }          
      
        
    }
    



if($action=='edit'&&$table=='sk_goods')//编辑商品

{


    
    $file='../../test/cache1/';
    $filename=$file.'goods_'.$id.'num';

 if(file_exists($filename)){
            unlink($filename);
        }       
    $num=(int)$i['change_num'];
  
   $time=time();

        $sql = " UPDATE $table SET active_id = '{$i['active_id']}' , goods_rate = '{$i['goods_rate']}', goods_title = '{$i['goods_title']}' , goods_term = '{$i['goods_term']}' , goods_price_normal = '{$i['goods_price_normal']}' , goods_price_discount = '{$i['goods_price_discount']}' , num_total = num_total+$num , num_left = num_left+$num ,
        num_user = '{$i['num_user']}'  ,sys_lastmodify = $time WHERE goods_id = $id  ";
        
        $result = $con->query($sql);


        if($result){

               include  'init.php';
            echo $id;//成功
            
        }
        else {
            echo '000'; // 失败.
        }
        
}



if($action=='set'&&$table=='sk_active')//建立活动

{
    $time=time();
   
      $sql="INSERT INTO `$table`(  `active_title`,`time_begin`,`time_end`,`sys_dateline`,`sys_lastmodify`) VALUES ('{$i['active_title']}','{$i['time_begin']}','{$i['time_end']}',$time,$time)";
     $result = $con->query($sql);
        if($result){
            
            echo '1';//成功
            
        }
        else {
            echo '0'; // 失败.
        }
        
    }
    
if($action=='edit'&&$table=='sk_active')//编辑活动

{
  
   $time=time();
       $sql = " UPDATE $table SET  time_end = '{$i['time_end']}', active_title = '{$i['active_title']}' , time_begin = '{$i['time_begin']}' ,  sys_lastmodify = $time WHERE active_id = $id  ";
        
        $result = $con->query($sql);
        if($result){
            
            echo '1';//成功
            
        }
        else {
            echo '0'; // 失败.
        }
        
}
