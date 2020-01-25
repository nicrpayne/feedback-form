import React, { Component } from 'react';
import { connect } from 'react-redux';



class PageThree extends Component {

    handleClick = () => {
        // alert("You are headed to page 4");
        ///CHANGE LOCATION???
        this.props.history.push('/PageFour')
        this.props.dispatch({
            type: 'SUPPORTED-ENTRY',
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

export default connect(putReduxStateOnProps)(PageThree);