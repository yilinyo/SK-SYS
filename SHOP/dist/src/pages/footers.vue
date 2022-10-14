<template>
<div>
      <footer >
        <!-- 联系方式 -->
        <div class="xy-contact"></div>
        <!-- 宣传方式 -->
        <div class="xy-service ">
            <div class="container">
                    <a href="#" class="fl">亲民</a>
                    <a href="#" class="fl">快捷</a>
                    <a href="#" class="fl">品质</a>
            </div>
        </div>
        <!-- 版权信息 -->
        <div class="xy-copyright">
            <div class="container">
                <p class="p1">
                <a href="#">关于我们</a>|
                <a href="#">帮助中心</a>|
                <a href="#">售后服务</a>|
                <a href="#">配送与验收</a>|
                <a href="#">商务合作</a>|
                <a href="#">搜索推荐</a>|
                <a href="#">友情链接</a>
                </p >
                <p class="p2">copyright@A22Mybank
                    </p>
            </div>
        </div>
    </footer>
    </div>
</template>

<script>
export default {
name:"footers",
}
</script>

<style>

.xy-service{
    background-color:#333333;
    height:141px;
}
.xy-service .container{
    border-bottom:1px solid gray;
    height:140px;
}

.xy-service .container  a{
    width:33.33%;
    height:100%;
    font: bold 21px  sans-serif;
    color:#fff;
    text-align:center;
    line-height:140px;
}
.xy-service .container  a::before{
content: " ";
display:inline-block;
height:25px;
width:25px;
vertical-align:middle;
padding-right:5px;
}

.fl{
    display:inline-block;
    width:30%;
}
.xy-copyright{
    padding-top:30px;
    height:170px;
    background-color:#333333;
}
.xy-copyright .container .p1{
    color:#999999;
    text-align:center;
    margin:0 auto;
}
.xy-copyright .container .p1 a{
    display:inline-block;
    color:#999999;
    font-size: 15px;
    padding:0 5px;
}
.xy-copyright .container .p2{
    color:#999999;
    text-align:center;
    padding-top:10px;
}
</style>