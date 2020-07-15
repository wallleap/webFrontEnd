/**
 * 上部的搜索模块
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js' //引入

class Search extends Component {

  
  search = () => {
    var searchName = this.nameInput.value
    if(searchName){
      // 搜索
      // 发布消息 search 
      PubSub.publish('search', searchName)
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="enter the name you search"
               ref={(input => this.nameInput = input)}/>
        <input type="submit" value="Search" onClick={this.search} />
      </div>
    )
  }
}

export default Search