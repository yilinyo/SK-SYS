
<?php

$db_host="172.31.32.232";//填写自己的数据库地址
$db_user="sxfcds2100850";//填写自己的数据库用户名
$db_pwd="SX_fcds2100850";//填写自己的数据库密码
$db_name="sxfcds2100850";//填写自己的数据库库名
$con=mysqli_connect($db_host,$db_user,$db_pwd,$db_name);
if(!$con){
  die("error:".mysqli_connect_error());//返回最近调用函数的最后一个错误描述。
  } //如果连接失败就报错并且中断程序


?>