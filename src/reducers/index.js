import authedUser from '../reducers/authedUser'
import users from '../reducers/users'
import tweets from '../reducers/tweets'
import {combineReducers} from 'redux'


export default combineReducers({
    authedUser: authedUser,
    tweets: tweets,
    users: users
  });