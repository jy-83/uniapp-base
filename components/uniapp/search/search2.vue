<template>
  <view class="search2">
    <text class="iconfont icon-sousuo"></text>
    <input type="text" placeholder="搜索" v-model="value" />
    <button @click="search">搜索</button>
  </view>
</template>

<script>


export default{
	data(){
		return{
			value:''
		}
	},
	methods:{
		search(){
			uni.showModal({
				title:'查询'
			})
		}
	}
};
</script>


