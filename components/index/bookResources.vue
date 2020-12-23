<template>
	
	<!-- 人文 历史 -->
	<view>
		<view v-for="(item,index) in bookResources" :key="index">
			<!-- 头部 -->
			<my-list-header class="mt-2 px-2 pb-3">
				<template v-slot:title> {{item.headerTitle}}</template>
				<template v-slot:tips>更多推荐</template>
			</my-list-header>
			<!--  -->
			<view class="flex justify-between px-2 py-3 border-bottom" v-for="(t,i) in item.books" :key="i">
				<image class="flex-2 p-1 rounded" :src="t.imgurl" mode="aspectFill"></image>
				<view class="flex flex-3 flex-column p-1">
					<text class="pb-1 font-md font-weight-bold">{{t.name}}</text>
					<text class="text-light-black" style="font-size: 28rpx;">{{t.synopsis}}</text>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import myListHeader from '../../components/index/listHeader.vue'
	export default {
		components:{myListHeader},
		props:{
			bookResources:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style scoped>
	image {
		width: 250rpx;
		height: 250rpx;
		border-radius: 10rpx !important;
	}
</style>
