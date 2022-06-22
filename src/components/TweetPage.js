import React,{Component} from "react";
import NewTweet from './NewTweet';
import Tweet from './Tweet'
import {connect} from 'react-redux'


class TweetPage extends Component{
    
    render(){
        const {id, replies} = this.props

        return(
            <div>
                TweetPage
                <Tweet id={id}/>
                <NewTweet id={id}/>
                {
                    replies.length !==0 && <h3 className="center">Replies</h3>
                }
                <ul>
                    {replies.map((replyid)=>(
                        <li key={replyid}>
                            <Tweet id={replyid}/>
                        </li>
                    ))}

                </ul>

            </div>
        )
    }


}

function mapStateToProps({authedUser,tweets,users},props){
    const {id} = props.match.params
    return {
        id,
        replies:! tweets[id]?[] 
        : 
        tweets[id].replies.sort((a,b)=>tweets[b].timestamp- tweets[a].timestamp)
    }
}
export default connect(mapStateToProps)(TweetPage)