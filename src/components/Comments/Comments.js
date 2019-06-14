import React, { Component } from 'react';
 
class Comments extends Component {
    handleClick = () => {
        this.props.history.push('/')
        }
    render() {
        return (
     <button onClick={this.handleClick}>Home</button>
        );
    }
}

export default Comments;