<?php


//手动执行mq消费者 可在本目录下执行 php consumer.php


require '../config/connect_mq.php';
    
require 'details.php';
 
class Consumer extends mqService
{
    
    
    public function __construct($exchangeName,$queueName,$routeKey)
    {
        parent::__construct($exchangeName,$queueName,$routeKey);
    }
    //重写虚基类中的虚拟方法、
    public function callback($envelope, $queue){
       
        
        $msg=$envelope->getBody();
        
        $info=json_decode($msg,true);
        include 'server.php';
 
        echo '正在处理中....'."\n";
        
        echo $envelope->getBody()."\n";
        //显式确认，队列收到消费者显式确认后，会删除该消息
       
        $queue->ack($envelope->getDeliveryTag());
        
        
    }
 
}
$consumer = new Consumer('ex1','qu1','route1');
$consumer->dealMessage();
