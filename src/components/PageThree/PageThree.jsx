import React, { Component } from 'react';
import { connect } from 'react-redux';
import FooterPageThree from '../FooterPageThree/FooterPageThree'



class PageThree extends Component {

    handleClick = () => {
        // alert("You are headed to page 4");
        ///CHANGE LOCATION???
        let field = this.state.supported;
        //Name
        if (field === "") {
            alert("Please pick a number 1-5 to move ahead")
        } else {
        this.props.history.push('/PageFour')
        this.props.dispatch({
            type: 'SUPPORTED-ENTRY',
            payload: this.state.supported
        })}
    }
    state = {
        supported: ''

    }
    handleChange = (event) => {
        this.setState({
            supported: event.target.value
        })

    }

    render() {
        return (

            <>
            <form>
                <header >
                    <h1>How well are you being supported?</h1>
                </header>
                <div>
                    <input required placeholder="Rate 1-5"
                        value={this.state.supported}
                        onChange={(event) => this.handleChange(event)}
                    />
                </div>
                <button onClick={this.handleClick}>Next</button>
                <FooterPageThree />
            </form>
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