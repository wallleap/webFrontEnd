import React, {Component} from 'react'

export default class App extends Component {

  state = {
    count: 0
  }

  increment = () => {
    // 1.得到选择增加数量
    const num = this.refs.numSelect.value*1
    // 2.得到原本的count状态，并计算新的count
    const count = this.state.count + num
    // 3.更新状态
    this.setState({count})
  }

  decrement = () => {
    // 1.得到选择减少数量
    const num = this.refs.numSelect.value*1
    // 2.得到原本的count状态，并计算新的count
    const count = this.state.count - num
    // 3.更新状态
    this.setState({count})
  }

  incrementIfOdd = () => {
    // 1.得到原本的count状态
    let count = this.state.count
    // 2.判断，满足条件猜更新状态
    if(count%2==1) {
      // 3.得到选择增加数量
      const num = this.refs.numSelect.value*1
      // 4.计算新的count
      count += num
      // 5.更新状态
      this.setState({count})
    }
  }

  incrementAsync = () => {
    // 启动延时定时器，模拟异步
    setTimeout(() => {
      const num = this.refs.numSelect.value*1
      const count = this.state.count + num
      this.setState({count})
    }, 1000)
  }

  render () {
    const {count} = this.state

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
        <button onClick={this.increment}>+</button>{' '}
        <button onClick={this.decrement}>-</button>{' '}
        <button onClick={this.incrementIfOdd}>increment if odd</button>{' '}
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}