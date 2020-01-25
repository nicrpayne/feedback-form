import React, { Component } from 'react';



class PageOne extends Component {

    handleClick = () => {
        alert("You are headed to page 2");
        ///CHANGE LOCATION???
        this.props.history.push('/PageTwo')
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

export default PageOne