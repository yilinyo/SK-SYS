<?php

//手动初始化缓存可在本目录执行php init.php


require_once '../config/connect_rd.php';
require_once '../config/connect_db.php';
require_once 'cache.php';
  $cache = new Cache();
  
  
$sql='select goods_id , num_left from sk_goods where 1';

 $result = $con->query($sql);
         
if($result->num_rows!=0)
  {
      while($row = $result->fetch_assoc()) {
          
      $gid=$row['goods_id'];
      $key='goods_'.$gid.'num';
      $values=$row['num_left'];
      $redis->set($key,$values);
    
    if($values>0)
      $cache->move($key);
      
      
      
      }
    
    echo '初始化成功';
  }
  