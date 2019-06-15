import React, { Component } from 'react';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import {connect} from 'react-redux';
import './Understanding.css';
 
class Understanding extends Component {
    state = {
        understanding: '', 
    }

    handleChange= (event) => {
        this.props.dispatch({ type: 'FEEDBACK_LIST', payload: {understanding: event.target.value}
    })
    }

    handleClick = () => {
        if (  this.props.feedback.feedbackReducer.understanding === "" ){
            alert("Please fill out the field!")
        }
        else {
            this.props.history.push('/support')
        }
        }


    render() {
        return (
            <main>
            <div className="Understanding">
                <h1>How well are you understanding the content?</h1>
                <span>Understanding?
                    <div>
                        <input type="radio" name="option" value="1" onChange={this.handleChange} />
                        <label className="nameInputs">1</label>
                        <input type="radio" name="option" value="2" onChange={this.handleChange} />
                        <label className="nameInputs">2</label>
                        <input type="radio" name="option" value="3" onChange={this.handleChange} />
                        <label className="nameInputs">3</label>
                        <input type="radio" name="option" value="4" onChange={this.handleChange} />
                        <label className="nameInputs">4</label>
                        <input type="radio" name="option" value="5" onChange={this.handleChange} />
                        <label className="nameInputs">5</label>
                        <br/>
                    <button onClick={this.handleClick}>NEXT</button>
                    </div>
                </span>
            </div>
            <ReviewFeedback />
        </main>

        );
    }
}

const mapReduxStateToProps =(reduxState) =>({
    feedback: reduxState
})

export default connect(mapReduxStateToProps) (Understanding);