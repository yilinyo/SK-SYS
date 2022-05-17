<?php


//消费处理的服务内容：下单减库存
  include '../config/connect_db.php';
    $uid=$info['uid'];
    $gid=$info['gid'];
    $aid=$info['aid'];
    $num=$info['num'];
    $price=$info['price'];
    $goods=new Goods();
    $user= new User();
    $active = new Active();
    $uname=$user->getuname($uid);
    $at=$active->gettitle($aid);
    $gt=$goods->gettitle($gid);
    $gr=$goods->getrate($gid);
    $gterm=$goods->getterm($gid);
    $i=array(
        'active_id'=>$aid,
        'goods_title'=>$gt,
        'goods_rate'=>$gr,
        'goods_term'=>$gterm,
        'goods_id'=>$gid,
        'price_total'=>$price,
        'num_total'=>$num,
        'uid'=>$uid,
        'username'=>$uname,
        'active_title'=>$at
        );
      $time=time();
      $sql="INSERT INTO `sk_trade`( `active_id`, `goods_title`,`goods_rate`,`goods_term`,`goods_id`,`price_total`,`num_total`,`uid`,`username`,`active_title`,`time_confirm`,`sys_dateline`,`sys_lastmodify`) VALUES ('{$i['active_id']}','{$i['goods_title']}','{$i['goods_rate']}','{$i['goods_term']}','{$i['goods_id']}','{$i['price_total']}','{$i['num_total']}','{$i['uid']}','{$i['username']}','{$i['active_title']}',$time,$time,$time)";
         $result = $con->query($sql);
     
        
      $sql="UPDATE `sk_goods` SET `num_left`=`num_left` -$num  where goods_id='$gid' and `num_left` > 0";
         $result = $con->query($sql);
