<template>
<div class="tempL">
<select class="form-control" v-model="val">
<option v-for="(p,index) of listnumber" :key="index" class="options" :value="p">{{p}}份
</option>
</select>
</div>
</template>

<script>
export default {
name:"timeI",
props:['ti'],
data(){
    return {
    val:1,
    list:this.ti.goods_id,
    listnumber:parseInt(this.ti.num_user)
    }
},
watch:{
    val:{
        handler(n){
       this.$bus.$emit(this.list,n)
       console.log(this.$bus)
        }
    }
}
}
</script>
<style scoped>
.tempL{
    width:50%;

}
.tempL:hover{
outline:1px solid  rgb(208, 77, 69)  
}
.dropdown-menu{
    padding:0;
}
.dropdown-item{
    margin:0;
    width:100%;
    border:0;
}
.form-control{
    border-radius: 0;
    display:inline-block;
     border: none;
    outline: none;
    padding:0px;
    box-shadow:none;
    background-color: rgba(0, 255, 255, 0);
    box-shadow:0.5px 0.5px 1px 1px rgba(0, 0, 0, 0.123)
}
.formMsg{
    width:50%;
    height:80%;
    background-color:aqua;
}

</style>
