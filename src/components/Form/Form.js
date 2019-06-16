import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Form.css';
import Button from '@material-ui/core/Button';
 
class Form extends Component {
    submitButtonOrIncomplete(){
        if(this.props.feedback.feedbackReducer.comments !== "" && this.props.feedback.feedbackReducer.support!== ""
        && this.props.feedback.feedbackReducer.understanding!== "" && this.props.feedback.feedbackReducer.feeling!== ""){
            return  <Button variant= "contained" color="primary" onClick = {this.handleClick}>Submit</Button>
        }else{
            return <Button variant= "contained" color="secondary" disabled>Submit</Button>
        }
    }

    render() {
        let isComplete = this.submitButtonOrIncomplete()

        let button = isComplete;
        return (
        <div className="Form">
            <h2>Review Your Feedback</h2>
            <form>
                <p>Feelings: {this.props.feedback.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.feedback.feedbackReducer.understanding}</p>
                <p>Support: {this.props.feedback.feedbackReducer.support}</p>
                <p>Comment:{this.props.feedback.feedbackReducer.comments}</p>
                {button}

            </form>
        </div>
         );
    }
 }

 const mapReduxStateToProps =(reduxState) =>({
    feedback: reduxState
})

 export default connect(mapReduxStateToProps)(Form);