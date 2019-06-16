import React, { Component } from 'react';
import  Form from '../Form/Form';
import {connect} from 'react-redux';
import './Feeling.css';
 
class Feeling extends Component {
    state = {
        feeling: '', 
    }

    handleChange= (event) => {
        this.props.dispatch({ type: 'FEEDBACK_LIST', payload: {feeling: event.target.value}
        })
        }

    handleClick = () => {
        if (this.props.feedback.feedbackReducer.feeling === '' ){
            alert("Please fill out the field!")
        }else{
            this.props.history.push('/understanding')
        }
    }
    render() {
        return (
            <main>
                <div className="Feeling">
                    <h1>How are you feeling today?</h1>
                    <span>Feeling ?
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
                < Form />
            </main>
     
        );
    }
}
const mapReduxStateToProps =(reduxState) =>({
    feedback: reduxState
})

export default connect(mapReduxStateToProps) (Feeling);