import React, { Component } from 'react';
import { connect } from 'react-redux';
import FooterPageFour from '../FooterPageFour/FooterPageFour'




class PageFour extends Component {

    handleClick = () => {
        // alert("You are headed to page 5");
        ///CHANGE LOCATION???
        let field = this.state.comments;
        //Name
        if (field === "") {
           alert("Please add your thoughts to move ahead")
        } else {
        this.props.history.push('/ReviewFeedback')
        this.props.dispatch({
            type: 'COMMENTS-ENTRY',
            payload: this.state.comments
        })}
    }
    state = {
        comments: ''

    }
    handleChange = (event) => {
        //event.preventdefault();
        this.setState({
            comments: event.target.value
        })

    }

    render() {
        return (

           <>
           
                <header >
                    <h1>Any comments you want to leave?</h1>
                </header>
                {/* <div>
                    <input required placeholder="Rate 1-5"
                        value={this.state.feels}
                        onChange={(event) => this.handleChange(event)}
                    />
                </div> */}
                <form action="/html/tags/html_form_tag_action.cfm" method="post">
                    <div>
                        <textarea placeholder="Hey... say something!"
                        value={this.state.comments}
                        onChange={(event) => this.handleChange(event)}> 
                            
                        </textarea>
                    </div>

                </form>
                <button onClick={this.handleClick}>Next</button>
                <FooterPageFour />

            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxStateOnProps)(PageFour);


