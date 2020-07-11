<template>
  <div id="searchContainer">
    <div class="searchHeader">
      <input @confirm="handleSearch" confirm-type="搜索" v-model="searchContent" type="text" placeholder="书中自有黄金屋" placeholder-class="placeholder">
      <span @click="handleClear" class="clear" v-show="searchContent">X</span>
    </div>
    <div v-if="booksArr.length">
      <BooksList :booksArr="booksArr"/>
    </div>
  </div>
</template>

<script>
  import BooksList from '../booksList/index'
  import request from '../../utils/request'
  export default {
    components: {BooksList},
    data(){
      return {
        searchContent: '',
        booksArr: []
      }
    },
    methods: {
      handleClear(){
        this.searchContent = ''
        this.booksArr = []
      },
      async handleSearch(){
        // 搜索功能函数
        // 获取用户输入的内容
        let data = {req: this.searchContent}
        // 发送请求给服务器获取数据
        let result = await request('/searchBooks', data);
        this.booksArr = result
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #searchContainer
    .searchHeader
      width 80%
      height 80rpx
      margin auto
      border-bottom 1rpx solid #02a774
      position relative
      input
        height 100%
        width 100%
        .placeholder
          color #02a774
          text-align center
          font-size 28rpx

      .clear
        position absolute
        right 20rpx
        top 20rpx
        z-index 99
</style>
