<template>
  <view class="form2">
    <text class="label">内容</text>
    <textarea placeholder="请输入内容" v-model="value"></textarea>
  </view>
</template>

<script >

export default {
	data(){
		return{
			value:''
		}
	}
};
</script>

