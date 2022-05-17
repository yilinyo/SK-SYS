<?php


//用来生成动态链接的key值采用MD5加密和SM4加密
$aid=isset($_POST['aid']) ? $_POST['aid'] : exit('error');
$gid=isset($_POST['gid']) ? $_POST['gid'] : exit('error');
$uid=isset($_POST['uid']) ? $_POST['uid'] : exit('error');
require_once '../config/connect_rd.php';
include 'Sm4.php';
$time=time();
$str=$aid.$gid.$uid.$time;

$data=md5($str);

 $sm4 = new Sm4();

   
    $new_key = '68756875687568756875687568756875';//SM4密钥

 



  $enc = $sm4->setKey($new_key)->encryptData(($data)); // 加密字符串

$jian=$data;
$redis->set($jian,'true');
$redis->expire($jian,60);

echo $enc;
