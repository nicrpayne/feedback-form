import React, { Component } from 'react';



class PageFive extends Component {

    handleClick = () => {
        // alert("You are headed to Feedback Review");
        ///CHANGE LOCATION???
        this.props.history.push('/FeedBack')
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

export default PageFive