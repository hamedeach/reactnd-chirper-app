import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading-bar'
import Nav from '../components/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Fragment from 'render-fragment';

import TweetPage from './TweetPage';
import NewTweet from './NewTweet';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());


  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true ? null
              :
              <div>
                <Routes>
                  <Route path='/'  Component={Dashboard} />
                  <Route path='/tweet/:id' Component={TweetPage} />
                  <Route path='/new' Component={NewTweet} />
                </Routes>
              </div>
            }
          </div>
        </Fragment>
      </Router>

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