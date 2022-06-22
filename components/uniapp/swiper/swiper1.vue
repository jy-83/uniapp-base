<template>
	<swiper class="swiper1" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item v-for="(item,index) in swiperList" :key="index" @click="handleClick">
			<image :src="item.url" mode="aspectFill"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default{
		data(){
			return{ swiperList:[{ url:require("../../../static/uniapp/1.webp") },{ url:require("../../../static/uniapp/1.webp") }] };
		},
		methods:{
			handleClick(){
				uni.showToast({
					title:'点击'
				})
			}
		}
	};
</script>

<style>
</style>