<template>
	<view class="content">
		<button @click="get">点击</button>
		<text>{{info.name}}</text>
	</view>
</template>

<script>
	import jyRequest from '@/service/index.js';
	export default {
		data() {
			return {
				info:{}
			}
		},
		onLoad() {
			// this.get()
		},
		methods: {
			 get() {
				 jyRequest.get({
					url: 'index/smapp/vip/get',
				}).then(res=>{
					console.log(res);
					this.info=res;
				})
				
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
