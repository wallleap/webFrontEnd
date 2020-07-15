import React from 'react'
import Search from './search'
import UserList from './user-list'

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <Search/>
        </section>
        <UserList/>
      </div>
    )
  }

}
