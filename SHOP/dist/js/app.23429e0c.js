(function(t){function s(s){for(var a,o,c=s[0],r=s[1],l=s[2],d=0,h=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(s);while(h.length)h.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],a=!0,c=1;c<e.length;c++){var r=e[c];0!==i[r]&&(a=!1)}a&&(n.splice(s--,1),t=o(o.s=e[0]))}return t}var a={},i={app:0},n=[];function o(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)o.d(e,a,function(s){return t[s]}.bind(null,a));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var u=r;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},1:function(t,s){},"1ab9":function(t,s,e){},"1c3d":function(t,s,e){"use strict";e("b364")},"1f4f":function(t,s,e){"use strict";e("4382")},"1ffb":function(t,s,e){"use strict";e("1ab9")},"335a":function(t,s,e){},3775:function(t,s,e){},"37d8":function(t,s,e){},4382:function(t,s,e){},"4f51":function(t,s,e){"use strict";e("84e7")},"50ae":function(t,s,e){"use strict";e("9d28")},5377:function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("mainMsg")],1)},n=[],o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("ul",{staticClass:"nav nav-tabs"},[t._m(0),e("li",{class:{active:"1"===t.isActive},on:{click:function(s){return t.change("1")}}},[e("router-link",{attrs:{to:"/pages/mainstore","active-class":"active"}},[e("span",{staticClass:"glyphicon glyphicon-home"}),t._v("我的主页")])],1),e("li",{class:{active:"2"===t.isActive},on:{click:function(s){return t.change("2")}}},[e("router-link",{attrs:{to:"/pages/shoppingCart","active-class":"active"}},[e("span",{staticClass:"glyphicon glyphicon-list-alt"}),t._v("我的订单")])],1),"1"===t.isActive?e("search"):t._e(),t.isLogin?t._e():e("li",{staticClass:"login"},[t._m(1)]),t.isLogin?e("li",{staticClass:"login nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(t._s(t.usermsg))]),e("div",{staticClass:"dropdown-menu",on:{click:t.quit}},[e("svg",{staticClass:"bi bi-box-arrow-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"}})]),e("a",{staticClass:"dropdown-item"},[t._v("退出")])])]):t._e()],1),e("router-view"),e("footers")],1)},c=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"tt"},[e("h2",{staticClass:"title"},[t._v("A22 MyBank")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{href:"/SHOP/login/login2.html"}},[e("span",{staticClass:"glyphicon glyphicon-user"}),t._v("请登录")])}],r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"search"},[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchMsg,expression:"searchMsg"}],staticClass:"form-control",attrs:{type:"text",placeholder:"搜索秒杀活动"},domProps:{value:t.searchMsg},on:{input:function(s){s.target.composing||(t.searchMsg=s.target.value)}}}),e("span",{staticClass:"input-group-btn"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.searchInfo}},[e("span",{staticClass:"glyphicon glyphicon-search"})])])])])},l=[],u=e("b85c"),d={name:"searchLine",data:function(){return{searchMsg:""}},methods:{searchInfo:function(){var t,s=[],e=Object(u["a"])(this.$store.state.total);try{for(e.s();!(t=e.n()).done;){var a=t.value;-1!=a.goods_title.indexOf(this.searchMsg)&&s.push(a)}}catch(i){e.e(i)}finally{e.f()}this.$store.dispatch("changeTotal",s)}}},h=d,f=(e("50ae"),e("2877")),v=Object(f["a"])(h,r,l,!1,null,"e1e8730c",null),p=v.exports,m=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("footer",[e("div",{staticClass:"xy-contact"}),e("div",{staticClass:"xy-service "},[e("div",{staticClass:"container"},[e("a",{staticClass:"fl",attrs:{href:"#"}},[t._v("亲民")]),e("a",{staticClass:"fl",attrs:{href:"#"}},[t._v("快捷")]),e("a",{staticClass:"fl",attrs:{href:"#"}},[t._v("品质")])])]),e("div",{staticClass:"xy-copyright"},[e("div",{staticClass:"container"},[e("p",{staticClass:"p1"},[e("a",{attrs:{href:"#"}},[t._v("关于我们")]),t._v("| "),e("a",{attrs:{href:"#"}},[t._v("帮助中心")]),t._v("| "),e("a",{attrs:{href:"#"}},[t._v("售后服务")]),t._v("| "),e("a",{attrs:{href:"#"}},[t._v("配送与验收")]),t._v("| "),e("a",{attrs:{href:"#"}},[t._v("商务合作")]),t._v("| "),e("a",{attrs:{href:"#"}},[t._v("搜索推荐")]),t._v("| "),e("a",{attrs:{href:"#"}},[t._v("友情链接")])]),e("p",{staticClass:"p2"},[t._v("copyright@A22Mybank ")])])])])])}],_={name:"footers"},b=_,C=(e("5c39"),Object(f["a"])(b,m,g,!1,null,null,null)),y=C.exports,x=e("bc3a"),w=e.n(x),O={name:"Myheader",data:function(){var t,s;return{isLogin:null!==(t=localStorage.getItem("usermsg"))&&void 0!==t&&t,isActive:null!==(s=localStorage.getItem("local"))&&void 0!==s?s:"1",usermsg:localStorage.getItem("usermsg")}},methods:{quit:function(){localStorage.removeItem("usermsg"),window.location.reload(),localStorage.clear()},change:function(t){localStorage.setItem("local",t),this.isActive=t}},components:{search:p,footers:y},mounted:function(){var t=this;if(this.isLogin)w()({method:"POST",url:"../../../api/shop/login.php",transformRequest:[function(t){var s="";for(var e in t)s+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&";return s}],headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{username:localStorage.getItem("usermsg"),password:localStorage.getItem("password")}}).then((function(s){t.$store.dispatch("changeauser",s.data)}));else{var s=[{buy_check:0}];this.$store.dispatch("changeauser",s)}}},k=O,I=(e("1f4f"),Object(f["a"])(k,o,c,!1,null,"be07e574",null)),$=I.exports,j={name:"App",components:{mainMsg:$}},L=j,S=Object(f["a"])(L,i,n,!1,null,"52bebf77",null),T=S.exports,M=e("2f62");a["a"].use(M["a"]);var A={changeAct:function(t,s){t.commit("CHANGEACT",s)},changeTotal:function(t,s){t.commit("CHANGETOTAL",s)},changeItem:function(t,s){t.commit("CHANGEITEM",s)},changeactivetotal:function(t,s){t.commit("changeactivetotals",s)},changeauser:function(t,s){t.commit("changeausers",s)},not:function(t,s){t.commit("nots",s)},notactive:function(t,s){t.commit("notactives",s)}},E={CHANGEACT:function(t,s){t.isAct=s},CHANGETOTAL:function(t,s){t.total=s},CHANGEITEM:function(t,s){t.items=s},changeactivetotals:function(t,s){t.activetotal=s},changeausers:function(t,s){t.user=s},nots:function(t,s){t.not=s},notactives:function(t,s){t.notactives=s}},N={notactives:"",not:"",user:{},activetotal:"",items:"",total:"",clicknum:0,isAct:0},P=new M["a"].Store({actions:A,mutations:E,state:N}),D=e("8c4f"),B=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"temp"},[e("div",{staticClass:"container"},[e("div",{staticClass:"help"},[e("list")],1),e("h2",[t._v("爆品·秒杀")]),e("luobo",{staticClass:"luobo"}),e("commodity",{staticClass:"dian"}),e("shopList",{staticClass:"shopL"})],1)])},H=[],R=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"flexcolumn"},t._l(t.seck,(function(s,a){return e("li",{key:a,class:{listNumber:!t.isclick[a],listNumber1:t.isclick[a]},on:{click:function(s){return t.listChange(a)}}},[e("a",{staticClass:"lists",attrs:{href:"#"+a}},[t._v(t._s(s.active_title))])])})),0)},z=[],U=e("5530"),F={name:"list",data:function(){return{isclick:[!0,!1,!1,!1,!1,!1],type:["爆品秒杀","活动xxx","活动xxx","活动xxx","活动xxx","活动xxx"]}},methods:{listChange:function(t){for(var s=0;s<this.isclick.length;s++)this.isclick[s]=!1,s==t&&(this.isclick[s]=!0,console.log(t))}},computed:Object(U["a"])(Object(U["a"])(Object(U["a"])(Object(U["a"])({},Object(M["b"])(["activetotal"])),Object(M["b"])(["isAct"])),Object(M["b"])(["notactives"])),{},{seck:function(){return 0==this.isAct?this.activetotal:this.notactives}})},G=F,q=(e("8470"),Object(f["a"])(G,R,z,!1,null,"c842de30",null)),J=q.exports,V=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(2,(function(s,a){return e("div",{key:a,class:t.classJob[t.$store.state.isAct==a?0:1],on:{click:function(s){return t.changew(a)}}},[e("h4",[t._v(t._s(t.RiQi[a]))])])})),0)])},Q=[],Y={name:"commodity",data:function(){return{RiQi:["本场秒杀","下场预告"],classJob:["col-xs-6","col-xs-6f"]}},methods:{changew:function(t){this.$store.dispatch("changeAct",t)}}},K=Y,W=(e("6aa4"),Object(f["a"])(K,V,Q,!1,null,"432abba9",null)),X=W.exports,Z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"carousel slide",attrs:{id:"carousel-example-generic","data-ride":"carousel",height:"300px"}},[t._m(0),t._m(1),e("a",{staticClass:"carousel-control-prev",attrs:{href:"#carousel-example-generic","data-slide":"prev"}},[e("svg",{staticClass:"bi bi-arrow-left-circle-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"}})])]),e("a",{staticClass:"carousel-control-next",attrs:{href:"#carousel-example-generic","data-slide":"next"}},[e("svg",{staticClass:"bi bi-arrow-right-circle-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}})])])])},tt=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",{staticClass:"carousel-indicators"},[e("li",{staticClass:"active",attrs:{"data-target":"#carousel-example-generic","data-slide-to":"0"}}),e("li",{attrs:{"data-target":"#carousel-example-generic","data-slide-to":"1"}}),e("li",{attrs:{"data-target":"#carousel-example-generic","data-slide-to":"2"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"carousel-inner ui-sortable publish-slider",attrs:{role:"listbox",id:"publish-copy"}},[a("div",{staticClass:"item active"},[a("img",{staticClass:"main",attrs:{src:e("5e33")}}),a("div",{staticClass:"carousel-caption"},[t._v(" The First ")])]),a("div",{staticClass:"item"},[a("img",{staticClass:"main",attrs:{src:e("d44b")}}),a("div",{staticClass:"carousel-caption"},[t._v(" The Second ")])]),a("div",{staticClass:"item"},[a("img",{staticClass:"main",attrs:{src:e("a9a7")}}),a("div",{staticClass:"carousel-caption"},[t._v(" The Third ")])])])}],st={name:"luobo"},et=st,at=(e("82dd"),Object(f["a"])(et,Z,tt,!1,null,"38e9b0a0",null)),it=at.exports,nt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[0==t.$store.state.isAct?e("div",t._l(t.activetotal,(function(s,a){return e("div",{key:a,staticClass:"row ",attrs:{id:a}},[e("h1",{staticClass:"tit"},[0!=t.seck(s.active_id).length?e("span",{staticClass:"glyphicon glyphicon-tags"}):t._e(),t._v(" "+t._s(s.active_title)+" "),e("shopactivetime",{attrs:{info:s.time_end,isORnot:!0}})],1),e("div",{staticClass:"isok"},["0"==t.$store.state.user.buy_check?e("div",{staticClass:"obscure"}):t._e(),"0"==t.$store.state.user.buy_check?e("span",{staticClass:"obscure_text"},[t._v("抱歉，您不满足参与条件")]):t._e(),t._l(t.seck(s.active_id),(function(t,a){return e("div",{key:a,staticClass:"col-md-5ths"},[e("div",{staticClass:"box"},[e("shopInfoTop",{staticClass:"ar",attrs:{info:t}}),e("shopInfomid",{staticClass:"ar",attrs:{info:t}}),e("shopinfoBottom",{attrs:{info:t,itess:s}})],1)])}))],2)])})),0):t._e(),1==t.$store.state.isAct?e("div",[this.$store.state.notactives.length?t._e():e("div",{staticClass:"li"},[e("h2",[t._v("抱歉，没有下场活动了")])]),t._l(t.notactives,(function(s,a){return e("div",{key:a,staticClass:"row ",attrs:{id:a}},[e("h1",{staticClass:"tit"},[0!=t.seck(s.active_id).length?e("span",{staticClass:"glyphicon glyphicon-tags"}):t._e(),t._v(" "+t._s(s.active_title)+" "),e("shopactivetime",{attrs:{info:s.time_begin,isORnot:!1}})],1),e("div",{staticClass:"isok"},["0"==t.$store.state.user.buy_check?e("div",{staticClass:"obscure"}):t._e(),"0"==t.$store.state.user.buy_check?e("span",{staticClass:"obscure_text"},[t._v("抱歉，您不满足参与条件")]):t._e(),t._l(t.secknot(s.active_id),(function(t,s){return e("div",{key:s,staticClass:"col-md-5ths"},[e("div",{staticClass:"box"},[e("shopInfoTop",{staticClass:"ar",attrs:{info:t}}),e("shopInfomid",{staticClass:"ar",attrs:{info:t}}),e("shopinfoBotttomNOT",{attrs:{info:t}})],1)])}))],2)])}))],2):t._e()])},ot=[],ct=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"msgName"},[t._v(t._s(t.info.goods_title))]),e("div",{staticClass:"msgsInFo"},[t._v("高性价比理财产品")])])},rt=[],lt={name:"shopInfoTop",props:["info"]},ut=lt,dt=(e("efc5"),Object(f["a"])(ut,ct,rt,!1,null,"fca7bd6a",null)),ht=dt.exports,ft=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mid"},[e("div",{staticClass:"midall"},[e("div",{staticClass:"infomid"},[t._v("利率")]),e("div",{staticClass:"infomidinfo rate"},[t._v(t._s(t.info.goods_rate))])]),e("div",{staticClass:"midall"},[e("div",{staticClass:"infomid "},[t._v("原价")]),e("div",{staticClass:"infomidinfo before "},[t._v(t._s(t.info.goods_price_normal))])]),e("div",{staticClass:"midall"},[e("div",{staticClass:"infomid"},[t._v("现价")]),e("div",{staticClass:"infomidinfo now"},[t._v(t._s(t.info.goods_price_discount))])]),e("div",{staticClass:"time"},[e("h5",{staticClass:"timeF"},[t._v("份数")]),e("timeI",{attrs:{ti:t.info}})],1)])},vt=[],pt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tempL"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"form-control",on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.val=s.target.multiple?e:e[0]}}},t._l(t.listnumber,(function(s,a){return e("option",{key:a,staticClass:"options",domProps:{value:s}},[t._v(t._s(s)+"份 ")])})),0)])},mt=[],gt={name:"timeI",props:["ti"],data:function(){return{val:1,list:this.ti.goods_id,listnumber:parseInt(this.ti.num_user)}},watch:{val:{handler:function(t){this.$bus.$emit(this.list,t),console.log(this.$bus)}}}},_t=gt,bt=(e("1c3d"),Object(f["a"])(_t,pt,mt,!1,null,"5ea08f36",null)),Ct=bt.exports,yt={name:"mid",props:["info"],components:{timeI:Ct}},xt=yt,wt=(e("61e7"),Object(f["a"])(xt,ft,vt,!1,null,"4b8543f4",null)),Ot=wt.exports,kt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopbottom"},[e("div",{staticClass:"total"},[t._v("总计 "),e("div",{staticClass:"number"},[t._v(t._s(parseInt(t.info.goods_price_discount)*t.choice))]),t._v(" 元 ")]),"1"==t.info.sys_status?e("div",{staticClass:"btnBig"},["false"==t.isclick||2==t.info.sys_status?e("div",{staticClass:"btns",on:{"~click":function(s){return t.sendmsgMD5.apply(null,arguments)}}},[t._v("加入订单")]):t._e(),"true"==t.isclick?e("div",{staticClass:"fadess",on:{click:t.isadd}},[t._v("已加入订单"),e("span",{staticClass:"glyphicon glyphicon-ok"})]):t._e(),e("div",{staticClass:"btnmsg"},[e("div",{staticClass:"btnmsgL",style:{width:t.length}})]),e("div",{staticClass:"btnre"},[t._v("还剩"+t._s(t.length))])]):t._e(),"2"==t.info.sys_status?e("div",{staticClass:"btnBig"},[e("div",{staticClass:"xiajia"},[t._v("抱歉，商品已经下线")])]):t._e()])},It=[],$t=(e("b680"),e("a9e3"),e("fb6a"),e("ac1f"),e("1276"),e("498a"),e("99af"),e("4328")),jt=e.n($t),Lt={name:"shopinfoBottom",data:function(){return{infos:this.info.goods_id,choice:1,left:parseInt(this.info.num_left),total:parseInt(this.info.num_total),isclick:""}},computed:{length:function(){return this.toPercent(this.left/this.total)}},props:["info","itess"],methods:{toPercent:function(t){t=isNaN(t)?0:t;var s=Number(100*t).toFixed(1);return s+="%",s},sendmsg:function(t){var s=this;w()({method:"POST",url:"../../../../../test/buy5.php",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},data:jt.a.stringify({aid:this.info.active_id,gid:this.info.goods_id,price:this.info.goods_price_discount,time:this.itess.time_end,num:1,uid:JSON.parse(localStorage.getItem("userid")),md5:t})}).then((function(t){"104"==t.data.status?(console.log(t.data),alert(t.data.msg),localStorage.setItem(s.infos,"true"),s.isclick="true"):alert(t.data.msg)})).catch((function(t){console.log(t)}))},sendmsgMD5:function(){var t=this;if(null!=localStorage.getItem("usermsg")){var s=2022-parseInt(this.$store.state.user[0].birth.slice(0,4));if(s<16)alert("年龄未满十六岁");else if("1"!=this.$store.state.user[0].user_status)if(i("IP"))alert("同一IP短时间内多次请求");else{var a=new Date;a.setTime(a.getTime()+500),document.cookie="IP=".concat(window.returnCitySN,";expires=").concat(a.toGMTString()),w()({method:"POST",url:"../../../../../test/getkey.php",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},data:jt.a.stringify({aid:this.info.active_id,gid:this.info.goods_id,uid:localStorage.getItem("userid")})}).then((function(s){var a=e("8060").sm4,i="68756875687568756875687568756875",n=a.decrypt(s.data,i);t.sendmsg(n)}))}else alert("用户异常")}else alert("未登录");function i(t){for(var s=document.cookie.split(";"),e=0;e<s.length;e++){var a=s[e].split("=");if(t==a[0].trim())return decodeURIComponent(a[1])}return null}},isadd:function(){alert("已经加入订单，请勿多次点击")}},mounted:function(){var t=this;this.$bus.$on(this.infos,(function(s){t.choice=s})),null==localStorage.getItem(this.infos)&&localStorage.setItem(this.infos,"false");var s,e=Object(u["a"])(this.$store.state.items);try{for(e.s();!(s=e.n()).done;){var a=s.value;a.goods_id==this.infos&&localStorage.setItem(this.infos,"true")}}catch(i){e.e(i)}finally{e.f()}this.isclick=localStorage.getItem(this.infos)}},St=Lt,Tt=(e("4f51"),Object(f["a"])(St,kt,It,!1,null,"ed33379c",null)),Mt=Tt.exports,At=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("small",{staticClass:"time"},[1==this.isORnot?e("span",[t._v("活动时间还剩:")]):t._e(),0==this.isORnot?e("span",[t._v("距离活动开始时间还剩:")]):t._e(),e("span",{staticClass:"day x"},[t._v(t._s(t.oDay)),e("span",{staticClass:"light"},[t._v("天")])]),e("span",{staticClass:"hour x"},[t._v(" "+t._s(t.oHours)),e("span",{staticClass:"light"},[t._v("小时")])]),e("span",{staticClass:"min x"},[t._v(t._s(t.oMinutes)),e("span",{staticClass:"light"},[t._v("分钟")])]),e("span",{staticClass:"sec x"},[t._v(t._s(t.oSeconds)),e("span",{staticClass:"light"},[t._v("秒")])])])},Et=[],Nt={name:"shopactivetime",props:["info","isORnot"],data:function(){return{time:""}},computed:{countDown:function(){return this.info-this.time/1e3},oDay:function(){return parseInt(this.countDown/86400)},oHours:function(){return parseInt(this.countDown/3600%24)},oMinutes:function(){return parseInt(this.countDown/60%60)},oSeconds:function(){return parseInt(this.countDown%60)}},mounted:function(){var t=this;this.timer=setInterval((function(){t.time=new Date}))},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}},Pt=Nt,Dt=(e("a583"),Object(f["a"])(Pt,At,Et,!1,null,"c3273b3e",null)),Bt=Dt.exports,Ht=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopbottom"},[e("div",{staticClass:"total"},[t._v("总计 "),e("div",{staticClass:"number"},[t._v(t._s(parseInt(t.info.goods_price_discount)*t.choice))]),t._v(" 元 ")]),e("div",{staticClass:"isN",on:{click:t.brint}},[t._v("还未开始")])])},Rt=[],zt={name:"shopnot",props:["info"],data:function(){return{choice:1}},methods:{brint:function(){alert("活动还未开始")}}},Ut=zt,Ft=(e("1ffb"),Object(f["a"])(Ut,Ht,Rt,!1,null,"5aa23092",null)),Gt=Ft.exports,qt={name:"shopListtotal",methods:{seck:function(t){var s,e=[],a=Object(u["a"])(this.total);try{for(a.s();!(s=a.n()).done;){var i=s.value;t==i.active_id&&e.push(i)}}catch(n){a.e(n)}finally{a.f()}return e},secknot:function(t){var s,e=[],a=Object(u["a"])(this.not);try{for(a.s();!(s=a.n()).done;){var i=s.value;t==i.active_id&&e.push(i)}}catch(n){a.e(n)}finally{a.f()}return e}},components:{shopInfoTop:ht,shopInfomid:Ot,shopinfoBottom:Mt,shopactivetime:Bt,shopinfoBotttomNOT:Gt},computed:Object(U["a"])(Object(U["a"])(Object(U["a"])(Object(U["a"])({},Object(M["b"])(["total"])),Object(M["b"])(["activetotal"])),Object(M["b"])(["notactives"])),Object(M["b"])(["not"]))},Jt=qt,Vt=(e("6d41"),Object(f["a"])(Jt,nt,ot,!1,null,"db9baea4",null)),Qt=Vt.exports,Yt={name:"mainstore",data:function(){return{datas:[]}},components:{list:J,luobo:it,Commodity:X,shopList:Qt},mounted:function(){var t=this;w()({method:"POST",url:"../../../api/shop/backinfo.php",params:{table:"sk_goods"}}).then((function(s){var e,a=[],i=Object(u["a"])(s.data);try{for(i.s();!(e=i.n()).done;){var n=e.value;"0"!=n.sys_status&&a.push(n)}}catch(o){i.e(o)}finally{i.f()}t.datas=a,w()({method:"POST",url:"../../../api/shop/backinfo.php",params:{table:"sk_active"}}).then((function(s){var e,a=[],i=[],n=[],c=[],r=Object(u["a"])(s.data);try{for(r.s();!(e=r.n()).done;){var l=e.value;parseInt(l.time_begin)-Date.parse(new Date)/1e3<0&&parseInt(l.time_end)-Date.parse(new Date)/1e3>0&&"1"==l.sys_status?(a.push(l.active_id),n.push(l)):parseInt(l.time_begin)-Date.parse(new Date)/1e3>0&&"1"==l.sys_status&&(i.push(l.active_id),c.push(l))}}catch(o){r.e(o)}finally{r.f()}t.$store.dispatch("changeactivetotal",n),t.$store.dispatch("notactive",c);var d,h=[],f=[],v=Object(u["a"])(t.datas);try{for(v.s();!(d=v.n()).done;){var p=d.value;-1!=a.indexOf(p.active_id)?h.push(p):-1!=i.indexOf(p.active_id)&&f.push(p)}}catch(o){v.e(o)}finally{v.f()}t.$store.dispatch("not",f),t.$store.dispatch("changeTotal",h)}))})),null!=localStorage.getItem("usermsg")&&w()({method:"POST",url:"../../../api/shop/tradeinfo.php",params:{uid:localStorage.getItem("userid")}}).then((function(s){var e=[];if("0"!=s.data.length){var a,i=Object(u["a"])(s.data);try{for(i.s();!(a=i.n()).done;){var n=a.value;"0"==n.sys_status&&e.push(n)}}catch(o){i.e(o)}finally{i.f()}}t.$store.dispatch("changeItem",e)}))}},Kt=Yt,Wt=(e("e939"),Object(f["a"])(Kt,B,H,!1,null,"964b40f4",null)),Xt=Wt.exports,Zt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"xy-center container"},[e("div",{staticClass:"left-main"},[e("div",{staticClass:"imgg "},[e("div",{staticClass:"top"}),e("h2",[t._v(t._s(this.user.username))])]),e("div",{staticClass:"list-user"},[e("h2",{staticClass:"sss"},[t._v("我的信息")]),e("h3",[t._v("生日:"+t._s(this.user.birth))]),e("h3",[t._v("性别:"+t._s("female"==this.user.sex?"女":"男")+" "),"female"==this.user.sex?e("svg",{staticClass:"bi bi-gender-female",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"}})]):t._e(),"male"==this.user.sex?e("svg",{staticClass:"bi bi-gender-male",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"}})]):t._e()]),e("h3",[t._v("账户余额："),e("span",{staticClass:"count"},[t._v(t._s(this.user.account))]),t._v("￥")])])]),e("div",{staticClass:"right-main"},[e("div",{staticClass:"left-top"},[e("div",{staticClass:"listsd"},[e("span",{staticClass:"\tglyphicon glyphicon-edit"}),e("div",{staticClass:"po"},[e("div",{staticClass:"sda"},[t._v(t._s(this.msgList.length))]),e("div",[t._v("待支付订单")])])]),e("div",{staticClass:"listsd"},[e("span",{staticClass:"glyphicon glyphicon-shopping-cart"}),e("div",{staticClass:"po"},[e("div",{staticClass:"sda"},[t._v(t._s(this.isBuy.length))]),e("div",[t._v("已完成订单数")])])])]),e("div",{staticClass:"left-orders"},[e("h2",{staticClass:"titles"},[t._v("待支付订单")]),e("div",{staticClass:"bs-example",attrs:{"data-example-id":"striped-table"}},[e("table",{staticClass:"table table-striped"},[t._m(0),e("tbody",t._l(t.msgListnum[t.msgList_L],(function(s,a){return e("tr",{key:a},[e("td",[t._v(t._s(s.num))]),e("td",[t._v(t._s(s.goods_title))]),e("td",[e("span",[t._v("利率:"+t._s(s.goods_rate)+" / ")]),e("span",[t._v("存期:"+t._s(s.goods_term))])]),e("td",[t._v(t._s(s.num_total))]),e("td",[t._v(t._s(s.price_total))]),e("td",[e("div",{staticClass:"btnBig"},[e("div",{staticClass:"btns is",on:{"~click":function(e){return t.sendmsg(s)}}},[t._v("确认购买")])])]),e("td",[e("button",{on:{click:function(e){return t.deletemsg(s)}}},[e("span",{staticClass:"glyphicon glyphicon-trash",attrs:{title:"点击删除订单"}})])])])})),0)]),e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",on:{click:function(s){return t.go(-1)}}},[t._v("Previous")])]),t._l(t.msgListnum,(function(s,a){return e("li",{key:a,staticClass:"page-item"},[e("a",{staticClass:"page-link",on:{click:function(s){t.msgList_L=a}}},[t._v(t._s(a+1))])])})),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",on:{click:function(s){return t.go(1)}}},[t._v("Next")])])],2)])])]),e("div",{staticClass:"left-orders xc"},[t._m(1),e("div",{staticClass:"bs-example",attrs:{"data-example-id":"striped-table"}},[e("table",{staticClass:"table table-striped"},[t._m(2),e("tbody",t._l(t.msgListnumNot[t.msgList_N],(function(s,a){return e("tr",{key:a},[e("th",[t._v(t._s(s.num))]),e("th",[t._v(t._s(s.goods_title))]),e("th",[t._v(t._s(s.num_total))]),e("th",[t._v(t._s(s.price_total))]),e("th",[t._v(t._s(t.getTimestampConversion(s.time_pay)))])])})),0)]),e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",on:{click:function(s){return t.goIs(-1)}}},[t._v("Previous")])]),t._l(t.msgListnumNot,(function(s,a){return e("li",{key:a,staticClass:"page-item"},[e("a",{staticClass:"page-link",on:{click:function(s){t.msgList_N=a}}},[t._v(t._s(a+1))])])})),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",on:{click:function(s){return t.goIs(1)}}},[t._v("Next")])])],2)])])])])])])},ts=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",[t._v("#")]),e("th",[t._v("产品名称")]),e("th",[t._v("产品详情")]),e("th",[t._v("数量")]),e("th",[t._v("价格")]),e("th",[t._v("确认订单并支付")]),e("th")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"asd"},[e("h2",{staticClass:"titles"},[t._v("已完成订单")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",[t._v("#")]),e("th",[t._v("订单名称")]),e("th",[t._v("数量")]),e("th",[t._v("价格")]),e("th",[t._v("时间")])])])}],ss=(e("d3b7"),e("25f0"),{name:"shoppomhCart",mounted:function(){var t=this;w()({method:"POST",url:"../../../api/shop/tradeinfo.php",params:{uid:localStorage.getItem("userid")}}).then((function(s){var e,a=[],i=[],n=Object(u["a"])(s.data);try{for(n.s();!(e=n.n()).done;){var o=e.value;"0"==o.sys_status?a.push(o):"2"==o.sys_status&&i.push(o)}}catch(c){n.e(c)}finally{n.f()}t.msgList=a,t.isBuy=i}))},data:function(){return{msgList:[],isBuy:[],msgList_L:0,msgList_N:0}},computed:Object(U["a"])({msgListnumNot:function(){for(var t=this.isBuy,s=0;s<t.length;s++){var e=s+1;t[s].num=e}var a=Math.ceil(t.length/5,5),i=0,n=0,o=[];while(i<a)o[i]=t.slice(n,5+n),n+=5,i++;return o},msgListnum:function(){for(var t=this.msgList,s=0;s<t.length;s++){var e=s+1;t[s].num=e}var a=Math.ceil(t.length/5,5),i=0,n=0,o=[];while(i<a)o[i]=t.slice(n,5+n),n+=5,i++;return o},search:function(t){var s,e=[],a=Object(u["a"])(this.$store.state.total);try{for(a.s();!(s=a.n()).done;){var i=s.value;t==i.goods_id&&e.push(i)}}catch(n){a.e(n)}finally{a.f()}return e}},Object(M["b"])(["user"])),methods:{getTimestampConversion:function(t){var s,e=t.toString().length;s=10===e?1e3*t:t;var a=new Date(s),i=a.getFullYear()+"-",n=(a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1)+"-",o=a.getDate()<10?"0"+a.getDate()+" ":a.getDate()+" ",c=a.getHours()<10?"0"+a.getHours()+":":a.getHours()+":",r=a.getMinutes()<10?"0"+a.getMinutes()+":":a.getMinutes()+":",l=a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds();return i+n+o+c+r+l},goIs:function(t){-1==t&&0!=this.msgList_N?--this.msgList_N:1==t&&this.msgList_N!=this.msgListnumNot.length-1&&++this.msgList_N},go:function(t){-1==t&&0!=this.msgList_L?--this.msgList_L:1==t&&this.msgList_L!=this.msgListnum.length-1&&++this.msgList_L},change:function(t){this.msgList_L=t},deletemsg:function(t){var s=this;confirm("是否删除？")&&(w()({method:"POST",url:"../../../api/shop/trade.php",transformRequest:[function(t){var s="";for(var e in t)s+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&";return s}],headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{action:"cancel",trade_id:t.trade_id}}).then((function(e){if("1"==e.data){alert("已删除");var a,i=Object(u["a"])(s.$store.state.total);try{for(i.s();!(a=i.n()).done;){var n=a.value;console.log(n.active_id,t.active_id),n.actve_id==t.actve_id&&localStorage.setItem(n.goods_id,!1)}}catch(o){i.e(o)}finally{i.f()}}})).catch((function(t){console.log(t),alert("抱歉，系统故障")})),location.reload())},status:function(t){return"0"==t?"活动未开始":"1"==t?"秒杀进行中 ":"2"==t?"活动已下架":void 0},sendmsg:function(t){w()({method:"POST",url:"../../../api/shop/trade.php",transformRequest:[function(t){var s="";for(var e in t)s+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&";return s}],headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{action:"pay",trade_id:t.trade_id}}).then((function(t){"101"==t.data.status?(alert(t.data.msg),location.reload()):"102"==t.data.status&&alert(t.data.msg)})).catch((function(t){console.log(t),alert("抱歉，系统故障")}))}}}),es=ss,as=(e("aa32"),Object(f["a"])(es,Zt,ts,!1,null,null,null)),is=as.exports,ns=new D["a"]({routes:[{path:"*",redirect:"/pages/mainstore"},{name:"mainstore",path:"/pages/mainstore",component:Xt},{name:"shoppingCart",path:"/pages/shoppingCart",component:is}]}),os=ns;a["a"].prototype.$axios=w.a,a["a"].config.productionTip=!1,a["a"].use(D["a"]),a["a"].prototype.$qs=jt.a,new a["a"]({render:function(t){return t(T)},store:P,router:os,beforeCreate:function(){a["a"].prototype.$bus=this}}).$mount("#app")},"5c39":function(t,s,e){"use strict";e("37d8")},"5e33":function(t,s,e){t.exports=e.p+"img/ad1.3502cb0d.png"},"61e7":function(t,s,e){"use strict";e("767f")},"6aa4":function(t,s,e){"use strict";e("b482")},"6d41":function(t,s,e){"use strict";e("335a")},"767f":function(t,s,e){},"80fb":function(t,s,e){},"82dd":function(t,s,e){"use strict";e("3775")},8470:function(t,s,e){"use strict";e("f2ca")},"84e7":function(t,s,e){},"9b33":function(t,s,e){},"9d28":function(t,s,e){},a583:function(t,s,e){"use strict";e("9b33")},a9a7:function(t,s,e){t.exports=e.p+"img/ad3.851d9be4.png"},aa32:function(t,s,e){"use strict";e("bf8b")},b364:function(t,s,e){},b482:function(t,s,e){},bf8b:function(t,s,e){},d44b:function(t,s,e){t.exports=e.p+"img/ad2.e4e4b169.png"},e939:function(t,s,e){"use strict";e("5377")},efc5:function(t,s,e){"use strict";e("80fb")},f2ca:function(t,s,e){}});
//# sourceMappingURL=app.23429e0c.js.map