<?php

//订单操作api

header('Content-type:application/json');//json
require_once '../../config/connect_db.php';
require_once '../../config/connect_rd.php';
$action=isset($_POST['action']) ? $_POST['action']: exit('error');//add添加 pay支付 cancel取消
$i=isset($_POST['trade_info']) ? $_POST['trade_info'] : null;//json
$id=isset($_POST['trade_id']) ? $_POST['trade_id'] : null;

$i=json_decode($i,true);//转换为数组
if($action=='add')//建立订单
{
      $time=time();
      $sql="INSERT INTO `sk_trade`( `active_id`, `goods_title`,`goods_rate`,`goods_term`,`goods_id`,`price_total`,`num_total`,`uid`,`username`,`time_confirm`,`sys_dateline`,`sys_lastmodify`) VALUES ('{$i['active_id']}','{$i['goods_title']}','{$i['goods_rate']}','{$i['goods_term']}','{$i['goods_id']}','{$i['price_total']}','{$i['num_total']}','{$i['uid']}','{$i['username']}',$time,$time,$time)";
         $result = $con->query($sql);
        if($result){
        echo '1';//成功
            
        }
        else {
            echo '0'; // 失败.
        }          
      
     
}
//修改支付状态
if($action=='pay'){
    
    
     
     $sql1="select price_total,uid from sk_trade where trade_id = $id  ";
     $result = $con->query($sql1);
     
      while($row = $result->fetch_assoc()) {
          $price=$row['price_total'];
          
         $uid=$row['uid'];
    } //价格 用户
    
    
  
    
     $sql1="select account from sk_user where user_id = $uid  ";
     $result = $con->query($sql1);
     
      while($row = $result->fetch_assoc()) {
          $money=$row['account'];
        
    }//用户余额
    
     
      
      
        if($money>=$price){
            //支付成功
            $time=time();
            $sql = " UPDATE sk_trade SET sys_status = 2 ,time_pay =$time WHERE trade_id = $id  ";
            $result = $con->query($sql);
            
            //付钱
          $sql = " UPDATE sk_user SET account = account-$price  WHERE user_id = $uid  ";
            $result = $con->query($sql); 
            
            $sql = " UPDATE sk_bank SET account = account+$price  WHERE mybank = 'A22mybank'  ";
                 $result = $con->query($sql); 
            
         $arr=array(
		        
		        'status'=>'101',
		        'msg'=>'支付成功'
		        
		        );
			echo json_encode($arr,JSON_UNESCAPED_UNICODE);
            
        }
        else {
            $arr=array(
		        
		        'status'=>'102',
		        'msg'=>'余额不足'
		        
		        );
			echo json_encode($arr,JSON_UNESCAPED_UNICODE);
        }     
    
}
//取消状态
if($action=='cancel'){
    
//更新状态 
$time=time();
     $sql = " UPDATE sk_trade  SET sys_status = 4 , time_cancel =$time WHERE trade_id = $id  ";
       $result = $con->query($sql);
       
//成功就去把缓存里的数据清除
        if($result){
            $sql = " select goods_id,uid,active_id from sk_trade where trade_id=$id  ";
            $result = $con->query($sql);
            while($row = $result->fetch_assoc()) {
            $gid=$row['goods_id'];
            $uid=$row['uid'];
            $aid=$row['active_id'];
            
   $key='uid-'.$uid.'-aid-'.$aid.'-gid-'.$gid;
           $check=$redis->exists($key);
          
           if($check){
               $redis->del($key);
           }
            }
        echo '1';//成功
            
        }
        
        
        else {
            echo '0'; // 失败.
        }     
}