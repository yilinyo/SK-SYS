<?php
//获取提交数据

require_once '../../config/connect_db.php';

$username=isset($_POST['username']) ? $_POST['username'] : exit('error');//获取提交用户名
$password=isset($_POST['password']) ? $_POST['password'] : exit('error');//获取提交密码
 

$password=md5($password.'A22');


$sql='select * from sk_user where username='."'{$username}'and password="."'$password';";
  $res=mysqli_query($con,$sql);



  if($res->num_rows!=0)
  {
      while($row = $res->fetch_assoc()) {
          
     $user_id= $row["user_id"] ;
     $username= $row["username"] ;
     $birth=$row["birth"];
     $sex=$row["sex"];
     $age=$row["age"];
     $account=$row["account"];
     $credit=$row["credit"];
     $user_status=$row["user_status"];
     $buy_check=$row["buy_check"];
      }
      
      
     $arr=array(
		        
		        'status'=>'101',
		        'msg'=>'登陆成功',
		        'user_id'=>$user_id,
		        'username'=>$username,
		        'birth'=>$birth,
		        'sex'=>$sex,
		        'age'=>$age,
		        'credit'=>$credit,
		        'account'=>$account,
		        'buy_check'=>$buy_check,
		        'user_status'=>$user_status
		        
		        );
			echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    
  }
  else
  {
   
  $arr=array(
		        
		        'status'=>'102',
		        'msg'=>'密码错误'
		        
		        );
			echo json_encode($arr,JSON_UNESCAPED_UNICODE);
  }
  
  ?>
