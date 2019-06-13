<template>
	<view class="main">
		<view class="content">
			<view class="title"><text>{{ data.title }}</text></view>
			<view class="main-content uni-flex uni-column">
				<view class="item">
					<text class="item-name">名称：</text>
					<text class="item-data">{{ data.title }}</text>
				</view>
				<view class="item">
					<text class="item-name">省份：</text>
					<text class="item-data">{{ data.ad_info.province }}</text>
				</view>
				<view class="item">
					<text class="item-name">城市：</text>
					<text class="item-data">{{ data.ad_info.city }}</text>
				</view>
				<view class="item">
					<text class="item-name">区域：</text>
					<text class="item-data">{{ data.ad_info.district }}</text>
				</view>
				<view class="item">
					<text class="item-name">分类：</text>
					<text class="item-data">{{ data.category }}</text>
				</view>
				<view class="item">
					<text class="item-name">地址：</text>
					<text class="item-data">{{ data.address }}</text>
				</view>
				<view class="button-item uni-flex uni-row">
					<button type="primary" @click="navTo" style="float: left;">开始导航</button>
					<button type="default" @click="back" style="float: right;">返回</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				data: {},
			}
		},
		methods: {
			back() {
				uni.navigateBack({ delta: 1 });
			},
			navTo() {
				// uni.redirectTo({
				// 	url: "../index/index?openMarker=" + this.index
				// });
				this.NavTo(this.index);
			}
		},
		onLoad(options){
			this.index = options.index;
			this.data = this.$store.getters.getList[options.index];
			console.log("页面信息：",this.data);
		}
	}
</script>

<style scoped>
	.main {
		width: 750upx;
		height: 1180upx;
		background: url(../../static/bg1.png) left top repeat;
		overflow:hidden; /* 使背景保持位置不随子组件margin变动 */
	}
	.content {
		width: 600upx;
		height: 1000upx;
		margin: 90upx auto;
	}
	.title {
		width: 600upx;
		height: 100upx;
		line-height: 100upx;
		font-size: 60upx;
		font-weight: bold;
		text-align: center;
		border-bottom: 2px solid #007AFF;
		overflow: hidden;
	}
	.main-content {
		width: 580upx;
		height: 870upx;
		/* background-color: #333333; */
		margin: 0 auto;
		margin-top: 30upx;
	}
	.button-item {
		width: 580upx;
		height: 100upx;
		margin-top: 50upx;
	}
	.button-item button {
		width: 45%;
		height: 100%;
		line-height: 98upx;
	}
	.item {
		width: 100%;
		height: auto;
		margin-top: 20upx;
		font-size: 40upx;
	}
	.item-name {
		font-weight: bold;
		color: #104E8B;
	}
	.item-data {
		color: #404040;
	}
</style>
