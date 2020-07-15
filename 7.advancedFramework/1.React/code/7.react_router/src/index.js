import React from 'react'
//import ReactDOM from 'react-dom'
import {render} from 'react-dom'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import App from './components/app'

import './index.css'

// ReactDOM.render(
render(
  (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    /* 组件需要用路由器组件包含起来，两者任选一个 */
    /*<HashRouter>
      <App />
    </HashRouter>*/
  ),
  document.getElementById('root')
)