<?php

//封装Cache类
class Cache {

    private $cache_path;//path for the cache

    private $cache_expire;//seconds that the cache expires

 

    //cache constructor, optional expiring time and cache path ---------60min

    public function __construct($exp_time=3600,$path="cache1/"){

        $this->cache_expire=$exp_time;

        $this->cache_path=$path;

    }

 

    //returns the filename for the cache

    private function fileName($key){

           $path=$this->cache_path;
           
        return $path.$key;

    }

 

    //creates new cache files with the given data, $key== name of the cache, data the info/values to store

    public function put($key, $data){

        $values = serialize($data);

        $filename = $this->fileName($key);
        
       // $filename='cache1/'.$filename;
        $file = fopen($filename, 'w');

        if ($file){//able to create the file

            fwrite($file, $values);

            fclose($file);

        }

        else return false;

    }

 

    //returns cache for the given key

    public function get($key){

        $filename = $this->fileName($key);
      //  $filename='cache1/'.$filename;

        if (!file_exists($filename) || !is_readable($filename)){//can't read the cache

            return false;

        }

        if ( time() < (filemtime($filename) + $this->cache_expire) ) {//cache for the key not expired

            $file = fopen($filename, "r");// read data file

            if ($file){//able to open the file

                $data = fread($file, filesize($filename));

                fclose($file);

                return unserialize($data);//return the values

            }

            else return false;

        }

  
        else {
            return false;}//was expired you need to create new

    }
    
 //move cache for the given key
    public function move($key){
        
         $filename = $this->fileName($key);
       //  $filename='cache1/'.$filename;
        if(file_exists($filename)){
            unlink($filename);
            return true;
            
        }
        else{
            
            return false;
        }
        
    }
    
    

}





