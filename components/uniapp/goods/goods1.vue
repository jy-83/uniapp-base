<template>
  <view class="goods">
    <view class="goodsItem" v-for="(item, index) in goodsList" :key="index">
      <view class="goodsImg">
        <image :src="item.img" mode="aspectFill"/>
      </view>
      <view class="goodsInfo">
        <view class="goodsName">
          {{item.name}}
        </view>
        <view class="goodsBottom">
          <text class="goodsTip">¥</text>
          <text class="goodsPrice">{{item.price}}</text>
          <text class="goodsOldPrice">¥ {{item.oldPrice}}</text>
          <text class="goodsSale">已售{{item.sale}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
	data(){
		return{
			goodsList:[{
				img:require('@/static/uniapp/1.webp'),
				name:'我是名称啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
				price:'79.64',
				oldPrice:'80.00',
				sale:25
			},{
				img:require('@/static/uniapp/1.webp'),
				name:'我是名称啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
				price:'79.64',
				oldPrice:'80.00',
				sale:25
			}]
		}
	}

};
</script>

