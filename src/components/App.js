import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading-bar'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());


  }
  render() {
    return (
      <div>
        <LoadingBar/>
        {this.props.loading === true ? null :

          <Dashboard />
        }
      </div>
    )
  }
}

// check the store authed user and return object with key loading and value true if no autheduser otherwise false
function mapStateToProps({ authedUser }) {
  return {
    Loading: authedUser === null

  }

}
export default connect(mapStateToProps)(App);