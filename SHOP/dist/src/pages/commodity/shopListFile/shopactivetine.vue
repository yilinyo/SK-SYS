<template>
<small class="time">
    <span v-if='this.isORnot==true'>活动时间还剩:</span>
    <span v-if='this.isORnot==false'>距离活动开始时间还剩:</span>
    <span class="day x">{{oDay}}<span class="light">天</span>
    </span><span class="hour x"> {{oHours}}<span class="light">小时</span></span>
    <span class="min x">{{oMinutes}}<span class="light">分钟</span></span>
    <span class="sec x">{{oSeconds}}<span class="light">秒</span></span>
</small>
</template>

<script>
export default {
name:"shopactivetime",
props: ['info','isORnot'],
data(){
    return {
       time:''
    }
},
computed:{
countDown(){
    return (this.info - this.time/1000)
},
oDay(){
    return parseInt(this.countDown/(24*60*60))},
// 获取小时数 
// 特别留意 %24 这是因为需要剔除掉整的天数;
oHours(){
    return parseInt(this.countDown/(60*60)%24)},            
// 获取分钟数
//同理剔除掉分钟数
oMinutes(){
    return parseInt(this.countDown/60%60)},
// 获取秒数
// 因为就是秒数  所以取得余数即可
oSeconds(){
    return parseInt(this.countDown%60)}
},
mounted(){
    let that = this
    this.timer = setInterval(function () {
      that.time = new Date()
    })
},
beforeDestroy: function () {
    if (this.timer) {
      clearInterval(this.timer)
    }
}
}
</script>

<style scoped>

.x{
    color:rgb(206, 14, 14);
    font-size:30px;
}
.light{
    font-size:20px;
    color:rgb(119, 119, 156)
}
</style>