<template>
	<view class="flex justify-between px-2 py-3 border-bottom" v-for="(t,i) in getbooks" :key="i">
			<image class="flex-2 p-1 rounded" :src="itemSrc" mode="aspectFill"></image>
			<view class="flex flex-3 flex-column p-1">
				<text class="pb-1 font-md font-weight-bold">{{itemName}}</text>
				<text class="text-light-black" style="font-size: 28rpx;">{{t.synopsis}}</text>
			</view>
			
	</view>
	
</template>

<script>
	export default {
		props:{
			itemSrc:{
				type:String,
				default:''
			},
			itemName:{
				type:String,
				default:''
			},
			itemBooks:{
				type:String,
				default:[]
			}
		},
		data(){
			return{
				books:[]
			}
		},
		onLoad() {
			this.getbooks()
		},
		methods:{
			getbooks(){
			 	this.books =this.itemBooks
			}
		}
	}
	
</script>

<style>
</style>
