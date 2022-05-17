<?php
//注册
header('Content-type:application/json');//json
include '../../config/connect_db.php';
$username=isset($_POST['username']) ? $_POST['username'] : exit("error"); #用户名
$password=isset($_POST['password']) ? $_POST['password'] : exit("error"); #密码
$birthday= isset($_POST['birth']) ? $_POST['birth'] : exit("error");
$sex=isset($_POST['sex']) ? $_POST['sex'] :exit("error");
//判断用户是否已存在




$sql = "select * from sk_user where username='$username'";
$result = mysqli_query($con,$sql);

$result_array = mysqli_fetch_array($result);
		if($result_array){
		    
		    $arr=array(
		        
		        'status'=>'101',
		        'msg'=>'用户名已经存在'
		        
		        );
			echo json_encode($arr,JSON_UNESCAPED_UNICODE);
			return;
		}
		else{
		   //birth转换为年龄 
		    $age = date('Y', time()) - date('Y', strtotime($birthday)) - 1;  
    if(date('m', time()) == date('m', strtotime($birthday))){ 
    if(date('d', time()) > date('d', strtotime($birthday))){  
        $age++;  
    } 
} 
    elseif(date('m', time()) > date('m', strtotime($birthday))){  
    $age++;  
    }
    
    //随机生成信用值
    $a=mt_rand(0,100);
if($a<80){
    $credit=mt_rand(90,100);
}
else if($a>=80&&$a<=95)
{
    $credit=mt_rand(60,89);
}
else{
    $credit=mt_rand(0,59);
}
		

$sql = "select * from sk_limit where 1";
$res = $con->query($sql);

while($row = $res->fetch_assoc()){
    
   $creditlimit =$row['credit'];
   $agelimit=$row['age'];
    
    
}
 $buy_check=1;
if($credit<$creditlimit||$age<$agelimit)
{
    
    $buy_check=0;
}


		    //信息入数据库
		
		$str=$password.'A22';
			$password=md5($str);
			
			//md5加密
			
			
			$sql_insert = "insert into sk_user (`username`,`password`,`age`,`credit`,`sex`,`birth`,`buy_check`) values ('$username','$password','$age','$credit','$sex','$birthday','$buy_check')";
		
			$result_insert =  mysqli_query($con,$sql_insert);
			if($result_insert){
			    
		    $arr=array(
		        
		        'status'=>'102',
		        'msg'=>'注册成功'
		        
		        );
		        
		        echo json_encode($arr,JSON_UNESCAPED_UNICODE);
		        
			}
			else{
			  $arr=array(
		        
		        'status'=>'103',
		        'msg'=>'系统繁忙，请稍后再试'
		        
		        );
		        
		        echo json_encode($arr,JSON_UNESCAPED_UNICODE);
		        
			}
		}

?>
