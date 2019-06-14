import React, { Component } from 'react';
 
class Understanding extends Component {
    handleClick = () => {
        this.props.history.push('/support')
        }
    render() {
        return (
     <button onClick={this.handleClick}>Support</button>
        );
    }
}

export default Understanding;