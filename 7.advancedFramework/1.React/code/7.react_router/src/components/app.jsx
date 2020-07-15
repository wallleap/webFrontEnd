import React from 'react'
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'
import MyNavLink from './my-nav-link'
import About from '../views/about'
import Home from '../views/home'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*导航路由链接，不能使用a标签，to指向的path*/}
              <MyNavLink className="list-group-item" to='/about'>About</MyNavLink>
              <MyNavLink className="list-group-item" to='/home'>Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*可切换的路由组件，使用switch只有匹配才显示，route的path对应上方的to、component对应路由组件，Redirect自动重定向到about、默认到about组件*/}
                <Switch>
                  <Route path='/about' component={About}/>
                  <Route path='/home' component={Home}/>
                  <Redirect to='/about'/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
