import React, { Component } from 'react';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import {connect} from 'react-redux';
 
class Understanding extends Component {
    handleChange= (event) => {
        console.log(event.target.value)
        this.props.dispatch({ type: 'UNDERSTANDING_LIST', payload: event.target.value});
        }

    handleClick = () => {
        this.props.history.push('/support')
        }
    render() {
        return (
            <main>
            <div className="Feeling Feedback">
                <h1>How well are you understanding the content?</h1>
                <span>Understanding?
                    <div>
                    <input type="number" min="1" max="5" onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>NEXT</button>
                    </div>
                </span>
            </div>
            <ReviewFeedback />
        </main>

        );
    }
}


export default connect() (Understanding);