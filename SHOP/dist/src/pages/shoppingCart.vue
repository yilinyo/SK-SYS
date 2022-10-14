<template>
<div>
    <div class="xy-center container">

      <div class="left-main">
        <div class="imgg ">
          <div class="top"></div>
            <h2>{{this.user.username}}</h2>
            </div>
            <div class="list-user">
                <h2 class="sss">我的信息</h2>
                <h3>生日:{{this.user.birth}}</h3>
                <h3>性别:{{this.user.sex=="female"?"女":"男"}}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-female" viewBox="0 0 16 16" v-if="this.user.sex=='female'">
                  <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16" v-if="this.user.sex=='male'">
                <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
                  </svg>
                </h3>
                <h3>账户余额：<span class="count">{{this.user.account}}</span>￥</h3>
            </div>
      </div>
          <div class="right-main">
            <div class="left-top">
              <div class="listsd">
        <span class="	glyphicon glyphicon-edit"></span> 
          <div class="po">
            <div class="sda">{{this.msgList.length}}</div>
            <div>待支付订单</div>
          </div>
        </div>
        <div  class="listsd">
        <span class="glyphicon glyphicon-shopping-cart"></span>
        <div class="po">
                <div class="sda">{{this.isBuy.length}}</div>
            <div>已完成订单数</div>
          </div>
        </div>
          </div>
      <div class="left-orders">
              <h2 class="titles">待支付订单</h2>
      <div class="bs-example" data-example-id="striped-table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>产品名称</th>
            <th>产品详情</th>
            <th>数量</th>
            <th>价格</th>
            <th>确认订单并支付</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p,index) of msgListnum[msgList_L]" :key="index" >
            <td>{{p.num}}</td>
            <td>{{p.goods_title}}</td>
            <td>
              <span>利率:{{p.goods_rate}} / </span>
        
              <span>存期:{{p.goods_term}}</span>
            </td>
            <td>{{p.num_total}}</td>
            <td>{{p.price_total}}</td>
            <td>     
              <div class="btnBig"> 
            
                  <div class="btns is" @click.once="sendmsg(p)">确认购买</div>
              </div>
              </td>
            <td><button  @click="deletemsg(p)"><span class="glyphicon glyphicon-trash" title="点击删除订单"></span></button></td>
          </tr>
        </tbody>
      </table>
<nav aria-label="Page navigation example">
<ul class="pagination">
        <li class="page-item"><a class="page-link" @click="go(-1)">Previous</a></li>
        <li class="page-item" v-for="(p,index) of msgListnum" :key=index>
          <a class="page-link" @click="msgList_L=index">{{index+1}}</a>
          </li>
        <li class="page-item"><a class="page-link" @click="go(1)">Next</a></li>
</ul>
</nav>
</div>
      </div>
        <div class="left-orders xc">
          <div class="asd"> 
<h2 class="titles">已完成订单</h2>
</div>
<div class="bs-example" data-example-id="striped-table">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                    <th>订单名称</th>
                    <th>数量</th>
                    <th>价格</th>
                    <th>时间</th>
                </tr>
                  </thead>
                   <tbody>
                    <tr v-for="(p,index) of msgListnumNot[msgList_N]" :key="index" >
                      <th>{{p.num}}</th>
                      <th>{{p.goods_title}}</th>
                      <th>{{p.num_total}}</th>
                      <th>{{p.price_total}}</th>
                      <th>{{getTimestampConversion(p.time_pay)}}</th>
                    </tr>
                  </tbody>
          </table>
<nav aria-label="Page navigation example">
        <ul class="pagination">
        <li class="page-item"><a class="page-link"  @click="goIs(-1)">Previous</a></li>
        <li class="page-item" v-for="(p,index) of msgListnumNot" :key=index><a class="page-link" @click="msgList_N=index">{{index+1}}</a></li>
        <li class="page-item"><a class="page-link"  @click="goIs(1)">Next</a></li>
</ul>
</nav>
        </div>
        </div>
    </div>
  </div>
</div>
</template>

<script> 
import axios from 'axios'
import {mapState} from 'vuex'
export default {
name:'shoppomhCart',

mounted(){
  axios({
    method:"POST",



    // url:'/api/api/shop/tradeinfo.php',
    url:"../../../api/shop/tradeinfo.php",



    params:{
      uid:localStorage.getItem('userid')
    }
  }).then((response) => {
    let notpuy=[];
    let puy=[];
    for(const p of response.data){
      if(p.sys_status=="0"){
        notpuy.push(p)
      }
      else if(p.sys_status=="2"){
        puy.push(p)
      }
    }
    this.msgList=notpuy;
    this.isBuy=puy;
  })

},
data(){
  return{
      msgList:[],
      isBuy:[],
      msgList_L:0,
      msgList_N:0
  }
},
computed:{

  msgListnumNot(){
      let temp=this.isBuy;
      for(let i=0;i<temp.length;i++){
        let j=i+1;
        temp[i].num=j;
      }
      const arrNum = Math.ceil(temp.length/5, 5); // Math.ceil()向上取整的方法，用来计算拆分后数组的长度
        let index = 0; // 定义初始索引
        let resIndex = 0; // 用来保存每次拆分的长度
        const result = [];
        while(index< arrNum){
            result[index]=temp.slice(resIndex,5+resIndex);
            resIndex +=5;
            index++;
        }
        return result;
  },
  msgListnum(){
      let temp=this.msgList;
      for(let i=0;i<temp.length;i++){
        let j=i+1;
        temp[i].num=j;
      }
      const arrNum = Math.ceil(temp.length/5, 5); // Math.ceil()向上取整的方法，用来计算拆分后数组的长度
        let index = 0; // 定义初始索引
        let resIndex = 0; // 用来保存每次拆分的长度
        const result = [];
        while(index< arrNum){
            result[index]=temp.slice(resIndex,5+resIndex);
            resIndex +=5;
            index++;
        }
        return result;
  },
search(x){
    const temp=[];
    for(const p of this.$store.state.total){
      if(x==p.goods_id){
        temp.push(p)
      }
    }
    return temp;
  },
  ...mapState(['user'])
},
methods:{
    getTimestampConversion(timestamp) {
  let timeStamp
  let timeStampLen = timestamp.toString().length
  if (timeStampLen === 10) {
    timeStamp = timestamp * 1000
  } else if (timeStampLen === 13) {
    timeStamp = timestamp
  } else {
    timeStamp = timestamp
  }
  let date = new Date(timeStamp) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = (date.getFullYear() + '-')
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = (date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ')
  let h = (date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':')
  let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':')
  let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
  return Y + M + D + h + m + s
},
  goIs(index){
if(index==-1&&this.msgList_N!=0){
      --this.msgList_N;
    }
    else if(index==1&&this.msgList_N!=this.msgListnumNot.length-1){
      ++this.msgList_N;
    }
  },
  go(index){
    if(index==-1&&this.msgList_L!=0){
      --this.msgList_L;
    }
    else if(index==1&&this.msgList_L!=this.msgListnum.length-1){
      ++this.msgList_L;
    }
  },
    change(index){
this.msgList_L=index;
  },
deletemsg(p){
if(confirm("是否删除？")){
axios({ 
      method:"POST",


      url:'../../../api/shop/trade.php',
      // url:'/api/api/shop/trade.php',


 transformRequest: [function (data) {

    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
      data:{
       action:'cancel',
       trade_id:p.trade_id,
      }
        }).then((response)=>{
          if(response.data=="1"){
            alert("已删除")
            for(const x of this.$store.state.total){
              console.log(x.active_id,p.active_id)
              if(x.actve_id==p.actve_id){
                 localStorage.setItem(x.goods_id,false)
              }
            }
          }
        })
        .catch(function(error) {
          console.log(error);
          alert("抱歉，系统故障")
  });
  location.reload()
}
},
status(x){
  if(x=="0")
  return "活动未开始"
  else if(x=="1")
  return "秒杀进行中 "
  else if(x=="2")
  return "活动已下架"
},
sendmsg(p){

  axios({
      method:"POST",


      // url:'/api/api/shop/trade.php',
      url:'../../../api/shop/trade.php',


 transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
      data:{
       action:'pay',
       trade_id:p.trade_id
      }
        }).then((response)=>{
          
          if(response.data.status=="101"){
            alert((response.data.msg));
            location.reload()
          }
          else if(response.data.status=="102"){
            alert(response.data.msg)
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("抱歉，系统故障")
  });
},

},
}
</script>

<style >
.xc{
  margin-bottom:30px;
}
.count{
  color:#fd8d31;
}
.bi-gender-female{
  color:rgb(179, 54, 74);
}
.bi-gender-male{
  color:rgb(13, 115, 199);
  font-weight: 800;
}
.page-item{
  cursor: pointer;
}
.pagination{
  text-align:center;
}
.sda{
  padding-top:10px;
  font-size:30px
  
}
.po{
  width:60%;
  display: flex;
  margin-left:20px;
  flex-direction:column;
}
.listsd{
  display:flex;
  width:47%;
  height:90%;
  background-color:white;
  border-radius:10px;
  justify-content:space-around;
}
.listsd:hover{
  outline:1px solid #27ba9b
}
.glyphicon-shopping-cart{
   font-size:50px;
  color:#27ba9b;
 margin-top:4%;
 margin-left:5%;
}
.glyphicon-edit{
  font-size:50px;
  color:#27ba9b;
   margin-top:4%;
 margin-left:5%;
}
.asd{
  margin-top: 5%;
}
.sss{
  text-align:center;
  border-bottom: 1px solid rgb(26, 26, 26);
}
.btns{
    width:70%;
    height:90%;
    background:linear-gradient(134deg,#ffc470,#e98a3c);
    display:inline-block;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
}
.is:hover{
    background:linear-gradient(134deg,#ecc389,#fd8d31)
}
.btnmsg{
    display:inline-block;
    width:90%;
    height:3px;
    background:#1b1b1b;
    margin-top:5%;
}
.not{
    background:#7c7c7c;
    color:white
}
.was{
    background:#1b1b1b;
    color:white
}

.titles{
  padding-top:5%;
  padding-left:20px;
}
.xy-center{
    display:flex;
    /* height:1500px !important; */
    justify-content:space-around;
    margin-top:20px;
}
.left-main{
    width:20%;
    border-radius:10px;
    display:grid;
    grid-template-rows:300px  1fr;
}
.right-main{
    width:75%;
    border-radius:10px;
    /* display:flex;
    flex-direction: column; */
}
.left-main .imgg{
    width:100%;
    height:300px;
    background-color:white;
    border-radius:10px;
    text-align:center;
    display:flex;
    flex-direction: column;
    justify-content:space-around;
}
.left-main .imgg:hover{
    outline:1px solid #27ba9b
}
.left-main .imgg .top{
    width: 70%;
    /* height:150px; */
    padding:50% 0 0 50%;
    border-radius:50%;
    border:5px  solid  rgb(168, 149, 149);
    background-image: url('../img/4.jpg');
    background-position:center;
    background-size: cover;
    margin:10px auto;
}

.left-main .list-user{
width:100%;
/* height:50%; */
background-color:white;
margin-top:30px;
padding:30px;
text-align: center;
margin-bottom:30px;
} 
.left-main .list-user:hover{ outline:1px solid #27ba9b}
.left-main .list-user h1{
font-weight:normal;
}
.right-main .left-top{
    height:120px;
    display:flex;
    justify-content:space-between;

    border-radius:10px;
}

.boxs{
    width:15%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.boxs a .imgman{
    width:70px;
    height:70px;

}
.left-orders{
    border-radius:10px;
    margin-top:10px;
    width:100%;
    background-color:white;
}
.left-orders:hover{
  outline:1px solid #27ba9b
}
th{
    font-size:20px;
}
td{
  font-size:18px;
}
.container{
width:80%;
}
.pagination{
  padding-left:70%;
}

</style>