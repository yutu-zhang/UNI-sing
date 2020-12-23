<template>
	<view class="content">
		<view :style="{height : `${statusBarHeight}px`}"></view>
		<!-- 搜索组件 -->
		<my-search class="p-1 pt-2"></my-search>
		<!-- 轮播组件 -->
		<my-rotation-chart :imgArr="swiperImages" class="p-2"></my-rotation-chart>
		<!-- 菜单组件 -->
		<my-function-sort :functionSortArr="functionSortArr"></my-function-sort>
		<!-- 猜你喜欢 -->
		<my-recommond class="p-2" :Rebooks="Rebooks"></my-recommond>
		<!-- 人文 历史 …… -->
		<my-book-resources :bookResources="bookResources"></my-book-resources>
	</view>
</template>

<script>
	import mySearch from "@/components/index/search.vue" //搜索
	import myRotationChart from '../../components/index/rotationChart.vue'  // 轮播
	import myFunctionSort from '../../components/functionSort/functionSort.vue' // 菜单
	import myRecommond from '../../components/index/recommond.vue'  //猜你喜欢
	import myBookResources from '../../components/index/bookResources.vue' // bookResources 人文历史
	// 
	import {indexData} from '../../utils/index.js'
	const indexDataApi = new indexData()
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	export default {
		components:{mySearch,myRotationChart,myFunctionSort,myRecommond,myBookResources},
		data() {
			return {
				// 通知栏的高度
				statusBarHeight : statusBarHeight,
				// 轮播图的数据
				swiperImages:[
					{src:"http://ceshi.dishait.cn/ceshiData/swiperImages/swipertab1.png"},
					{src:"http://ceshi.dishait.cn/ceshiData/swiperImages/swipertab2.png"},
					{src:"http://ceshi.dishait.cn/ceshiData/swiperImages/swipertab3.png"},
					{src:"http://ceshi.dishait.cn/ceshiData/swiperImages/swipertab4.png"},
					{src:"http://ceshi.dishait.cn/ceshiData/swiperImages/swipertab5.png"},
				],
				// 菜单数据
				functionSortArr: [{
						iconId: 'icon-icon-test',
						iconColor: 'text-warning',
						name: '看榜单',
					},
					{
						iconId: 'icon-startRead',
						iconColor: 'text-hover-primary',
						name: '听小说'
					},
					{
						iconId: 'icon-icon09',
						iconColor: 'text-light-black',
						name: '听音乐'
					},
					{
						iconId: 'icon-zhishi',
						iconColor: 'text-success',
						name: '听知识'
					}
				],
				//猜你喜欢的数据
				Rebooks: [],
				//书籍列表的数据
				bookResources: []
			}
		},
		onLoad() {
			this.getIndexDatas()
		},
		methods: {
			// 获取数据
			getIndexDatas(){
				indexDataApi.getAppIndex().then(res=>{
					console.log(res)
					this.Rebooks = res.data.Rebooks
					console.log(this.Rebooks)
					this.bookResources = res.data.bookResources
					console.log(this.bookResources)
				})
			}
			
		}
	}
</script>

<style>
</style>
