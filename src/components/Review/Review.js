import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Review.css';

class Review extends Component {

    handleClick = () => {
        this.props.history.push('/thanks')
        axios({
            method: 'POST',
            url: '/',
            data: this.props.feedback.feedbackReducer
        }).then((response) => {
            console.log(response)
        })
    }
    
    render() {
            return (
            <div className="Review">
                <h2>Review Your Feedback</h2>
                <form>
                    <p>Feelings: {this.props.feedback.feedbackReducer.feeling}</p>
                    <p>Understanding: {this.props.feedback.feedbackReducer.understanding}</p>
                    <p>Support: {this.props.feedback.feedbackReducer.support}</p>
                    <p>Comment:{this.props.feedback.feedbackReducer.comments}</p>
                    <button onClick={this.handleClick}>Submit</button>
                </form>
            </div>
             );
        }
}

const mapReduxStateToProps =(reduxState) =>({
    feedback: reduxState
})

export default connect(mapReduxStateToProps)(Review);