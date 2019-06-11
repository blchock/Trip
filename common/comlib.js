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
	}
};