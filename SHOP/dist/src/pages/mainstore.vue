<template>
<div class="temp">
  <div class="container">
    <div class="help">
      <list/>
        </div>        
        <h2>爆品·秒杀</h2>
        <luobo class="luobo"/>
        <commodity class="dian"/>
        <shopList class="shopL"/>
  </div>
  </div>
</template>

<script>
import list from "../components/list.vue"
import Commodity from './commodity/commodity.vue'
import luobo from "./commodity/luobo.vue"
import shopList from "./commodity/shopListFile/shopListtotal.vue"
import axios from 'axios'
export default {
name:'mainstore',
data(){
  return{
    datas:[],
  }
},
components:{
  list,
  luobo,
Commodity,
shopList,

},
mounted(){
axios({
        method:'POST',
        // url:'/api/api/shop/backinfo.php',
         url:'../../../api/shop/backinfo.php',
        params:{table:'sk_goods'}
        })
.then((response)=>{
  const data=[];
  for(const p of response.data){
    if(p.sys_status!="0"){
      data.push(p)
    }
  }
  this.datas=data;
  axios({
      method:'POST',
        // url:'/api/api/shop/backinfo.php',
        url:'../../../api/shop/backinfo.php',
        params:{table:'sk_active'}
  }).then((response)=>{
    const temp=[];
    const tempNOT=[];
    const temptotal=[];
    const temptotalNot=[];
    for(const p of response.data){
      if((parseInt(p.time_begin)-Date.parse(new Date())/1000<0)&&
        (parseInt(p.time_end)-Date.parse(new Date())/1000>0)&&p.sys_status=="1"){
        temp.push(p.active_id);
        temptotal.push(p);
      }
      else if((parseInt(p.time_begin)-Date.parse(new Date())/1000>0)&&p.sys_status=="1"){
        tempNOT.push(p.active_id);
        temptotalNot.push(p);
      }
    }
  this.$store.dispatch("changeactivetotal",temptotal)
  this.$store.dispatch("notactive",temptotalNot)
    const temp1=[];
    const temp2=[];
  for(const p of this.datas){
      if(temp.indexOf(p.active_id)!=-1){
        temp1.push(p);
      }
      else if(tempNOT.indexOf(p.active_id)!=-1){
        temp2.push(p);
      }
    }
    this.$store.dispatch("not",temp2)
    this.$store.dispatch("changeTotal",temp1)//
}
  )
});

//获取用户购买后的状态

if(localStorage.getItem("usermsg")!=null){
    axios({
      method:'POST',
      // url:'/api/api/shop/tradeinfo.php',
      url:"../../../api/shop/tradeinfo.php",
      /////
      params:{uid:localStorage.getItem("userid")}
      //////
      }).then((response)=>{
        const temp=[];
    if(response.data.length!='0'){
        for(const p of response.data){
          if(p.sys_status=="0"){
            temp.push(p)
          }
        }
      }
  this.$store.dispatch('changeItem',temp)
}
)
}
},

}
</script>
<style scoped>
.dian{
  margin-top: 20px;
}
.help{
  z-index:9999999;
  position:fixed;
  top:50%;
  left:0px;
  height:250px;
  width:150px;
}
.shopL{
  margin-top:20px;
}
.temp{
    position: relative;            
}
div:after{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image:url('../img/ring.png');
    background-size:80%;
    opacity: 0.1;
    z-index:-1;
}
</style>