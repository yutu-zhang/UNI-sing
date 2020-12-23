<template>
	<swiper class="swiper h-200" indicator-dots autoplay circular style="height: 190px;">
		<swiper-item v-for="(item,index) in imgArr" :key="index" style="height: 190px;">
			<image :src="item.src" mode="aspectFill" class="w-100"></image>
		</swiper-item>
	</swiper>
</template>

<script>
export default {
	props:{
		imgArr : {
			type :Array,
			default:[]
		}
	}
}
</script>

<style>
</style>
