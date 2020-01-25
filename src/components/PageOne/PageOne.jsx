import React, { Component } from 'react';
import { connect } from 'react-redux';



class PageOne extends Component {

    handleClick = () => {
        // alert("You are headed to page 2");
        ///CHANGE LOCATION???
        this.props.history.push('/PageTwo')
        this.props.dispatch({
            type: 'PAGE-ENTRY',
            payload: this.state.feels
        })
    } 

state = {
    feels: ''

}

  handleChange = (event) => {
      this.setState({
          feels: event.target.value
      })
      
  }


    render() {
        return (
        
            <>
            <header >
                <h1>How are you feeling today?</h1>
            </header>
            <div>
                <input required placeholder="Rate 1-5"
                    value={this.state.feels}
                    onChange={(event) => this.handleChange(event)}
                />
            </div>
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

export default connect(putReduxStateOnProps)(PageOne);