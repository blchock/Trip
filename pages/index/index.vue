<template>
	<view class="content">
		<view class="map-content">
			<!--index.wxml-->
			<map id="mainMap" :longitude="longitude" :latitude="latitude" :markers="getMarkers" show-location enable-traffic="true" @bindmarkertap="onMarkClick" @bindcallouttap="onMarkClick">
			<cover-view class="aim">
				<cover-image src="/static/aim.png" @click="aimPlayer"></cover-image>
			</cover-view>
			</map>
		</view>
		<view class="nav-content">
			<Nav :items="items" @onSelect="onSelectNav" />
		</view>
		<view class="list-content">
			<Lists :scrollTop="scrollTop" @scroll="scroll" @itemClick="itemClick" @itemNav="itemNav" @itemMore="itemMore" />
		</view>
	</view>
</template>

<script>
	import Nav from "../nav/nav"
	import Lists from "../lists/lists"
	export default {
		data() {
			return {
				longitude: 0,
				latitude: 0,
				speed: 0,
				accuracy: 0,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				selectedIndex: 0,
				items: [
					{
						name: "美食",
						keyword: "美食",
						type: "error",
						select: false
					},
					{
						name: "景点",
						keyword: "景点",
						type: "success",
						select: false
					},
					{
						name: "停车场",
						keyword: "停车场",
						type: "primary",
						select: false
					},
					{
						name: "水果",
						keyword: "水果",
						type: "error",
						select: false
					},
					{
						name: "公园",
						keyword: "公园",
						type: "warning",
						select: false
					},
					{
						name: "小吃",
						keyword: "小吃",
						type: "error",
						select: false
					},
					{
						name: "酒店",
						keyword: "酒店",
						type: "primary",
						select: false
					},
					{
						name: "住宅区",
						keyword: "住宅区",
						type: "default",
						select: false
					},
					{
						name: "学校",
						keyword: "学校",
						type: "default",
						select: false
					},
				],
			}
		},
		onLoad(options) {
			var that=this
			wx.showLoading({
			  title:"定位中",
			  mask:true
			})
			wx.getLocation({
			  type: 'gcj02',
			  altitude:true,//高精度定位
			  //定位成功，更新定位结果
			  success: function (res) {
				var latitude = res.latitude
				var longitude = res.longitude
				var speed = res.speed
				var accuracy = res.accuracy
			   
				that.longitude = longitude
				that.latitude = latitude,
				that.speed = speed,
				that.accuracy = accuracy
				that.$store.dispatch("onMapReady");
				// if (options.openMarker) {
				// 	that.itemNav(options.openMarker);
				// }
			  },
			  //定位失败回调
			  fail:function(){
				wx.showToast({
				  title:"定位失败",
				  icon:"none"
				})
			  },
			  complete:function(){
				//隐藏定位中信息进度
				wx.hideLoading()
			  }
			})
		},
		methods: {
			itemClick(index) {
				let one = this.$store.getters.getList[index];
				this.moveToMarker(one.location.lat,one.location.lng);
			},
			itemNav(index) {
				this.NavTo(index);
			},
			itemMore(index) {
				let one = this.$store.getters.getList[index];
				uni.navigateTo({
					url: '/pages/information/information?index=' + index
				});
				// uni.navigateBack({ delta: 1 }); //返回上 1 个页面
			},
			aimPlayer() {
				let map = wx.createMapContext('mainMap');
				map.moveToLocation();
			},
			moveToMarker(latitude,longitude) { // 切换到marker经纬度所在位置
				var mapCtx = wx.createMapContext('mainMap')
				// var latitude,longitude;
				// mapCtx.getCenterLocation({
				// 	success:function(res){
				// 		latitude = res.latitude;
				// 		longitude = res.longitude;
				// 	}
				// }) //获取当前地图的中心经纬度
				mapCtx.includePoints({
					padding:[10],
					points:[{
						latitude:latitude,
						longitude:longitude
					}]
				})
				mapCtx.translateMarker({
					 markerId: 0,
					 autoRotate: true,
					 duration: 1000,
					 destination: {
						latitude:latitude,
						longitude:longitude,
					 },
					 animationEnd() {
						console.log('animation end')
					 }
				})
				
			},
			onMarkClick(e) {
				console.log(e.markerId)
			},
			onSelectNav(index) {
				var that = this;
				wx.showLoading({
				  title:"加载中..",
				  mask:true
				})
				this.items[this.selectedIndex].select = false;
				this.items[index].select = true;
				this.selectedIndex = index;
				this.$store.dispatch("changeTag",{
					tag : this.items[index].keyword,
					func : function() {
						that.goTop();
						wx.hideLoading();
					},
				});
			},
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
			}
		},
		computed: {
			getMarkers: function() {
				return this.$store.getters.getMarkers;
			}
		},
		components: {
			Nav,
			Lists,
		}
	}
</script>

<style scoped>
	.content {
		width: 750upx;
	}
	.map-content {
		width: 100%;
		height: 600upx;
	}
	.map-content map {
		width: 100%;
		height: 100%;
	}
	.nav-content {
		width: 100%;
		height: 80upx;
		/* background-color: yellow; */
	}
	.list-content {
		width: 100%;
		height: 500upx;
		/* background: green; */
	}
	.aim {
		position: relative;
		top: 80%;
		left: 10%;
		width: 60upx;
		height: 60upx;
		margin-top: -30upx;
		display: flex;
	}
	.aim cover-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
