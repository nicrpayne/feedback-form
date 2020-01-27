import React, { Component } from 'react';
import { connect } from 'react-redux';
import FooterPageOne from '../FooterPageOne/FooterPageOne'


class PageTwo extends Component {

    handleClick = () => {
        
        // alert("You are headed to page 2");
        ///CHANGE LOCATION???
        let field = this.state.understanding;
        //Name
        if (field === "") {
            alert("Please pick a number 1-5 to move ahead")
        } else {
        this.props.history.push('/PageThree')
        this.props.dispatch({
            type: 'UNDERSTANDING-ENTRY',
            payload: this.state.understanding
        })}
       
    } 

    state = {
        understanding: ''

    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        })

    }

    render() {
        return (
            <>
            <form>
                <header >
                    <h1>How well are you understanding the content?</h1>
                </header>
                <div>
                    <input required placeholder="Rate 1-5"
                        value={this.state.understanding}
                        onChange={(event) => this.handleChange(event)}
                    />
                </div>
                    <button className="button" onClick={this.handleClick}>Next</button>
                
            </form>
          
                <FooterPageOne /> 
          </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxStateOnProps)(PageTwo);