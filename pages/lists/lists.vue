<template>
	<view>
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="listView" @scrolltoupper="upper" @scrolltolower="lower"
		@scroll="scroll">
			<view class="listItem" v-for="(item,index) in listData" :key="index">
				<view class="itemLeft" @click="onItemClick(index)">
					<text class="marker"></text>
					<text class="itemTitle" @click="onItemClick(index)">{{ item.title }}</text>
					<text class="itemAddr" @click="onItemClick(index)">{{ item.address }}</text>
				</view>
				<view class="itemRight">
					<image src="../../static/locTo.png" class="goIcon" @click="onLoc(index)"></image>
					<image src="../../static/more.png" class="moreIcon" @click="onMore(index)"></image>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "lists",
		data() {
			return {
				
			}
		},
		methods: {
			onItemClick(index) {
				this.$emit("itemClick",index);
			},
			upper: function(e) {
				// console.log(e)
			},
			lower: function(e) {
				// console.log(e)
			},
			scroll: function(e) {
				// console.log(e)
				this.$emit("scroll",e);
			},
			onLoc: function(index) {
				this.$emit("itemNav",index);
			},
			onMore: function(index) {
				this.$emit("itemMore",index);
			}
		},
		computed: {
			listData() {
				return this.$store.getters.getList;
			}
		},
		props: {
			scrollTop: Number,
		},
		components: {
			
		}
	}
</script>

<style scoped>
	.listView {
		width: 100%;
		height: 500upx;
		padding: 0 20upx;
	}
	.listItem {
		float: left;
		width: 700upx;
		height: 80upx;
		padding: 5upx;
		margin-bottom: 5upx;
		border: 1upx #F0AD4E solid;
		border-radius: 10upx;
	}
	.itemLeft {
		float: left;
		width: 570upx;
		height: 80upx;
	}
	.itemRight {
		float: left;
		width: 130upx;
		height: 80upx;
	}
	.marker {
		float: left;
		width: 10upx;
		height: 10upx;
		border: 1upx solid #FF3E96;
		border-radius: 100upx;
		background-color: #fff;
		opacity: 0.5;
		margin: 18upx 0upx 0upx 20upx;
     }
	.itemTitle {
		float: left;
		width: 515upx;
		height: 40upx;
		font-size: 32upx;
		font-weight: bold;
		margin-left: 20upx;
		color: #000;
		overflow: hidden;
	}
	.itemAddr {
		float: left;
		width: 538upx;
		height: 40upx;
		font-size: 24upx;
		margin-left: 30upx;
		margin-top: 5upx;
		color: #C1C1C1;
		overflow: hidden;
	}
	.goIcon {
		float: left;
		width: 50upx;
		height: 50upx;
		margin: 15upx 7.5upx;
		opacity: 0.8;
	}
	.moreIcon {
		float: left;
		width: 50upx;
		height: 50upx;
		margin: 15upx 7.5upx;
		opacity: 0.8;
	}
</style>
