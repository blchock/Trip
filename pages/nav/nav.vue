<template>
	<view>
		<scroll-view class="navView" scroll-x="true" @scroll="scroll" scroll-left="0">
			<view class="badgeItem" v-for="(item,index) in items" :key="index">
				<uni-badge :text="item.name" :type="item.type" :inverted="item.select" @click="selectItem(index)"></uni-badge>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	export default {
		name: "nav",
		data() {
			return {
				
			}
		},
		props: {
			items: {
				type: Array,
				default: function() {
					return [];
				}
			},
		},
		methods: {
			scroll: function(e) {
				// console.log(e)
				// this.old.scrollTop = e.detail.scrollTop
			},
			selectItem(index) {
				this.$emit("onSelect",index)
			},
		},
		components: {uniBadge},
		onReady() {
			this.selectItem(0);
		}
	}
</script>

<style scoped>
	.navView {
		white-space: nowrap;
		width: 730upx;
		height: 80upx;
		padding: 8upx 20upx;
		/* padding: 5upx; */
	}
	.badgeItem {
		display: inline-block;
		width: auto;
		height: 65upx;
		margin-right: 25upx;
		line-height: 65upx;
		text-align: center;
		font-size: 36upx;
	}
</style>
