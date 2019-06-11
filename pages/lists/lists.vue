<template>
	<view>
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="listView" @scrolltoupper="upper" @scrolltolower="lower"
		@scroll="scroll">
			<view class="listItem" v-for="(item,index) in listData" :key="index">
				<text>{{ item.title }}</text>
				<!-- <text>{{ item.address }}</text> -->
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
</style>
