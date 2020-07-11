<template>
  <div id="indexContainer">
    <swiper indicator-dots indicator-color="pink" indicator-active-color="green" >
      <swiper-item v-for="(item, index) in carouel" :key="index">
        <img :src="item.image" alt="">
      </swiper-item>
    </swiper>
    <div class="booksList">
      <div class="listNav">
        <span>全部商品</span>
        <span class="more" @click="toBooksList(booksArr)"> > </span>
      </div>
      <div class="list">
        <div @click="toDetail(item)" class="bookItem" v-for="(item,index) in booksArr" :key="index">
          <img :src="item.image" alt="">
          <p>《{{item.title}}》</p>
          <p>{{item.author}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import datas from './datas/data.json'
  console.log(datas, typeof datas);
  export default {
    data(){
      return {
        booksArr: datas
      }
    },
    computed: {
      carouel(){
        // 注意splice方法会修改原数组的
        return [...this.booksArr].splice(0, 4)
      }
    },
    methods: {
      // 跳转到详情页
      toDetail(bookItem){
        wx.navigateTo({
          url: '/pages/detail/main?bookItem=' + JSON.stringify(bookItem)
        })
      },
      // 跳转至图书列表页booksList
      toBooksList(booksArr){
        wx.navigateTo({
          url: '/pages/booksList/main?booksArr=' + JSON.stringify(booksArr)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #indexContainer
    swiper
      width 100%
      height 400rpx
      img
        width 100%
        height 100%
    .booksList
      .listNav
        padding 10rpx
        .more
          float right
      .list
        display flex
        flex-wrap wrap
        .bookItem
          width 50%
          display flex
          flex-direction column
          align-items center
          border-bottom 1rpx solid #eee
          box-sizing border-box
          &:nth-child(2n + 1)
            border-right 1rpx solid #eee
          img
            width 200rpx
            height 200rpx
            margin 10rpx 0
          p
            font-size 24rpx
            line-height 50rpx

</style>
