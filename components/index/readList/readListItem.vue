<template>
	<view>
		<view class="flex justify-between py-4 px-2 border-bottom" v-for="(item,index) in list">
			<image class="flex-2 rounded" :src="item.imgurl" mode="aspectFill"></image>
			<view class="flex flex-3 flex-column ml-1">
				<text class="font-md font-weight-bold">{{item.name}}</text>
				<text class="text-light-black pl-1 mt-2" style="font-size:28rpx;">{{item.synopsis}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props :{
			list:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style>
image {
		width: 250rpx;
		height: 250rpx;
		border-radius: 10rpx !important;
	}

</style>
