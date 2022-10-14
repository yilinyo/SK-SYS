<template>
        <div>
            <div class="msgName">{{info.goods_title}}</div>
            <div class="msgsInFo">高性价比理财产品</div>
        </div>
</template>

<script>
export default {
name:"shopInfoTop",
props: ['info']
}
</script>

<style scoped>
.msgName{
    font-size:22px;
}
.msgsInFo{
    margin-top:5%;
}
</style>