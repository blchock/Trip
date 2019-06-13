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
				// console.log("pushMark:",one);
				state.marks.push({
					id: id,
					// title: one.title,
					iconPath: "/static/mark.png",
					latitude: one.location.lat,
					longitude: one.location.lng,
					zIndex: id,
					label: {
						content: one.title,
						color: "#FF7F00",
						fontSize: 12,
						anchorX: -12 * Vue.prototype.Strlen(one.title) / 4,
						anchorY: -60,
						borderWidth: 1,
						borderColor: "#FF4500",
						borderRadius: 3,
						bgColor: "#FFFAFA",
						padding: 1,
						textAlign: "center"
					},
					alpha: 0.8,
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
