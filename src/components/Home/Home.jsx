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
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}
export default Home