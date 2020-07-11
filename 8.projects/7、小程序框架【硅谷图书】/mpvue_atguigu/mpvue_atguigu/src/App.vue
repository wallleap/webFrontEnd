
<script>
  import request from './utils/request'
  export default {
    async mounted(){
      wx.login({
        success: async (res) => {
          // 1. 获取用户登陆的临时凭证, 和用户是否授权没有直接关系， 有效时长： 有效期五分钟
          let code = res.code
          // 2. 发送code给服务器端
         let token = await request('/getOpenId', {code})
          // 3. 将自定义登录状态缓存到storage中
          wx.setStorageSync('token', token);
        }
      })

      // 测试地址token
      let result = await request('/test')
      console.log('验证结果： ', result);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  page
    width 100%
    height 100%
</style>
