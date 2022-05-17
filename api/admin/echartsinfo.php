<?php


//echarts图数据api

header('Content-type:application/json');//json


$model=isset($_GET['model']) ? $_GET['model'] : 4;//模块  1.总金额  2.活动对应商品数量 3.商品剩余数量 4.订单详情（分订单状态）   5.活动订单量（根据活动分类）   6.以往的活动销售情况 7.当前进行的活动销售情况8.用户数量 9.订单数量 10.准入用户数据


function tojson($sql){
    
    include '../../config/connect_db.php';
    
      $result=$con->query($sql);

    $arr=[];
     while($row = $result->fetch_assoc()) {
         
         
      array_push($arr,$row);
    
     }
       return json_encode($arr);

}





if($model==1){
    
    
   
  $sql="select account from sk_bank where mybank='A22mybank' ";
  echo tojson($sql);
    
    
}
if($model==2){
    
    
     $sql="select count(goods_id) as num , active_title from sk_goods,sk_active where sk_goods.active_id=sk_active.active_id group by sk_goods.active_id";
  echo tojson($sql);
}
if($model==3){
    
    $sql="select goods_id, goods_title, num_left from sk_goods where 1";
  echo tojson($sql);
    
}
if($model==4){
       include '../../config/connect_db.php';
    $arr=[];
    $day= date("d");
    $month= date("m");
    $year=date("Y");
    
   $time0=mktime(0,0,0,$month,$day,$year);
    $time1=mktime(6,0,0,$month,$day,$year);
   
    $sql="select count(trade_id) as time0 from sk_trade where time_confirm>= $time0 and time_confirm<=$time1";
     $result=$con->query($sql);
    while($row = $result->fetch_assoc()) {
         
         $num=$row['time0'];
         $arr['time6']=$num;
     
    
     }
    
       $time0=mktime(6,0,0,$month,$day,$year);
    $time1=mktime(12,0,0,$month,$day,$year);
      $sql="select count(trade_id) as time6 from sk_trade where time_confirm>$time0 and time_confirm<=$time1";
       $result=$con->query($sql);
       
    while($row = $result->fetch_assoc()) {
         
         $num=$row['time6'];
         $arr['time12']=$num;
     
    
     }
      
       $time0=mktime(12,0,0,$month,$day,$year);
    $time1=mktime(18,0,0,$month,$day,$year);
   
    $sql="select count(trade_id) as time12 from  sk_trade where time_confirm>$time0 and time_confirm<=$time1";
        $result=$con->query($sql);
       
    while($row = $result->fetch_assoc()) {
         
         $num=$row['time12'];
         $arr['time18']=$num;
     
    
     }
    
     $time0=mktime(18,0,0,$month,$day,$year);
    $time1=mktime(23,59,59,$month,$day,$year);
   
    $sql="select count(trade_id) as time18 from sk_trade where time_confirm>$time0 and time_confirm<=$time1";
     $result=$con->query($sql);
      while($row = $result->fetch_assoc()) {
         
         $num=$row['time18'];
       
         $arr['time24']=$num;
     
    
     }
     echo json_encode($arr);
    
    
    
}
if($model==5){
    include '../../config/connect_db.php';
  
    $sql="select count(trade_id) as totalnum, any_value(active_title) as active_title,active_id from sk_trade group by active_id";
    
  $result=$con->query($sql);
 
  $arr=[];
while($row = $result->fetch_assoc()) {
         
     $id=$row['active_id'];
      $sql1="select count(trade_id) as paynum  from sk_trade where active_id=$id and time_pay>0 group by active_id";
    
        $result1=$con->query($sql1);
        
        if(mysqli_num_rows($result1)==0){
            
           $row['paynum']=0;
        }
       
       while($row1 = $result1->fetch_assoc()) {
           
          $row['paynum']=$row1['paynum'];
       }
       
       
array_push($arr,$row);
    
     }
         
         
   echo json_encode($arr) ;
    
   
}
if($model==6){
     include '../../config/connect_db.php';
    $time=time();
    $time=(int)$time;
 
    $sql="select trade_id,price_total from sk_trade where active_id in (select active_id from sk_active where time_end<=$time)  ";
    $result=$con->query($sql);
   
    $num=mysqli_num_rows($result);
    $totalprice=0;
     while($row = $result->fetch_assoc()) {
           
          $totalprice=$totalprice+(int)$row['price_total'];
       }
    
 $arr=array(
     'num'=>$num,
     'totalprice'=>$totalprice
     );
     
     echo json_encode($arr);
    
}
if($model==7){
     include '../../config/connect_db.php';
    $time=time();
    $time=(int)$time;
 
    $sql="select trade_id,price_total from sk_trade where active_id in (select active_id from sk_active where time_end>=$time and time_begin<=$time)  ";
    $result=$con->query($sql);
   
    $num=mysqli_num_rows($result);
    $totalprice=0;
     while($row = $result->fetch_assoc()) {
           
          $totalprice=$totalprice+(int)$row['price_total'];
       }
    
 $arr=array(
     'num'=>$num,
     'totalprice'=>$totalprice
     );
     
     echo json_encode($arr);
    
}
if($model==8){
    
     $sql="select count(user_id) as num from sk_user where 1 ";
  echo tojson($sql);
    
}
if($model==9){
    
     $sql="select count(trade_id) as num from sk_trade where 1 ";
  echo tojson($sql);
    
}
if($model==10){
    
    include '../../config/connect_db.php';
    $sql="select * from sk_limit where 1";
    $result=$con->query($sql);
    while($row = $result->fetch_assoc()) {
           
          $age=$row['age'];
          $credit=$row['credit'];
       }
    
    
    $sql="select count(user_id) as BlackUsernum from  sk_user where user_status=1";
     $result=$con->query($sql);
    while($row = $result->fetch_assoc()) {
           
          $BlackUsernum =$row['BlackUsernum'];
          
       }
       
        $sql="select count(user_id) as ErrorUsernum from sk_user where user_status=1 or credit<=$credit or age<=$age";
     $result=$con->query($sql);
    while($row = $result->fetch_assoc()) {
           
          $ErrorUsernum =$row['ErrorUsernum'];
          
       }
          $sql="select count(user_id) as TotalUsernum from sk_user where 1";
     $result=$con->query($sql);
    while($row = $result->fetch_assoc()) {
           
          $TotalUsernum =$row['TotalUsernum'];
          
       }
       $arr=array(
           
           'LimitAge'=>$age,
           'LimitCredit'=>$credit,
           'BlackUsernum'=>$BlackUsernum,
           'ErrorUsernum'=>$ErrorUsernum,
           'TotalUsernum'=>$TotalUsernum
           
           );
           echo json_encode($arr);
    
    
}

