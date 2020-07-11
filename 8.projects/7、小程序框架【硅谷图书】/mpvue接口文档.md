# mpvue实战项目接口文档
## 1. 搜索图书接口
  1. method: GET
  2. url: /searchBooks
  3. data：{req: ??}
  4. 返回数据格式: json 
  
   ------
    示例: /searchBooks?req=react 
    实际接口: https://api.douban.com/v2/book/search?q=请求参数
    测试接口地址: https://api.douban.com/v2/book/search?q=react
   
## 2. 获取用户登录openid
  1. method: GET
  2. url: /getOpenId
  3. data: {code}
  4. 返回数据格式: json      {"session_key":"JDh0esYXSFvfbHfebEa97w==","openid":"ozByZ5RqVxvECZFaHC3JF8vVifUU"}
  
   ------
    示例: /getOpenId?code=xxx
    实际接口: https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appKey}&js_code=${code}&grant_type=authorization_code
    测试接口地址：无
    ** 浏览器端
    wx.login({
      success: async (res) => {
        console.log(res); // {errMsg: "login:ok", code: "011a7JmS1cFy541rmymS1KCQmS1a7Jm4"}
        let code = res.code // 用户登录的凭证，通过凭证可以获取用户的openId
        let result = await request('/getOpenId?code=' + code)
    
        // 缓存用户openID
        wx.setStorage({
          key: 'openID',
          data: result.openid
        })
      }
    })
      
    ** 服务器端
    // 返回用户唯一凭证
    // 开发者的密钥，密钥动态生成
    const appKey = '4a9ed63ce3ff7701485a2ccb27dd1ba1';
    // 开发者的appId
    const appId = 'wx0db5ac6ea2aca4fe';
    // 处理返回用户openID
    router.get('/getOpenId', async (ctx, next) => {
      let code = ctx.query.code;
      let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appKey}&js_code=${code}&grant_type=authorization_code`
      let result = await get(url);
      let openIdObj = result.data
      openID = JSON.parse(openIdObj).openid
      ctx.body = openIdObj
    })


## 3.扫码接口
  1.  method: GET
  2.  url: /scanCode
  3.  请求参数： {scanCode}
  4.  返回数据格式: json
  
  -------
  示例：scanCode?scanCode=9787010009148
  实际接口地址: 'https://api.douban.com/v2/book/isbn/' + scanCode   // scanCode 为图书isbn标识
  测试接口地址: https://api.douban.com/v2/book/isbn/9787010009148