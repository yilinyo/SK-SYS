<?php







class  Goods{
    
    
    
    function search($table,$list,$info,$id){
        
            include '../config/connect_db.php';
           
    $sql = "select `$info` from `$table` where `$list`=$id ";
    $result = $con->query($sql);
    
       mysqli_close($con);
    if ($result->num_rows > 0) {
    // 输出数据
 
 
    while($row = $result->fetch_assoc()) {
        
       $i= $row[$info];
       
         return $i;
    }
    
}
    
}
     //获取库存
    public function getstock($gid){
        
    $stock=$this->search('sk_goods','goods_id','num_left',$gid);

        return $stock;
    }
    //获取秒杀价
      public function getprice($gid){
        
    $price_dis=$this->search('sk_goods','goods_id','goods_price_discount',$gid);

        return $price_dis;
    }
    //获取商品名称
    public function gettitle($gid){
        
    $goods_title=$this->search('sk_goods','goods_id','goods_title',$gid);

        return $goods_title;
    }
     //获取商品利率
    public function getrate($gid){
        
    $goods_rate=$this->search('sk_goods','goods_id','goods_rate',$gid);

        return $goods_rate;
    }
    //获取商品存期
     public function getterm($gid){
        
    $goods_term=$this->search('sk_goods','goods_id','goods_term',$gid);

        return $goods_term;
    }
    //获取商品用户可购买数目
     public function getlimit($gid){
        
    $num_user=$this->search('sk_goods','goods_id','num_user',$gid);

        return $num_user;
    }
    
    
    
}

class Active{
    
    function search($table,$list,$info,$id){
        
            include '../config/connect_db.php';
           
    $sql = "select `$info` from `$table` where `$list`=$id ";
    $result = $con->query($sql);
    
       mysqli_close($con);
    if ($result->num_rows > 0) {
    // 输出数据
 
 
    while($row = $result->fetch_assoc()) {
        
       $i= $row[$info];
       
         return $i;
    }
    
}
}
    
    //获取库存
    public function gettitle($aid){
        
    $active_title=$this->search('sk_active','active_id','active_title',$aid);

        return $active_title;
    }
    
    
    
}    

class User{
    
    
    
    
        function search($table,$list,$info,$id){
        
            include '../config/connect_db.php';
           
    $sql = "select `$info` from `$table` where `$list`=$id ";
    $result = $con->query($sql);
    
       mysqli_close($con);
    if ($result->num_rows > 0) {
    // 输出数据
 
 
    while($row = $result->fetch_assoc()) {
        
       $i= $row[$info];
       
         return $i;
    }
    
}
}
    
    
        public function getuname($uid){
        
    $username=$this->search('sk_user','user_id','username',$uid);

        return $username;
    }
    
    
    
    
    
}
    
    
    


    
    
    
    
    
    
