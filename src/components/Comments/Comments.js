import React, { Component } from 'react';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import {connect} from 'react-redux';
 
class Comments extends Component {
    handleChange= (event) => {
        console.log(event.target.value)
        this.props.dispatch({ type: 'COMMENT_LIST', payload: event.target.value});
        }

    handleClick = () => {
        this.props.history.push('/')
        }

    render() {
        return (
         <main>
         <div className="Feeling Feedback">
             <h1>Any comments you want to leave?</h1>
             <span>Comments
                 <div>
                 <input type="type" onChange={this.handleChange}/>
                 <button onClick={this.handleClick}>NEXT</button>
                 </div>
             </span>
             <ReviewFeedback />
         </div>
     </main>
        );
    }
}


export default connect() (Comments);