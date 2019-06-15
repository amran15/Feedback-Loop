import React, { Component } from 'react';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import {connect} from 'react-redux';
 
class Comments extends Component {
    state = {
        comments: '', 
    }

    handleChange= (event) => {
        this.setState({
            comments: event.target.value
        })
        }

    handleClick = () => {
        this.props.dispatch({ type: 'FEEDBACK_LIST', payload: this.state})
        this.props.history.push('/review')
        }

    render() {
        return (
         <main>
         <div className="Feeling ">
             <h1>Any comments you want to leave?</h1>
             <span>Comments
                 <div>
                 <textarea type="text"
                 rows="8"
                 cols="70"
                 value={this.state.comments}
                 onChange={this.handleChange}>
                 </textarea>
                 <br/>
                 <button onClick={this.handleClick}>NEXT</button>
                 </div>
             </span>
             <ReviewFeedback/>
         </div>
     </main>
        );
    }
}


export default connect() (Comments);