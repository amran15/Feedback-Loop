import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/button';


class Thanks extends Component {
    handleClick = () => {this.props.history.push('/')
        }
        
    render() {
        return (
         <main>
         <div className="Thanks">
             <h1>Thank you for your submission</h1>
             <span>
                 <div>
                 <h2>Want to leave another feedback?</h2>
                 <Button variant="contained" color="primary" onClick={this.handleClick}>Leave New Feedback</Button>
                 </div>
             </span>
         </div>
     </main>
        );
    }
}


export default connect() (Thanks);