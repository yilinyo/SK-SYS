<?php

//同步redis缓存
require_once '../../config/connect_rd.php';
require_once '../../config/connect_db.php';


  
  
$sql='select goods_id , num_left from sk_goods where 1';

 $result = $con->query($sql);
         
if($result->num_rows!=0)
  {
      while($row = $result->fetch_assoc()) {
          
      $gid=$row['goods_id'];
      $key='goods_'.$gid.'num';
      $values=$row['num_left'];
      $redis->set($key,$values);

      }
    
    
  }