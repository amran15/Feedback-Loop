import React, { Component } from 'react';
import {connect} from 'react-redux';
 
class Thanks extends Component {
    
    handleClick = () => {
        this.props.history.push('/')
        }
  
    render() {
        return (
         <main>
         <div className="Feeling ">
             <h1>Thank you for your submission</h1>
             <span>
                 <div>
                 <h2>Want to leave another feedback?</h2>
                 <button onClick={this.handleClick}>NEXT</button>
                 </div>
             </span>
         </div>
     </main>
        );
    }
}


export default connect() (Thanks);