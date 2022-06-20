import {getInitialData} from '../utils/api'
import {receiveUsers,} from './users'
import {receiveTweets,} from './tweets'
import {setAuthedUser} from './authedUser'

const AUTHED_ID='tylermcginnis';

//handle async request to get initial data from the API and add data to the store 
export function handleInitialData(){
    return(dispatch)=>{
        return getInitialData().then(({ users,tweets,})=>{
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
            dispatch(setAuthedUser(AUTHED_ID))
        })

    }
}