import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Header from '../Header/Header'
import PageOne from '../PageOne/PageOne'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <ul>
            <li>
              <Link to="/">PageOne</Link>
            </li>
            
          </ul>

        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Route path="/pageone" component={PageOne}/>
        <Header />
        <PageOne />
        
        <br/>
      </div>
      </Router>
    );
  }
}

export default connect()(App);
