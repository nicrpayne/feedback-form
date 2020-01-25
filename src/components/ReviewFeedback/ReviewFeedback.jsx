import React, { Component } from 'react';
import { connect } from 'react-redux';



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

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxStateOnProps)(ReviewFeedback);