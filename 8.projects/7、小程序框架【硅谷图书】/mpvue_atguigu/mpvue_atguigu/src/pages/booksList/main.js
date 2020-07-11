// 用来注册当前页面

import Vue from 'vue'
import Index from './index'

// 生成当前页面的实例
const index = new Vue(Index)

// 挂载当前页面的实例
index.$mount()
