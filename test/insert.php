<?php
require_once '../config/connect_db.php';
//模拟插入11390个用户到数据库



$name='银行测试用户';
$time1=time();

for($i=1;$i<=11390;$i++){


$username=$name.$i;

$sql="insert into sk_user (`username`) values ('$username')";
 $result = $con->query($sql);

}
$time2=time();
echo $time2-$time1;