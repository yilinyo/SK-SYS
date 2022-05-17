<?php


//修改状态的api
header('Content-type:application/json');//json
$table=isset($_GET['table']) ? $_GET['table'] : null;//获取action
$id=isset($_GET['id']) ? $_GET['id'] : null;
$status=isset($_GET['sys_status']) ? $_GET['sys_status'] : null;


 require_once '../../config/connect_db.php';




if($table=='sk_goods')
{
$sql = " UPDATE $table SET sys_status = $status WHERE goods_id = $id  ";
$result = $con->query($sql);
if($result){
    
    echo '1';
}



}

if($table=='sk_trade'){
    
    $sql = " UPDATE $table SET sys_status = $status WHERE trade_id = $id  ";
$result = $con->query($sql);
if($result){
    
    echo '1';
}

    
}

if($table=='sk_active'){
    
    $sql = " UPDATE $table SET sys_status = $status WHERE active_id= $id  ";
$result = $con->query($sql);
if($result){
    
    echo '1';
}

    
}

if($table=='sk_user')
{
$sql = " UPDATE $table SET user_status = $status WHERE user_id = $id  ";
$result = $con->query($sql);
if($status==1){
    
    $sql1 = " UPDATE $table SET buy_check = 0 WHERE user_id = $id  ";
    $result1 = $con->query($sql1);
}
if($result){
    
    echo '1';
}



}


