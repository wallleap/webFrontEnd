//  搭建服务器的核心文件

let Koa = require('koa');
let KoaRouter = require('koa-router');
let Fly=require("flyio/src/node")


var jwt = require('jsonwebtoken');

let fly=new Fly;
// 1. 生成应用及路由器实例
const app = new Koa();
const router = new KoaRouter();


// 核心代码
router.get('/', (ctx, next) => {
  // 1. 获取请求的参数
  
  // 2. 根据请求的地址和参数处理数据
  
  // 3. 响应数据
  ctx.body = '服务器返回的数据11111111111';
});

// 搜索图书的接口
let datas = require('./datas/data.json');
router.get('/searchBooks', (ctx, next) => {
  // 1. 获取请求的参数
  let req = ctx.query.req;
  console.log('获取请求参数： ', req);
  // 2. 根据请求的地址和参数处理数据
  let booksArr = datas;
  // 3. 响应数据
  ctx.body = booksArr;
});


// 获取用户openId的接口
router.get('/getOpenId', async (ctx, next) => {
  // 1. 获取请求的参数
  let code = ctx.query.code;
  let appId = 'wxc8c8e9c8a5a17f8f';
  let appSecret = 'e39bc25777c70399a2e27caaafbb7ef5';
  // 2. 根据请求的地址和参数处理数据
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
  // 发送请求给微信接口，获取openId
  let result = await fly.get(url);
  userInfo = JSON.parse(result.data)
  
  // 将用户的openId存入数据库， openId: {userName: 'xx', money: 'yyy'}
  
  // 自定义登录状态，就是根据用户的openid和sessionKey进行加密生成token，返回给前端的
  // 对openId和sessionKey进行加密, 自定义登录状态
  let token = jwt.sign(userInfo, 'atguigu');
  console.log(token);
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uX2tleSI6IlN6WWJyNnBLUGN0WkFqMWJKUFk1ckE9PSIsIm9wZW5pZCI6Im9sblFfNWNyb0pfUXR5NTFx
  // cktUQzktd1pKeVkiLCJpYXQiOjE1NzEyMjc2NjB9.lopVRU3qyb4q47mn21tJ8T5Z3pot4l5_zSf2-g-FGgo
  // 3. 响应数据
  ctx.body = token;
});


// 测试验证身份token的接口
router.get('/test', (ctx, next) => {
  // 获取token的值
  console.log(ctx.request.header.authorization)
  let token = ctx.request.header.authorization;
  
  // { session_key: 'bvVTSxZf3pzi5yKpCwQSxA==',
  //   openid: 'olnQ_5croJ_Qty51qrKTC9-wZJyY',
  //   iat: 1571228656 } iat: 加密时的时间
  let result;
  try{
    result = jwt.verify(token, 'atguigu')
    console.log('验证结果', result);
    ctx.body = '验证成功'
  }catch (e) {
    ctx.body = '验证失败'
  }
});
// 2. 使用路由器及路由
app
  .use(router.routes()) // 声明使用路由
  .use(router.allowedMethods()) // 允许使用路由的方法

// 3. 监听端口
app.listen('3000', () => {
  console.log('服务器启动成功');
  console.log('服务器地址： http://localhost:3000');
})

