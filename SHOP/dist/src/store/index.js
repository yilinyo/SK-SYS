import Vue from  'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
const actions={
    changeAct(context,value){
        context.commit('CHANGEACT',value);
    },
    changeTotal(context,value){
        context.commit('CHANGETOTAL',value);
    },
    changeItem(context,value){
        context.commit('CHANGEITEM',value);
    },
    changeactivetotal(context,value){
        context.commit('changeactivetotals',value)
    },
    changeauser(context,value){
        context.commit('changeausers',value)
    },
    not(context,value){
        context.commit('nots',value)
    },
    notactive(context,value){
        context.commit('notactives',value)
    }
}
const mutations={
    CHANGEACT(state,value){
        state.isAct=value;
    },
    CHANGETOTAL(state,value){ 
        state.total=value;
    },
    CHANGEITEM(state,value){
        state.items=value;
    },
    changeactivetotals(state,value){
        state.activetotal=value
    },
    changeausers(state,value){
        state.user=value
    },
    nots(state,value){
        state.not=value
    },
    notactives(state,value){
        state.notactives=value;
    }
}
const state={
    notactives:'',
    not:'',
    user:{},
    activetotal:"",
    items:"",
    total:'',
    clicknum:0,
    isAct:0,
}
export default new Vuex.Store({
    actions,
    mutations,
    state
})
