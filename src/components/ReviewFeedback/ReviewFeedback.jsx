import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';



class ReviewFeedback extends Component {

    handleClick = () => {
        //alert("THANK YOU for your Feedback");
        ///CHANGE LOCATION???
        this.props.history.push('/ThankYou')
        this.handleSubmit();
    }

    handleSubmit = (event) => {
        // event.preventDefault();
        //console.log(`Adding Review Data`, this.props.reduxState);

        let newReview = this.props.reduxState.feedback
        // TODO - axios request to server to add review
        axios.post('/review', newReview)
            .then(() => {
                
            })
            .catch((error) => {
                alert(error)
            })
    } 

    render() {
        return (

            <>
                <header >
                    <p>Feelings: {this.props.reduxState.feedback.feeling}</p>
                    <p>Understanding: {this.props.reduxState.feedback.understanding}</p>
                    <p>Support: {this.props.reduxState.feedback.supported}</p>
                    <p>Comments: {this.props.reduxState.feedback.comments}</p>
                </header>
                <button className="button" onClick={this.handleClick}>Submit!</button>
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