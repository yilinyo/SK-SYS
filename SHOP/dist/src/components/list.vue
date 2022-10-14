<template>
  <ul class="flexcolumn" >
     <li v-for="(p,index) of seck" 
     :key="index" 
     :class="{listNumber:!isclick[index],listNumber1:isclick[index]}" 
     @click="listChange(index)"><a class="lists" :href="'#'+index">{{p.active_title}}</a></li>
  </ul>
</template>
<script>
import {mapState} from "vuex"
export default {
    
name:'list',
data(){
    return{
        isclick:[true,false,false,false,false,false],
        type:['爆品秒杀','活动xxx','活动xxx','活动xxx','活动xxx','活动xxx']
    }
},
methods:{
    listChange(index){
        for(let i=0;i<this.isclick.length;i++){
            this.isclick[i]=false;
            if(i==index){
                this.isclick[i]=true;
                console.log(index);
            }
        }
    }
},
computed:{
     ...mapState(['activetotal']),
     ...mapState(['isAct']),
     ...mapState(['notactives']),
     seck(){
         if(this.isAct==0)
         return this.activetotal;
         return this.notactives
     }
}
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }
    .flexcolumn{
        display:flex;
        flex-direction: column;
        justify-content:space-between;
        font-size:15px;
        border-radius:5px;
        overflow: hidden;
        padding:0px;
    }
    .listNumber{
        opacity: 0.8;
        background-color: #fff5f1;
        display:inline-block;
        height:100%;
        text-align: right;
        line-height:41px;
        border-right: 0.5px solid rgba(58, 52, 52, 0.432);
        padding-right:10%;
        cursor:pointer;
        border:0.5px solid rgba(0, 0, 0, 0.13);
        background-image: linear-gradient(270deg,#f3d1c5,hsla(0,0%,100%,0));
    }
    .listNumber1{
        background-color: #fff5f1;
        display:inline-block;
        height:100%;
        text-align: right;
        line-height:41px;
        border-right: 4px solid #f76c68;
        border-bottom:0.5px solid rgba(0, 0, 0, 0.13);
        padding-right:10%;
        cursor:pointer;
        background-image: linear-gradient(270deg,#ffe9e1,hsla(0,0%,100%,0));
    }
    .lists{
        color:black !important;
    }

</style>