import Vue from 'vue'
import App from './App.vue'
import store  from './store'
import VueRouter from 'vue-router'
import router from "./router"
import axios from 'axios'
import qs from 'qs'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.prototype.$qs=qs;
new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus=this
  },
}).$mount('#app')
