import React, { Component } from 'react';



class PageFour extends Component {

    handleClick = () => {
        // alert("You are headed to page 5");
        ///CHANGE LOCATION???
        this.props.history.push('/PageFive')
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

export default PageFour