<template>
  <view class="form5">
    <view class="title">我是名称</view>
    <view class="inputWrap">
      <input type="text" placeholder="请输入内容" v-model="value" />
    </view>
  </view>
</template>

<script>

export default {
	data(){
		return{
			value:''
		}
	}
};
</script>

