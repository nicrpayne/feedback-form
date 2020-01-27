import React, { Component } from 'react';
import { connect } from 'react-redux';



class ThankYou extends Component {

    handleClick = () => {
        //alert("You are headed to page 4");
        ///CHANGE LOCATION???
        this.props.history.push('/Home')
    }


    render() {
        return (

            <>
                <header >
                    <h1>THANK YOU</h1>
                </header>
                <button className="button" onClick={this.handleClick}>Home</button>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxStateOnProps)(ThankYou);