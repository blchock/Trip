(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/index/index"],{"33b8":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content",attrs:{_hid:0}},[n("view",{staticClass:"map-content",attrs:{_hid:1}},[n("map",{attrs:{id:"mainMap",longitude:t.longitude,latitude:t.latitude,markers:t.getMarkers,covers:t.covers,"show-location":"true",_hid:2,_batrs:"longitude,latitude,markers,covers"}},[n("cover-view",{staticClass:"aim",attrs:{_hid:3}},[n("cover-image",{attrs:{src:"/static/aim.png",_hid:4,_cid:0},on:{click:t.aimPlayer}})],1)],1)],1),n("view",{staticClass:"nav-content",attrs:{_hid:1006}},[n("Nav",{attrs:{items:t.items,_hid:1007,_batrs:"items",_cid:1},on:{onSelect:t.onSelectNav}})],1),n("view",{staticClass:"list-content",attrs:{_hid:2009}},[n("Lists",{attrs:{scrollTop:t.scrollTop,_hid:2010,_batrs:"scrollTop",_cid:2},on:{scroll:t.scroll}})],1)])},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"867b":function(t,e,n){"use strict";n("3c9e");var o=s(n("9066")),a=s(n("3a53"));function s(t){return t&&t.__esModule?t:{default:t}}o.default.mpType="page";var c=new a.default(o.default);c.$mount()},"8e06":function(t,e,n){"use strict";n.r(e);var o=n("b968"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},9066:function(t,e,n){"use strict";n.r(e);var o=n("33b8"),a=n("8e06");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("dba9");var c=n("2877"),i=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},b968:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("cdce")),s=c(n("4b8c"));function c(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{longitude:0,latitude:0,speed:0,accuracy:0,covers:[],scrollTop:0,old:{scrollTop:0},selectedIndex:0,items:[{name:"美食",keyword:"美食",type:"error",select:!1},{name:"景点",keyword:"景点",type:"success",select:!1},{name:"停车场",keyword:"停车场",type:"primary",select:!1},{name:"水果",keyword:"水果",type:"error",select:!1},{name:"公园",keyword:"公园",type:"warning",select:!1},{name:"小吃",keyword:"小吃",type:"error",select:!1},{name:"酒店",keyword:"酒店",type:"primary",select:!1},{name:"住宅区",keyword:"住宅区",type:"default",select:!1},{name:"学校",keyword:"学校",type:"default",select:!1}]}},onLoad:function(){var e=this;t.showLoading({title:"定位中",mask:!0}),t.getLocation({type:"gcj02",altitude:!0,success:function(t){var n=t.latitude,o=t.longitude,a=t.speed,s=t.accuracy;e.longitude=o,e.latitude=n,e.speed=a,e.accuracy=s,e.$store.dispatch("onMapReady")},fail:function(){t.showToast({title:"定位失败",icon:"none"})},complete:function(){t.hideLoading()}})},methods:{aimPlayer:function(){var e=t.createMapContext("mainMap");e.moveToLocation()},startNav:function(){o.openLocation({latitude:25.027121,longitude:101.763282,success:function(){console.log("success")}})},onSelectNav:function(e){var n=this;t.showLoading({title:"加载中..",mask:!0}),this.items[this.selectedIndex].select=!1,this.items[e].select=!0,this.selectedIndex=e,this.$store.dispatch("changeTag",{tag:this.items[e].keyword,func:function(){n.goTop(),t.hideLoading()}})},scroll:function(t){this.old.scrollTop=t.detail.scrollTop},goTop:function(t){this.scrollTop=this.old.scrollTop,this.$nextTick(function(){this.scrollTop=0})}},computed:{getMarkers:function(){return this.$store.getters.getMarkers}},components:{Nav:a.default,Lists:s.default}};e.default=i}).call(this,n("c11b")["default"],n("c11b")["default"])},c757:function(t,e,n){},dba9:function(t,e,n){"use strict";var o=n("c757"),a=n.n(o);a.a}},[["867b","common/runtime","common/vendor"]]]);