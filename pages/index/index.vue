<template>
  <view class="index">
	  <!-- swiper start -->
	 <swiper1></swiper1>
	 <!-- swiper end -->
	 <!-- form start -->
	 <form1></form1>
	 <form2></form2>
	 <form3></form3>
	 <form4></form4>
	 <form5></form5>
	 <!-- form end -->
	 <!-- title start -->
	 <title1></title1>
	 <title2></title2>
	 <title3></title3>
	 <!-- title end -->
	 <!-- search start -->
	 <search1></search1>
	 <search2></search2>
	 <!-- search end -->
	 <!-- goods start -->
	 <goods1></goods1>
	 <goods2></goods2>
	 <!-- goods end -->
  </view>
</template>

<script>
	import swiper1 from "@/components/uniapp/swiper/swiper1.vue";
	import form1 from "@/components/uniapp/form/form1.vue";
	import form2 from "@/components/uniapp/form/form2.vue";
	import form3 from "@/components/uniapp/form/form3.vue";
	import form4 from "@/components/uniapp/form/form4.vue";
	import form5 from "@/components/uniapp/form/form5.vue";
	import title1 from "@/components/uniapp/title/title1.vue";
	import title2 from "@/components/uniapp/title/title2.vue";
	import title3 from "@/components/uniapp/title/title3.vue";
	import search1 from "@/components/uniapp/search/search1.vue";
	import search2 from "@/components/uniapp/search/search2.vue";
	import goods1 from "@/components/uniapp/goods/goods1.vue";
	import goods2 from "@/components/uniapp/goods/goods2.vue";
	export default {
		components:{
			swiper1,
			form1,
			form2,
			form3,
			form4,
			form5,
			title1,
			title2,
			title3,
			search1,
			search2,
			goods1,
			goods2
		}
	};
</script>

<style lang="scss" scoped>
	.loadingWrap {
		position: relative;
		height: 100vh;
		background-color: red;
	}
</style>
