<template>
	<view class="flex justify-between">
		<view class="font-lg">
			<slot name="title">查看全部</slot>
		</view>
		<view class="flex align-center justify-center font-md">
			<view class="font text-light-black">
				<slot name="tips">更多推荐</slot>
			</view>
			<my-icon iconName="icon-iconfonti" iconColor="text-light-black"></my-icon>
		</view>
	</view>
	
</template>

<script>
	
</script>

<style>
</style>
