<template>
	<view class="box">
		<view :style="{height : `${statusBarHeight}px`}"></view>
		<view class="px-2 h3 ">
			<my-icon iconName="icon-jiantou-copy"></my-icon>
			<text>榜单</text>
		</view>
		<!-- list -->
		<my-read-list-item :list="books"></my-read-list-item>
	</view>
</template>

<script>
	import myReadListItem from '../../components/index/readList/readListItem.vue' // bookResources 人文历史
	
	import {indexData} from '../../utils/index.js'
	const indexDataApi = new indexData()
	
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;

	export default {
		components:{myReadListItem},
		data(){
			return {
				// 通知栏的高度
				statusBarHeight : statusBarHeight,
				// 图书列表
				books:[],
			}
		},
		onLoad() {
			this.getReadLists()
		},
		methods: {
			// 获取数据
			getReadLists(){
				indexDataApi.getReadListData().then(res=>{
					// console.log(res.data.books)
					this.books = res.data.books
				})
			}
			
		}
	
	}
	
	
</script>

<style>
</style>
