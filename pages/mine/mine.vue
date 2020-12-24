<template>
	<view>
		<view :style="{height : `${statusBarHeight}px`}"></view>
		<!-- 用户 -->
		<my-user-item></my-user-item>
			
		<!-- 列表 -->	
		<my-list-item></my-list-item>
	</view>
</template>

<script>
	import myUserItem from '../../components/mine/userItem.vue'
	import myListItem from '../../components/mine/listItem.vue'
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	export default {
		components:{myUserItem,myListItem},
		data(){
			return{
				// 通知栏的高度
				statusBarHeight : statusBarHeight,
			}
		}
	}
	
	
</script>

<style scoped>
</style>
