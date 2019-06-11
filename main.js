import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 引入SDK核心类
var QQMapWX = require('libs/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
	key: 'DH2BZ-OB3WX-QP64F-TN3WK-ND7R2-JTF22'
});
Vue.prototype.QQMap = qqmapsdk;
// Page({
//  
//     onLoad: function () {
//         // 实例化API核心类
//         QQMap = 
//     },
//     onShow: function () {
//         // 调用接口
//         QQMap.search({
//             keyword: '酒店',
//             success: function (res) {
//                 console.log(res);
//             },
//             fail: function (res) {
//                 console.log(res);
//             },
//         complete: function (res) {
//             console.log(res);
//         }
//     });
//  
//  
// })

//Comlib
import comlib from './common/comlib.js'
Vue.use(comlib);
uni.setStorageSync('list_data',[]);
//

import store from './store'
Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
