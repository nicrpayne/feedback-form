import React, { Component } from 'react';



class Home extends Component {

    handleClick = () => {
        alert("You are headed to page 1");
        ///CHANGE LOCATION???
        this.props.history.push('/PageOne')
    }


    render() {
        return (

            <>
                <header >
                    
                </header>
                <input> </input>
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}
export default Home