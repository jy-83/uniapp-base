<template>
  <view class="form1">
    <text class="label">姓名</text>
    <input type="text" placeholder="请输入内容" v-model="value" />
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

<style>

</style>
