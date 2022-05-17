<?php

//获取数据库信息api
header('Content-type:application/json');//json

$table=$_GET['table'];//获取table



 require_once '../../config/connect_db.php';
 





$sql = "SELECT * FROM $table";
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
