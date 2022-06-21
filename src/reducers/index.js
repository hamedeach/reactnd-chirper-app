import authedUser from '../reducers/authedUser'
import users from '../reducers/users'
import tweets from '../reducers/tweets'
import {combineReducers} from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'




export default combineReducers({
    authedUser: authedUser,
    tweets: tweets,
    users: users,
    loadingBar: loadingBarReducer,
  });