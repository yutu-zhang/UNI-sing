<template>
	<view>	
		<view class="flex justify-between align-center py-3 px-2">
			<view class="flex align-center">
				<image src="../../static/banner/1.jpg" mode="aspectFill"></image>
				<text class="pl-2 font-md font-weight-bold">麦三</text>
			</view>
			<view class="erji">
				<my-icon class="px-1" iconName="icon-erji"></my-icon>
				<text>我的客服</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			srcItem :{
				type:String,
				default:''
			},
			nameItem :{
				type:String,
				default:''
			}
		}
		
	}
</script>

<style scoped>
	.erji {
			background-color: rgb(236, 240, 243);
			border-radius: 40rpx;
			padding:10rpx 20rpx;
		}
		image {
			width: 130rpx;
			height: 130rpx;
			border-radius: 50%;
		}
	
</style>
