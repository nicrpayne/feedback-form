import React, { Component } from 'react';
import { connect } from 'react-redux';


class PageTwo extends Component {

    handleClick = () => {
        alert("You are headed to page 3");
        ///CHANGE LOCATION???
        this.props.history.push('/PageThree')
    }


    render() {
        return (
            <>
                <header >
                   
                </header>
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}

export default connect()(PageTwo)