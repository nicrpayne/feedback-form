import React, { Component } from 'react';



class PageThree extends Component {

    handleClick = () => {
        alert("You are headed to page 4");
        ///CHANGE LOCATION???
        this.props.history.push('/PageFour')
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

export default PageThree