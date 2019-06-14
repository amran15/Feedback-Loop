import React, { Component } from 'react';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import {connect} from 'react-redux';
 
class Feeling extends Component {
    handleChange= (event) => {
        console.log(event.target.value)
        this.props.dispatch({ type: 'FEELING_LIST', payload: event.target.value});
        }

    handleClick = () => {
        this.props.history.push('/understanding')
        }

handleSubmit(event){
    event.preventDefault();
}
    render() {
        return (
            <main>
                <div className="Feeling Feedback">
                    <h1>How are you feeling today?</h1>
                    <span>Feeling ?
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

export default connect() (Feeling);