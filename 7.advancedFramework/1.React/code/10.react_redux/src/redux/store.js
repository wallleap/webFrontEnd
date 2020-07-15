import {createStore} from 'redux'
import {counter} from './reducers'
// 根据counter函数创建store对象
const store = createStore(counter)  // // 内部会第一次调用reduer函数，得到初始state
// console.log(store, store.getState())

export default store