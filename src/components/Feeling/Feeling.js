import React, { Component } from 'react';
 
class Feeling extends Component {
    handleClick = () => {
        this.props.history.push('/understanding')
        }
    render() {
        return (
     <button onClick={this.handleClick}>Understanding</button>
        );
    }
}

export default Feeling;