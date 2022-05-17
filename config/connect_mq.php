<?php



abstract class mqService{
    
    
    
    
    
    //配置请在下里，切勿修改其他
    
    
    
    
    
    protected $config = [
       '
    host' => '127.0.0.1',   //rabbitmq连接地址

    'port' => '5672',   //amqp端口

    'login' => 'guest',  //登录用户

    'password' => 'guest',   //登陆密码

    'vhost'=>'/'            //默认'/'
    
    ];





    //配置请在上面，切勿修改其他







    protected $connection;     //链接
    protected $channel;        //通道
    protected $ex;             //交换机
    public $queue;          //消费者队列

    protected $exchangeName = '';          //交换机名
    protected $queueName = '';             //队列名
    protected $routeKey = '';              //路由键
    protected $exchangeType = 'direct';    //交换机类型
    
    
    protected $delivery_mode = 2;          //消息类型  

    //初始化
    public function __construct($exchangeName, $queueName, $routeKey,$exchangeType = 'direct', $config = array())
    {
        $this->exchangeName = empty($exchangeName) ? '' : $exchangeName;
        $this->queueName = empty($queueName) ? '' : $queueName;
        $this->routeKey = empty($routeKey) ? '' : $routeKey;
        $this->exchangeType = empty($exchangeType) ? '' : 'direct';
        if (!empty($config)) {
            $this->setMQConfig($config);
        }

        //创建链接
        $this->connection = new AMQPConnection($this->config);
        if(!$this->connection->connect()) 
            die('Connect errory : Can not connect to the broker');


        //在链接中创建通道与交换机
        $this->channel = new AMQPChannel($this->connection);
        $this->ex = new AMQPExchange($this->channel);
        //设置交换机
        $this->setExchange($exchangeName,$exchangeType);
        
        //消费者名称存在时设置队列
        if($this->queueName){
            $this->queue = new AMQPQueue($this->channel);
            $this->setQueue();
        }



    }

    /**
     * 发送消息
     * mix : msg
     */
    public function sendMessage($msg){
        // wait service logic
  
         if($this->ex->publish(json_encode($msg),$this->routeKey,AMQP_NOPARAM,['deliver_mode' => $this->delivery_mode]) )
         return true;
         
         else {
             return false;
         }

    }

    //处理消息
    public function dealMessage(){

        // wait service logic

        $this->queue->consume(function($envelope, $queue){
            $this->callback($envelope, $queue);
        });
    }

	//申明消费者中的虚函数
    abstract public function callback($envelope, $queue);

    //设置队列
    protected function setQueue(){
        $this->queue->setName($this->queueName);
        //设置队列持久化
        $this->queue->setFlags(AMQP_DURABLE);
        //声明队列
        $this->queue->declareQueue();
        //交换机与队列通过routeKey进行绑定
        $this->queue->bind($this->exchangeName,$this->routeKey);
    }
    //设置交换机
    protected function setExchange($name,$type){
        //AMQP_EX_TYPE_DIRECT:直连交换机
        //AMQP_EX_TYPE_FANOUT:扇形交换机
        //AMQP_EX_TYPE_HEADERS:头交换机
        //AMQP_EX_TYPE_TOPIC:主题交换机

        $this->ex->setName($name);
        $this->ex->setType($type);
        $this->ex->setFlags(AMQP_DURABLE);
        $this->ex->declareExchange();
    }
    //重设mq配置
    protected function setMQConfig($config){
        if(!is_array($config))
            die('Type error:config not a array');
            

        foreach($config as $k => $v){
            $this->config[$k] = $v;
        }

    }

}