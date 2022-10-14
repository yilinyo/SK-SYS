<template>
    <li class="search">
                <div class="input-group">
					<input type="text" class="form-control" placeholder="搜索秒杀活动" v-model="searchMsg">
					<span class="input-group-btn">
						<button class="btn btn-default" type="button" @click="searchInfo">
                            <span class="glyphicon glyphicon-search"></span>
						</button>
					</span>
				</div>
            </li>
</template>

<script>

export default {
name: "searchLine",
data(){
    return{
        searchMsg:""
    }
},
methods:{
    searchInfo(){
const temp=[];
    for(const p of this.$store.state.total){
       if(p.goods_title.indexOf(this.searchMsg)!=-1){
           temp.push(p)
       }
    }
    this.$store.dispatch("changeTotal",temp)
    }
},

}
</script>

<style scoped>
.search{
    width:30%;
    position:absolute;
    margin-left:20%;
    opacity: 0.8;
    left:50%;
    transform:translateX(-50%)
}
.search:hover{
    opacity: 1;
}
.input-group{
    position:absolute;
    top: 50%;
	transform: translateY(-50%);
}
.input-group-btn{
    height:100%;
}
.btn{
    border-radius: 0 5px 5px 0;
    background-color:#ffffff;
    border-top:1px solid #52addd;
    height:100%;
}
.form-control{
   border-radius:5px 0 0 5px;
}
.btn:focus {outline:none;}
</style>