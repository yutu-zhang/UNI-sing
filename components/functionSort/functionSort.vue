<template>
	<!-- 菜单  看榜单 听小说 听音乐 听知识 -->
	<view class="flex px-4 py-1">
		<block v-for="(item,index) in functionSortArr" :key="index">
			<view @click="jump(index)"> 
				<my-icon :iconName="item.iconId" :iconColor="item.iconColor" iconSize="65"></my-icon>
				<text>{{item.name}}</text>
			</view>
		</block>
		
		
	</view>
</template>

<script>
const pagesList = {
	"0": "/pages/readList/readList",
	"1": "/pages/listenNoval/listenNoval",
	"2": "/pages/listenMusic/listenMusic",
	"3": "/pages/listenKnowledge/listenKnowledge"
}
export default {
	props: {
		functionSortArr: {
			type: Array,
			default: []
		}
	},
	methods:{
		jump(index){
				// console.log(pagesList[index])
			uni.navigateTo({
				url:pagesList[index]
			})
		}
	}
}
</script>

<style scoped>
	.iconfont {
		font-size: 70rpx;
	}
	.flex {
		justify-content: space-between;
		align-items: center;
		text-align: center;
	}
	.flex>view {
		display: flex;
		flex-direction: column;
	}
	.flex>view text:nth-child(2) {
		font-size: 28rpx;
		padding: 10rpx 0;
		color: rgba(0,0,0,.5);
	}
</style>
