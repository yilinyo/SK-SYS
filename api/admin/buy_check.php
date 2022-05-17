<?php
//用户筛选buy_check修改


header('Content-type:application/json');//json
 require_once '../../config/connect_db.php';


$age=$_GET['age'];
$credit=$_GET['credit'];


 $reset="UPDATE sk_user SET buy_check = 0 WHERE 1";
 
 $result=$con->query($reset);
 
 if($result){
     
     $sql1="UPDATE sk_user SET buy_check = 1 WHERE age >= $age and credit >= $credit and user_status = 0";
      $sql2="UPDATE sk_limit SET age = $age , credit=$credit WHERE 1";
     $result1=$con->query($sql1);
      $result2=$con->query($sql2);
     if($result1&&$result2){
         echo 1;
     }
     
 }
 
