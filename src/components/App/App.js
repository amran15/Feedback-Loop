import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Thanks from '../Thanks/Thanks';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header />
      <Route path="/" exact component={Feeling}/>
      <Route path="/understanding" exact component={Understanding}/>
      <Route path="/support" exact component={Support}/>
      <Route path="/comments" exact component={Comments}/>
      <Route path="/review" exact component={Review}/>
      <Route path="/thanks" exact component={Thanks}/>
        <br/>
      </div>
      </Router>
    );
  }
}


export default connect () (App);
