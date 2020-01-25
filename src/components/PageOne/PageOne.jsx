import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class PageOne extends Component {

    handleClick = () => {
        alert("You are headed to page 2");
        ///CHANGE LOCATION???
        this.props.history.push('/')
    } 


    render() {
        return (
            <>
            <header className="Page-One">
                <h1 className="Page-One">Feedback!</h1>
                <h4><i>Don't forget it!</i></h4>
            </header>
            <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}

export default connect()(PageOne)