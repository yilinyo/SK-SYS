<template>
<div>
  <div v-show="$store.state.isAct==0">
    <shopListtotal />
  </div>
  <div v-show="$store.state.isAct==1">
    <shopListtotal />
  </div>

</div>
</template>

<script>
import shopListtotal from "./shopListFile/shopListtotal.vue"
export default {
name:"shopList",
components:{
    shopListtotal
}
}
</script>

<style scoped>

</style>