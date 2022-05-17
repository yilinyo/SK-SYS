<?php
//生产者发消息


include '../config/connect_mq.php';




class Publisher extends mqService
{
    public function __construct($exchangeName,$queueName,$routeKey)
    {
        parent::__construct($exchangeName,$queueName,$routeKey);
    }
    public function callback($envelope, $queue){

    }
}

$publisher = new Publisher('ex1','','route1');




    $publisher->sendMessage($info);

