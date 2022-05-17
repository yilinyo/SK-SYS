<?php







function create_order(array $info,$t){
    
    
    
   include '../config/connect_rd.php';
 
   
   $uid=$info['uid'];//user id
   
   $gid=$info['gid'];//goods id
   
   $aid=$info['aid'];//active id
   
  

   $key='uid-'.$uid.'-aid-'.$aid.'-gid-'.$gid;
   
   $check=$redis->exists($key);
   
   if($check){
       
       
       
       return false;
   }
  
   $redis->hMset($key,$info);
   
    $time=(int)time();
   $limit=(int)$t-$time;
   
   
   $redis->hMset($key,$info);
   $redis->expire($key,$limit);
   
   return true; 
    
    
}



    
