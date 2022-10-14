<template>
<div>
<div v-if="$store.state.isAct==0">
    <div class="row " v-for="(t,index) of activetotal" :key="index" :id="index">
                <h1 class="tit"><span class="glyphicon glyphicon-tags" v-if="seck(t.active_id).length!=0"></span>  {{t.active_title}}
                <shopactivetime :info="t.time_end" :isORnot=true />
                </h1>
            <div class="isok">
                <div class="obscure" v-if="$store.state.user.buy_check=='0'"></div>
                <span class="obscure_text" v-if="$store.state.user.buy_check=='0'">抱歉，您不满足参与条件</span>
                <div class="col-md-5ths" v-for="(p,index) of seck(t.active_id)" :key="index">  
                    <div class="box">
                        <shopInfoTop class="ar" :info="p" />
                        <shopInfomid class="ar" :info="p" />
                        <shopinfoBottom  :info="p" :itess="t"/>
                    </div>        
                </div>
                </div>
            </div>
    </div>
<div  v-if="$store.state.isAct==1">

    <div v-if="!this.$store.state.notactives.length" class="li">
    <h2 >抱歉，没有下场活动了</h2>
    </div>
      <div class="row " v-for="(t,index) of notactives" :key="index" :id="index">
                <h1 class="tit"><span class="glyphicon glyphicon-tags" v-if="seck(t.active_id).length!=0"></span>  {{t.active_title}}
                <shopactivetime :info="t.time_begin" :isORnot=false />
                </h1>
            <div class="isok">
                <div class="obscure" v-if="$store.state.user.buy_check=='0'"></div>
                <span class="obscure_text" v-if="$store.state.user.buy_check=='0'">抱歉，您不满足参与条件</span>
                <div class="col-md-5ths" v-for="(p,index) of secknot(t.active_id)" :key="index">  
                    <div class="box">
                        <shopInfoTop class="ar" :info="p"/>
                        <shopInfomid class="ar" :info="p" />
                        <shopinfoBotttomNOT :info="p"/>
                    </div>        
                </div>
</div>
            </div>
</div>
</div>
</template>

<script>
import shopInfoTop from "./shopInfoTop.vue"
import shopInfomid from "./shopInfomid.vue"
import shopinfoBottom from "./shopinfoBottom"
import shopactivetime from "./shopactivetine"
import shopinfoBotttomNOT from "./shopinfoBotttomNOT"
import {mapState} from "vuex"
export default {
name:"shopListtotal",
methods:{
      seck(p){
      const temp=[];
      for(const x of this.total){
          if(p==x.active_id){
              temp.push(x)
          }
      }
      return temp;
    },
secknot(p){
      const temp=[];
for(const x of this.not){
          if(p==x.active_id){
              temp.push(x)
          }
      }
      return temp;
    }
},

components:{
    shopInfoTop,
    shopInfomid,
    shopinfoBottom,
    shopactivetime,
    shopinfoBotttomNOT
},
computed:{
    ...mapState(['total']),
     ...mapState(['activetotal']),
     ...mapState(['notactives']),
     ...mapState(['not'])
},
}
</script>

<style scoped>
.obscure_text{
z-index:2;
position:absolute;
left: 50%;   
top:50%;    
transform:translate(-50%,-50%);
font-size:40px;
font-weight: 800;
}
.obscure{
    width:110%;
    height:110%;
    background-color:rgb(228, 232, 236);
    position:absolute;
    z-index:1;
    opacity:0.7;
    filter: blur(50px);

}
.tit{
    margin-bottom:50px
}
.col-md-5ths{
    height:437px;
    margin-bottom:20px;
}
.ar{
    padding-left:10%;
    
}
.isok{
    position:relative;
    overflow:hidden;
}
.box{
    width:100%;
    background-color: #fbf4ef;
    /* background-image: linear-gradient(rgba(216, 146, 89, 0.322),rgb(255, 255, 255) ); */
    height:100%;
    display:flex;
    flex-direction: column;
    padding-top:10%;
    justify-content: space-between;
}
.box:hover{
    outline:1px solid #d04d45;
     box-shadow:2px 0px 2px 0px rgba(0, 0, 0, 0.171);
}
.col-md-5ths{
    position: relative;
    min-height: 1px;
    padding-left: 8px;
    padding-right: 8px;
    
}
.col-md-5ths:after{
    position: absolute;
    content: "";
    background-image: url(../../../img/hot.png);
    width:30%;
    height:15%;
    top:-0.5%;
     background-repeat:no-repeat;
    background-size:100%;
}
 @media ( min-width : 992px) {
    .col-md-5ths {
      width: 20%;
      float: left;
    }
  }
.li{
    height:350px;
}
</style>