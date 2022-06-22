<template>
  <view class="form4">
    <text class="label">是否打开</text>
	<switch :checked="bool" @change="bool=!bool" />
  </view>
</template>

<script >

export default {
  data(){
	  return{
		  bool:true
	  }
  }
};
</script>

