<template>
	<view class="">{{date|formatTime('YYYY年MM月')}}</view>
</template>

<script>
	import { formatTime } from '@/utils/index.js'
	export default {
		data() {
			return { date:'' }
		},
		onLoad() {
			console.log(formatTime())
		},
		methods: {}
	}
</script>

<style>

</style>
