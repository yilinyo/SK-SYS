<template>
<div class="container">
    <div class="row">
    <div v-for="(p,index) of 2" 
    :key="index"
        :class="classJob[$store.state.isAct==index?0:1]"
        @click="changew(index)"
    ><h4>{{RiQi[index]}}</h4></div>
    </div>
</div>
</template>

<script>
export default {
name:"commodity",
data(){
   return{
       RiQi:["本场秒杀",'下场预告'],
       classJob:[
        'col-xs-6'
        ,'col-xs-6f']
   }
},
methods:{
    changew(index){
        this.$store.dispatch("changeAct",index);
    }
}
}
</script>

<style scoped>
    .row{cursor: pointer;
        margin:0 auto;
        width:90%;
        height:60px;
        display: flex;
        justify-content:space-around;
        transition: all 1s;
    }
    .col-xs-6{
        border-radius:15px;
        height:100%;
        width:65%;
        background-image: url(../../img/module-seckill-tab-bg-active.png);
        background-position:center;
        background-size:cover ;
        text-align: center;
        color: rgb(255, 255, 255);
    }
    .col-xs-6:after{
        content: "";
        display:inline-block;
        width:10%;
        border:1px solid #ffe3bd;
    }
    .col-xs-6f{
        border-radius:15px;
        height:100%;
        width:35%;
        background-image: url(../../img/module-seckill-tab-bg-normal.png);
        background-position:center;
         text-align: center;
        background-size:cover;
    }
       
</style>