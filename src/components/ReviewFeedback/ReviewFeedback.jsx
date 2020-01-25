import React, { Component } from 'react';



class ReviewFeedback extends Component {

    handleClick = () => {
        //alert("THANK YOU for your Feedback");
        ///CHANGE LOCATION???
        this.props.history.push('/ThankYou')
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

export default ReviewFeedback