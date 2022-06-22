<template>
  <view class="title2">
    <text class="text">我是标题</text>
    <view class="more" @click="handleClick">
      <text class="tip">更多</text>
	  <text class="iconfont icon-xiangyou1"></text>
    </view>
  </view>
</template>

<script>


export default {
	methods:{
		handleClick(){
			uni.showToast({
				title:'点击'
			})
		}
	}
};
</script>


