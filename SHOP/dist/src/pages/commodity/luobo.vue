<template>
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel" height=300px>
    <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
     </ol>
    <div class="carousel-inner ui-sortable publish-slider" role="listbox" id="publish-copy" >
        <div class="item active">
            <img src="../../img/ad1.png" class="main">
            <div class="carousel-caption">
                The First
            </div>
        </div>
        <div class="item">
                <img src="../../img/ad2.png" class="main">
            <div class="carousel-caption">
             The Second
            </div>
        </div>
        <div class="item">
            <img src="../../img/ad3.png" class="main">
            <div class="carousel-caption">
               The Third
            </div>
        </div>
    </div>
  <a class="carousel-control-prev" href="#carousel-example-generic" data-slide="prev">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>
    </a>
    <a class="carousel-control-next" href="#carousel-example-generic" data-slide="next">
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
    </a>
</div>

</template>

<script>
export default {
name:"luobo"
}
</script>
<style scoped>

.carousel-control-prev{
  color:#ccc;
  position: absolute;
  top:45%;
  left:1%;
  opacity: 0;
}
.carousel-control-next{
  color:#ccc;
  position: absolute;
  top:45%;
  right:1%;
  opacity: 0;
}
.slide:hover .carousel-control-next {
  opacity: 1;
}.slide:hover .carousel-control-prev{
  opacity: 1;
}
.main{
  width:100% !important;
  height:250px !important;
}
</style>