/*
应用组件
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as actions from '../redux/actions'
import { INCREMENT } from '../redux/action-types'

export default class App extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  increment = () => {
    // 1.得到选择增加数量
    const number = this.refs.numSelect.value * 1
    // 2.调用store的方法更新状态
    this.props.store.dispatch(actions.increment(number))
  }

  decrement = () => {
    // 1.得到选择减小数量
    const number = this.refs.numSelect.value * 1
    // 2.调用store的方法更新状态
    this.props.store.dispatch(actions.decrement(number))
  }

  incrementIfOdd = () => {
    // 1.得到选择增加数量
    const number = this.refs.numSelect.value * 1
    // 2.得到原本的count状态
    let count = this.props.store.getState()
    // 判断，满足条件猜更新状态
    if (count % 2 === 1) {
      // 调用store的方法更新状态
      this.props.store.dispatch(actions.increment(number))
    }
  }

  incrementAsync = () => {
    // 1.得到选择增加数量
    const number = this.refs.numSelect.value * 1
    // 2.启动延时定时器，模拟异步
    setTimeout(() => {
      // 3.调用store的方法更新状态
      this.props.store.dispatch(actions.increment(number))
    }, 1000)
  }

  render() {
    const count = this.props.store.getState()
    return (
      <div>
        <p>
          click {count} times {' '}
        </p>
        <select ref="numSelect">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>{' '}
        <button onClick={this.increment}>+</button>
        {' '}
        <button onClick={this.decrement}>-</button>
        {' '}
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        {' '}
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}
