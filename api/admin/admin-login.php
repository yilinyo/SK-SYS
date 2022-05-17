<?php


 require_once '../../config/connect_db.php';

if(!$con){
  die("error:".mysqli_connect_error());//返回最近调用函数的最后一个错误描述。
  } //如果连接失败就报错并且中断程序




$sql='select * from sk_admin where username='."'{$username}'and password="."'$password';";
  $res=mysqli_query($con,$sql);

  if($res->num_rows!=0)
  {
      echo 'yes';
      
    
    
  }
  else
  {
   
     echo 'no';
  }
  
  ?>