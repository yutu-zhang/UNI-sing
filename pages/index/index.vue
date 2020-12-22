<template>
	<view class="content">
		<view :style="{height : `${statusBarHeight}px`}"></view>
	</view>
</template>

<script>
	import myIcon from "@/components/icon/icon.vue"
	//获取顶部通知栏的⾼度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	export default {
		data() {
			return {
				statusBarHeight : statusBarHeight
			}
		},
		components:{myIcon},
		onLoad() {
			
		},
		methods: {
			
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
