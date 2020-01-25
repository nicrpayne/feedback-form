import React, { Component } from 'react';



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
                <button onClick={this.handleClick}>Home</button>
            </>
        )
    }
}

export default ThankYou