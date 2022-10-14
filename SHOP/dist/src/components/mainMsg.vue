<template>
<div>
      <ul class="nav nav-tabs"> 
          <li class="tt"><h2 class="title">A22 MyBank</h2></li>

          <li :class="{active: isActive === '1'}" @click="change('1')">
              <router-link :to="`/pages/mainstore`" active-class="active">
              <span class="glyphicon glyphicon-home"></span>
              我的主页</router-link></li>
          <li :class="{active: isActive === '2'}" @click="change('2')">
              <router-link  :to="`/pages/shoppingCart`" active-class="active">
              <span class="glyphicon glyphicon-list-alt"></span>
              我的订单</router-link></li>

            <search v-if="isActive === '1'"></search>

            <li class="login" v-if="!isLogin">
              <a href="/SHOP/login/login2.html" >
              <span class="glyphicon glyphicon-user"></span>
              请登录</a></li>
            <li class="login nav-item dropdown" v-if="isLogin">
                <a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false" >{{usermsg}}</a>

                <div class="dropdown-menu" @click="quit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
                        <a class="dropdown-item" >退出</a>
                </div>
                </li>
      </ul>

      <router-view></router-view>

      <footers></footers>
</div>
</template>
<script>
import search from './search.vue'
import footers from '../pages/footers.vue'
import axios from "axios"
export default {
    name:'Myheader',
    data(){
        return{
            isLogin:localStorage.getItem('usermsg')??false,
            isActive:localStorage.getItem('local')??"1",
            usermsg:localStorage.getItem('usermsg'),
        }
    },
methods:{

    quit(){
        localStorage.removeItem('usermsg');
        window.location.reload();
         localStorage.clear();
    },
    change(x){
        localStorage.setItem('local',x)
        this.isActive=x;
    }
},
components:{
  search,
  footers,
},

mounted(){
if(this.isLogin){
      axios({
        method:"POST",
        // url:'/api/api/shop/login.php',
        url:'../../../api/shop/login.php',
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
            username:localStorage.getItem('usermsg'),
            password:localStorage.getItem('password')
           }
    }).then((response)=>{
        this.$store.dispatch('changeauser',response.data)
    })
}else{
    const temp={
        buy_check:0,
    };
    this.$store.dispatch('changeauser',temp)
}
}
}
</script>

<style scoped>
.glyphicon{
    margin-right:10px;
}
.nav-tabs{
    height:50px;
    background-color:#2b303b;
    position:relative;
}
.nav-tabs li{
height:102%;
}
.nav-tabs li a{

    font-size:110%;
    display:inline-block;
    height:100%;
 line-height:30px;
}
.login{
    position:absolute;
    height:50px;
    right:10px;
    margin-right:30px;
}
.title{
    color:white;
    margin:0;
    display:inline-block;
    margin-top:10px;
}
.tt{
    margin:0 2% 0 2%;
}
.dropdown-menu{
    min-width: 100%;
    text-align:center;
    cursor: pointer;
}
.dropdown-menu a{
    vertical-align:middle;
    text-decoration: none;
    color:rgb(151, 111, 111) !important;
    cursor: pointer;
}
.bi-box-arrow-right{
    vertical-align: middle;
}
</style>