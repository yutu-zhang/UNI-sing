<template>
	<!-- 猜你喜欢页 -->
	<view>
		<!-- 头部 -->
		<my-list-header>
			<template v-slot:title> 猜你喜欢</template>
			<template v-slot:tips>更多推荐</template>
		</my-list-header>
		<view class="flex py-2 align-center">
			<block v-for="(item,index) in Rebooks" :key="index" style="height: 300rpx;">
				<view class="flex flex-column flex-1 align-center position-relative w-100" style="height: 300rpx;">
					<image :src="item.src" mode="aspectFill" style="width: 100%;height: 100%;"></image>
					<text class="font my-1 text-light-black">{{item.name}}</text>
					<my-icon iconColor="text-light-white" iconName="icon-erji" class="position-absolute" style="font-size:34rpx;left:20rpx"></my-icon>
				</view>
				
			</block>
		</view>
	</view>
</template>

<script>
	import myListHeader from '../../components/index/listHeader.vue'
	export default {
		components:{myListHeader},
		props:{
			Rebooks:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style>
</style>
