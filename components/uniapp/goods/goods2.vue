<template>
  <view class="goods2">
    <view class="item" v-for="(item, index) in goodsList" :key="index">
      <view class="imgBox">
        <image :src="item.img" mode="aspectFill" />
      </view>
      <view class="info">
        <view class="name">
         {{item.name}}
        </view>
        <view class="spec">
          <text>{{item.spec}}</text>
        </view>
        <view class="priceBox">
          <text class="tip">¥</text>
          <text class="price">{{item.price}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script >

export default{
	data(){
		return{
			goodsList:[{
				img:require('@/static/uniapp/1.webp'),
				name:' 泰国进口超甜龙眼500g泰国进口超甜龙眼500g泰国进口超甜龙眼500g泰国进口超甜龙眼500g泰国进口超甜龙眼500g',
				spec:'500g/盒',
				price:'2.5'
			}]
		}
	}
};
</script>

