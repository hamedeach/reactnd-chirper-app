import React, { Component } from "react";
import {connect} from 'react-redux'
import {handleAddTweet} from  '../actions/tweets'


class NewTweet extends Component {

    state = {
        text: '',

    }

    handleChange = (e) => {
        const text = e.target.value
        this.setState(() => ({
            text,
        }))

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { text } = this.state;
        // add the tweet to the store
        const {dispatch, id} = this.props
        dispatch(handleAddTweet(text,id))

        console.log('New tweet', text);
        this.setState(() => ({
            text: '',
        }))

    }

    render() {
        const { text } = this.state;
        const tweetleft = 280 - text.length
       
        {/* to-do redirect to the home page after submiting a new tweet */}

        return (
            <div >
                <h3 className="center">Compose new tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="What's happening?"
                        value={text}
                        onChange={this.handleChange}
                        className="textarea"
                        maxLength={280} />

                    {tweetleft <= 100 && (<div className="-tweet-length">{tweetleft}</div>)}

                    <button
                        className="btn"
                        type="submit"
                        disabled={text === ''}

                    >
                        Submit</button>

                </form>


            </div>
        )
    }

}



export default connect()(NewTweet);