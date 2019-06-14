import React, { Component } from 'react';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import {connect} from 'react-redux';
 
class Support extends Component {
    handleChange= (event) => {
        console.log(event.target.value)
        this.props.dispatch({ type: 'SUPPORT_LIST', payload: event.target.value});
        }

    handleClick = () => {
        this.props.history.push('/comments')
        }

    render() {
        return (
             <main>
                <div className="Feeling Feedback">
                    <h1>How well are you being supported?</h1>
                    <span>Support?
                        <div>
                        <input type="number" min="1" max="5" onChange={this.handleChange} />
                        <button onClick={this.handleClick}>NEXT</button>
                        </div>
                    </span>
                </div>
                <ReviewFeedback />
            </main>
        );
    }
}


export default connect() (Support);