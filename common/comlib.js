// let Base64 = require('js-base64').Base64;

exports.install = function (Vue, options) {
	// 计算玩家颜色
	Vue.prototype.SearchMap = (keyword,func) => {
		Vue.prototype.QQMap.search({
			keyword: keyword,
			success: function (res) {
				// console.log(res);
			},
			fail: function (res) {
				// console.log(res);
			},
			complete: function (res) {
				if (res.status === 0) {
					// uni.setStorageSync('list_data',res.data);
					Vue.prototype.$store.dispatch("setListData",res.data);
					Vue.prototype.$forceUpdate();
					if (func) func(res.data);
				} else {
					console.log(res.message);
				}
			}
		});
	},
	
	Vue.prototype.Strlen = (str) => {
		var len = 0;
		for (var i=0; i<str.length; i++) { 
		 var c = str.charCodeAt(i); 
		//单字节加1 
		 if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
		   len++; 
		 } 
		 else { 
		  len+=2; 
		 } 
		} 
		return len;
	},
	
	// 发起导航
	Vue.prototype.NavTo = (index) => {
		let one = Vue.prototype.$store.getters.getList[index];
		// uni.chooseLocation 选择目的地
		// uni.getLocation 获取当前位置信息
		uni.openLocation({ // 打开外置地图导航
			latitude: one.location.lat,
			longitude: one.location.lng,
			name: one.title,
			address: one.address,
			success: function() {
				// 调用地图成功
			}
		});
	}
	
};