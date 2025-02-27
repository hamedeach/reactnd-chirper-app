import { saveLikeToggle, saveTweet } from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'


// action creator to receive the tweets
export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}

function toggleTweet({ id, authedUser, hasLiked }) {
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked,


    }
}

function addTweet(tweet) {
  
    return {
        type: ADD_TWEET,
        tweet,

    }
}

export function handleAddTweet(text, replyingTo) {
    return (dispatch, getstate) => {
        const { authedUser } = getstate()
        dispatch(showLoading());
        return saveTweet(
            {
                text,
                author: authedUser,
                replyingTo,
            })
            .then((tweet) => {
                dispatch(addTweet(tweet))
                dispatch(hideLoading())
            }).catch((e) => {
                console.warn('Error in handle  toggle tweet', e)
                alert('error to like a tweet!')
            })

    }

}

export function handleToggleTweet(info) {
    return (dispatch) => {
        dispatch(toggleTweet(info))
        return saveLikeToggle(info).catch((e) => {
            console.warn('Error in handle  toggle tweet', e)
            dispatch(toggleTweet(info))
            alert('error to like a tweet!')
        })

    }

}
