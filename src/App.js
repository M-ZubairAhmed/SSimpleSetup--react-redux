import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { voteReact, voteVue, voteAngular } from './actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Click to vote</h1>
          <div>
            <h3 onClick={() => this.props.voteReact()}>
              React - {this.props.votes.react}
            </h3>
            <h3 onClick={() => this.props.voteVue()}>Vue - {this.props.votes.vue}</h3>
            <h3 onClick={() => this.props.voteAngular()}>
              Angular - {this.props.votes.angular}
            </h3>
          </div>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  votes: state.votes,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { voteReact: voteReact, voteVue: voteVue, voteAngular: voteAngular },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(App)
