import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		selectTag: null,
		isMapReady: false,
		queryList: [],
		marks: [],
	},
	mutations: {
		changeTag(state,data) { // 改变当前选项卡，如果地图准备好则立即查询
			state.selectTag = data.tag;
			if (state.isMapReady) {
				Vue.prototype.SearchMap(state.selectTag,data.func);
			}
		},
		onMapReady(state) { // 地图准备好后自动开始第一次查询
			state.isMapReady = true;
			if (state.selectTag) {
				Vue.prototype.SearchMap(state.selectTag);
			}
		},
		setListData(state,data) {
			state.marks = [];
			for (let id in data) {
				let one = data[id];
				// console.log(one);
				state.marks.push({
					id: one.id,
					title: one.title,
					iconPath: "/static/mark.png",
					latitude: one.location.lat,
					longitude: one.location.lng,
					width: 30,
					height: 37
				});
			}
			state.queryList = data;
		}
	},
	actions: {
		changeTag(context,data) {
			context.commit("changeTag",data);
		},
		onMapReady(context) {
			context.commit("onMapReady");
		},
		setListData(context,data) {
			context.commit("setListData",data);
		},
	},
	getters: {
		getTag(state) {
		  return state.selectTag ? state.selectTag : ""
		},
		getList(state) {
		  return state.queryList ? state.queryList : []
		},
		getMarkers(state) {
		  return state.marks ? state.marks : []
		},
	}
})

export default store
