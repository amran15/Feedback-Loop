import React, { Component } from 'react';
import { connect } from 'react-redux'

 
class ReviewFeedback extends Component {
        handleChange= (event) => {
            console.log(event.target.value)
            this.props.dispatch({ type: 'FEEDBACK_LIST', payload: event.target.value});
            }
    
        handleClick = () => {
            this.props.history.push('/understanding')
            }

    render() {
        return (
        <div>
            <h2>Review Your Feedback</h2>
            <form>
                <p>Feelings: {this.props.feedback.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.feedback.feedbackReducer.understanding}</p>
                <p>Support: {this.props.feedback.feedbackReducer.support}</p>
                <p>Comment:{this.props.feedback.feedbackReducer.comments}</p>
            </form>
        </div>
         );
    }
 }

 const mapReduxStateToProps =(reduxState) =>({
    feedback: reduxState
})

 export default connect(mapReduxStateToProps)(ReviewFeedback);