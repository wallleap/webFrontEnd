import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  render(){
    // 利用this.props三点运算符接受所有的属性
    return(
      <NavLink {...this.props} activeClassName='activeClass'/>
    )
  }
}