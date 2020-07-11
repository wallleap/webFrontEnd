<template>
  <div id="booksListContainer">
    <div class="bookItem" v-for="(item, index) in booksArr" :key="index">
      <img class="bookImg" :src="item.image" alt="">
      <div class="bookInfo">
        <p>{{item.title}}</p>
        <p>作者: {{item.author}}</p>
        <p>出版社:{{item.publisher}} </p>
      </div>
      <p class="bookPrice">{{item.price}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['booksArr'],
    data(){
      return  {
        booksArr: []
      }
    },
    mounted(){
      console.log(this);
      // 路由跳转的时候使用
      if(this.$mp){
        this.booksArr = JSON.parse(this.$mp.query.booksArr)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #booksListContainer
    .bookItem
      display flex
      padding 10rpx
      border-bottom 1rpx solid #eee
      img
        width 140rpx
        height 140rpx
        margin-right 20rpx
      .bookInfo
        width 70%
        font-size 30rpx
        line-height:50rpx
      .bookPrice
        color red
        font-size 36rpx
        font-weight bold

</style>
