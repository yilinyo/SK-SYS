<?php

    //连接redis
  $redis=new Redis();
  $result=$redis->connect('172.31.42.93',6379);//地址 端口
  $redis->auth('redis6sxfc');//Redis密码
  $redis->select(188);//选择数据库