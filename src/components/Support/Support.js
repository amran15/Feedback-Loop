import React, { Component } from 'react';
 
class Support extends Component {
    handleClick = () => {
        this.props.history.push('/comments')
        }
    render() {
        return (
     <button onClick={this.handleClick}>Comments</button>
        );
    }
}

export default Support;