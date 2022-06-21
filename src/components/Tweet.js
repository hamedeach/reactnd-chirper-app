import React, { Component } from "react";
import { connect } from 'react-redux'
import { formatTweet, formatDate } from '../utils/helpers'




class Tweet extends Component {

    handleLike = (e) => {
        e.preventDefault();
        //handle like button 

    }

    toParent = (e, id) => {
        e.preventDefault();
        //redirect to the parent tweet
    }

    render() {
        // console.log('*****************')
        //console.log(this.props)
        const { tweet } = this.props

        if (tweet === null) {
            return (<p>This Tweet does not exist</p>)
        }

        //destucuring
        const { name, avatar, timestamp, text, hasLiked, likes, replies, id, parent } = tweet;

        return (
            <div className="tweet">
                <img src={avatar} alt={`avatar of ${name} `} className='avatar' />
                <div className="tweet-info">
                    <div>
                        <span>{name}</span>
                        <span>{formatDate(timestamp)+' '}</span>
                        {
                            parent && (
                                <button className="replying-to" onClick={(e) => this.toParent(e, id)}>
                                     Replying to @{parent.author}
                                </button>
                            )
                        }
                        <p>{text}</p>
                    </div>

                    <div className="tweet-icons">
                        <button>
                            <span>Reply</span>
                            <span>{replies !== 0 && replies}</span>
                        </button>


                        <button onClick={this.handleLike}>
                            <span>Likes</span>
                            <span>{likes > 0 && likes}</span>
                        </button>

                    </div>
                </div>
            </div>
        )
    }

}

// use the connect to get the state of our store (tweets)
function mapStateToProps({ authedUser, users, tweets }, { id }) {

    const tweet = tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null
    return {
        authedUser,
        tweet: tweet ?
            formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            :
            null



    }

}

export default connect(mapStateToProps)(Tweet);