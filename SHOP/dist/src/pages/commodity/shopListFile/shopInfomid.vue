<template>
<div class="mid">
      <div  class="midall">
        <div class="infomid">利率</div>
        <div class="infomidinfo rate">{{info.goods_rate}}</div>
      </div>
       <div  class="midall">
        <div class="infomid ">原价</div>
        <div class="infomidinfo before ">{{info.goods_price_normal}}</div>
      </div>
       <div  class="midall">
        <div class="infomid">现价</div>
        <div class="infomidinfo now">{{info.goods_price_discount}}</div>
      </div>
      <div class="time">
          <h5 class="timeF" >份数</h5>
        <timeI :ti='info'/>
      </div>
</div>
</template>

<script>
import timeI from "./timeI.vue"
export default {
name:"mid",
props: ['info'],
components:{
    timeI
}
}
</script>

<style scoped>
.mid{
    display:flex;
    flex-direction:column;
    margin-top:10px;
}
.midall{
    display:flex;
    margin-bottom:10px;
}
.infomid{
    padding-left:10px;
    padding-right:10px;
    font-size:14px;
    background-color:rgba(248, 116, 116, 0.171);
    border-radius:14px;
    margin-right:20px;
}
.time{
    width:100%;
    margin-top:10px;
    display:flex;
    justify-content: space-around;
}
.timeF{
    display:inline-block;
}
.rate{
    font-size:20px;
    color: #ffaa47;
    font-weight: bold;
    font-style: italic
}
.before{
    font-size:15px;
    text-decoration:line-through
}
.now{
    font-size:20px;
    color: #ffaa47;
    font-weight: bold;
    font-style: italic
}
</style>