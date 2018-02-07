import React from 'react'
import { connect } from 'react-redux'

class App extends App.Component {
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
          <h4>ReactJs - {this.props.votes.reactVotes}</h4>
          <h4>VueJs - {this.props.votes.vueVotes}</h4>
          <h4>AngularJs - {this.props.votes.angularVotes}</h4>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({ votes: state })

export default connect(mapStateToProps)(App)
