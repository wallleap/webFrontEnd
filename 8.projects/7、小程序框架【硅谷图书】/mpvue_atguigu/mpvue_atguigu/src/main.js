import Vue from 'vue'
import App from './App'

//  关闭Vue开发中的一些提示
Vue.prototype.productionTip = false


// 声明当前的组件为整个应用
App.mpType = 'app'


// 生成当前应用的实例
const app = new Vue(App)

// 挂载当前应用的实例
app.$mount()
