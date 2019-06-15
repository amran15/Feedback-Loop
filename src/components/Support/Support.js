import React, { Component } from 'react';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import {connect} from 'react-redux';
 
class Support extends Component {
    state = {
        support: '', 
    }

    handleChange= (event) => {
        this.setState({
            support: event.target.value
        })
        }

    handleClick = () => {
        this.props.dispatch({ type: 'FEEDBACK_LIST', payload: this.state})
        this.props.history.push('/comments')
        }

    render() {
        return (
             <main>
                <div className="Feeling Feedback">
                    <h1>How well are you being supported?</h1>
                    <span>Support?
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
 

export default connect() (Support);