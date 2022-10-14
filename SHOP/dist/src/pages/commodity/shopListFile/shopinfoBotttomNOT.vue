<template>
    <div class="shopbottom">
      <div class="total">总计
          <div class="number">{{parseInt(info.goods_price_discount)*choice}}</div>
          元
          </div>
    <div class="isN" @click="brint">还未开始</div>
  </div>
</template>

<script>
export default {
    name:"shopnot",
    props:['info'],
    data(){

    return{
        choice:1,
    }
    },
    methods:{
        brint(){
            alert("活动还未开始")
        }
    }
}
</script>

<style scoped>
.shopbottom{
    display:flex;
    flex-direction: column;
    height:40%;
    width:100%;
    background-color:rgba(143, 38, 38, 0.993);
    color:#ffd2b1;
    justify-content: space-around;
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
.isN{
    font-size:20px;
    margin:0 auto;
    text-align:center;
    width:80%;
    height:40px;
    background-color:gray;
    line-height:40px;
    border-radius: 10px;
    cursor:pointer;
}
</style>