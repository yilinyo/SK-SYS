<template>
  <div class="shopbottom">
      <div class="total">总计
          <div class="number">{{parseInt(info.goods_price_discount)*choice}}</div>
          元
          </div>

    <div class="btnBig" v-if="info.sys_status=='1'">
        <div class="btns" @click.once="sendmsgMD5" v-if='isclick=="false"||info.sys_status==2'>加入订单</div>
        <div class="fadess" @click="isadd" v-if='isclick=="true"'>已加入订单<span class="glyphicon glyphicon-ok"></span></div>
        <div class="btnmsg">
            <div class="btnmsgL" :style='{width:length}'></div>
        </div>
        <div class="btnre">还剩{{length}}</div>
    </div>
    <div class="btnBig" v-if="info.sys_status=='2'">
        <div class="xiajia">抱歉，商品已经下线</div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'

import qs from 'qs'
export default {
name:"shopinfoBottom",
data(){
    return{
        infos:this.info.goods_id,
        choice:1,
        left:parseInt(this.info.num_left),
        total:parseInt(this.info.num_total),
        isclick:""
    }
},
computed:{
    length(){
        return this.toPercent(this.left/this.total)
    }
},
props:['info','itess'],
methods:{
toPercent(point) {
    point=isNaN(point)?0:point;
      var str = Number(point*100).toFixed(1);
      str += "%";
      return str;
},
sendmsg(path){
  axios({
      method:"POST",
    //   url:'/api/test/buy5.php',
      url:'../../../../../test/buy5.php',
      headers:{
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },  
      data:qs.stringify({
          'aid':this.info.active_id,
          'gid':this.info.goods_id,
          'price':this.info.goods_price_discount,
          'time':this.itess.time_end,
          'num':1,
          'uid':JSON.parse(localStorage.getItem('userid')),
          'md5':path,
    })
}).then((response) => {
    if(response.data.status=='104'){
        console.log(response.data);
         alert(response.data.msg);
            localStorage.setItem(this.infos,"true")
            this.isclick="true";
    }
    else{
        alert(response.data.msg);
    }
    }).catch((error) => {console.log(error)})
},
sendmsgMD5(){
if(localStorage.getItem('usermsg')==null){
            alert("未登录")
          return;
        }

    const t=2022-parseInt(this.$store.state.user.birth.slice(0,4));
    if(t<16){
        alert("年龄未满十六岁")
        return;
    }

    if(this.$store.state.user.user_status=="1"){
        alert("用户异常");
        return;
    }

 function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
return null;
}
   if(getCookie("IP")){
       alert('同一IP短时间内多次请求')
       return;
   }

   var exp = new Date(); 
exp.setTime(exp.getTime() +500);
document.cookie =`IP=${window.returnCitySN};expires=${exp.toGMTString()}`;
axios({
        method:"POST",
    //    url:'/api/test/getkey.php',                 
       url:'../../../../../test/getkey.php',
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
         data:qs.stringify({
        'aid':this.info.active_id,
        'gid':this.info.goods_id,
        uid:localStorage.getItem('userid')
    })
}).then((response) => {
      const sm4 = require('sm-crypto').sm4;
        const key = '68756875687568756875687568756875' 
        let decryptData = sm4.decrypt(response.data, key);
        this.sendmsg(decryptData);
    })
},
isadd(){
        alert("已经加入订单，请勿多次点击")
}
},
mounted(){
    this.$bus.$on(this.infos,(x)=>{this.choice = x})

    if(localStorage.getItem(this.infos)==null)
      localStorage.setItem(this.infos,"false")

    for(const p of this.$store.state.items){
        if(p.goods_id==this.infos){
            localStorage.setItem(this.infos,"true");
        }
    }
    this.isclick=localStorage.getItem(this.infos)
},
}
</script>

<style scoped>
.xiajia{
   
      width:90%;
    height:30%;
    background:linear-gradient(134deg,#8a8a8a,#a0a0a0);
    display:inline-block;
    border-radius: 1px;
    cursor: pointer;
    color:rgb(255, 255, 255);
    margin-top:10%;
    line-height:150%;
}
.btnBig{
    height:60%;
text-align: center;

}
.shopbottom{
    display:flex;
    flex-direction: column;
    height:40%;
    width:100%;
    background-color:rgba(143, 38, 38, 0.993);
    color:#ffd2b1;
}
.total{
    width:100%;
    display:inline-block;
    padding:10px;
    margin:0px;
    font-size:10px;
}
.number{
display:inline-block;
font-size:20px;
}
.btns{
    width:90%;
    height:30%;
    background:linear-gradient(134deg,#ffc470,#e98a3c);
    display:inline-block;
    border-radius: 1px;
    cursor: pointer;
    color:rgb(255, 255, 255);
    margin-top:10%;
    line-height:150%;
}
.btns:hover{
    background:linear-gradient(134deg,#ecc389,#fd8d31)
}
.fadess{
    width:90%;
    height:30%;
    background: linear-gradient(134deg,#6b5f4e,#583110);
    display:inline-block;
    border-radius: 1px;
    cursor: pointer;
    color:rgb(255, 255, 255);
    margin-top:10%;
    line-height:150%;
}
.btnmsg{
    display:inline-block;
    width:90%;
    height:3px;
    background:#1b1b1b;
    margin-top:5%;
}
.btnmsgL{
    height:3px;
    background:#d68282;
}
.btnre{
    font-size:14px;
}
.isBuy{
    font-size:20px;
}
</style>