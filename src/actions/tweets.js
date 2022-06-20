export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

// action creator to receive the tweets
export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}