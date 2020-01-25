import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from '../Header/Header'
import PageOne from '../PageOne/PageOne'
import PageTwo from '../PageTwo/PageTwo'
import PageThree from '../PageThree/PageThree'
import PageFour from '../PageFour/PageFour'
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback'
import ThankYou from '../ThankYou/ThankYou'
import Home from '../Home/Home'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          

        {/* <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header> */}
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/pageone" component={PageOne}/>
        <Route path="/pagetwo" component={PageTwo}/>
        <Route path="/pagethree" component={PageThree} />
        <Route path="/pagefour" component={PageFour} />
        <Route path="/ReviewFeedback" component={ReviewFeedback} />
        <Route path="/thankyou" component={ThankYou} />
        <Route path="/home" component={Home} />
        
        <br/>
      </div>
      </Router>
    );
  }
}

export default connect()(App);
