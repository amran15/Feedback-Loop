import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
 
class Header extends Component {

    render() {
        return (
        <Router>
        <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4><i>Don't forget it!</i></h4>
        <Link to='/'>Home</Link>
        </header>
        </Router>
        );
    }
}

export default Header;