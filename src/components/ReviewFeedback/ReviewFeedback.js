import React, { Component } from 'react';
import { connect } from 'react-redux'

 
class ReviewFeedback extends Component {
    render() {
        return (
        <div>
            <h2>Review Your Feedback</h2>
            <form>
             <p>Feelings: {this.props.feeling}</p>
                <p>Understanding: {this.props.understanding}</p>
                <p>Support: {this.props.support}</p>
                <p>Comment:{this.props.comment}</p>
            </form>
        </div>
         );
    }
 }

 const mapReduxStateToProps =(reduxState) =>({
    feeling: reduxState.feelingReducer,
    understanding: reduxState.understandingReducer,
    support: reduxState.supportReducer,
    comment: reduxState.commentReducer,
})

 export default connect(mapReduxStateToProps)(ReviewFeedback);