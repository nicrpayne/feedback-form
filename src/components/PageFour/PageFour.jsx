import React, { Component } from 'react';
import { connect } from 'react-redux';



class PageFour extends Component {

    handleClick = () => {
        // alert("You are headed to page 5");
        ///CHANGE LOCATION???
        this.props.history.push('/PageFive')
        this.props.dispatch({
            type: 'COMMENTS-ENTRY',
            payload: this.state.feels
        })
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

export default connect(putReduxStateOnProps)(PageFour);