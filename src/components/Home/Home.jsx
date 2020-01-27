import React, { Component } from 'react';




class Home extends Component {

    handleClick = () => {
        //alert("You are headed to page 1");
        ///CHANGE LOCATION???
        this.props.history.push('/PageOne')
    }


    render() {
        return (
            <>
                <header >  
                    <h1>Let's get started!</h1>
                </header>
                <button className="button" onClick={this.handleClick}>START</button>
            </>
        )
    }
}



export default Home;