<template>
  <view class="search1">
    <text class="iconfont icon-sousuo"></text>
    <input type="text" placeholder="搜索" v-model="value" @confirm="confirm"/>
  </view>
</template>

<script >


export default {
	data(){
		return{
			value:''
		}
	},
	methods:{
		confirm(){
			uni.showToast({
				title:'查询'
			})
		}
	}
};
</script>

