import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer'
import '../App/App.css'




class PageOne extends Component {

    handleClick = () => {
        // alert("You are headed to page 2");
        ///CHANGE LOCATION???
        let field = this.state.feels;
        //Name
        if (field === "") {
            alert("Please pick a number 1-5 to move ahead")
        } else {
        this.props.history.push('/PageTwo')
        this.props.dispatch({
            type: 'FEELING-ENTRY',
            payload: this.state.feels
        })}
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
            <form>
            <header >
                <h1>How are you feeling today?</h1>
            </header>
            <div>
                <input required placeholder="Rate 1-5"
                    value={this.state.feels}
                    onChange={(event) => this.handleChange(event)}
                />
            </div>
            <br></br>
            <button className="button" onClick={this.handleClick}>Next</button>
                <Footer />
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

export default connect(putReduxStateOnProps)(PageOne);



