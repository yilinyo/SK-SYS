<?php

//单用户订单信息api
header('Content-type:application/json');//json
require_once '../../config/connect_db.php';
$id=$_GET['uid'];//用户id

$sql = "SELECT * FROM sk_trade WHERE uid=$id ";
$result = $con->query($sql);

$arr=[]; 
 
 
if ($result->num_rows > 0) {
    // 输出数据
 
    while($row = $result->fetch_assoc()) {
        //单条值找出
        //$user_id=$row["user_id"];
        //$username=$row["username"];
      
        //合并
        //$res=["user_id"=>$user_id,"username"=>$username];
        array_push($arr,$row);
    }
    //输出接口json格式
    echo json_encode($arr);
} else {
    echo "0 ";
}