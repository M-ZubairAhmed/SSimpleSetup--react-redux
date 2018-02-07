import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Votedux</h1>
          <p>A simple react-redux app</p>
        </header>
        <hr />
        <section>
          <h2>Click to vote</h2>
          <h4>ReactJs -</h4>
          <h4>VueJs -</h4>
          <h4>AngularJs -</h4>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({ votes: state })

export default connect(mapStateToProps)(App)
