import React, { Component } from 'react';
import { connect } from 'react-redux';



class PageFour extends Component {

    handleClick = () => {
        // alert("You are headed to page 5");
        ///CHANGE LOCATION???
        this.props.history.push('/ReviewFeedback')
        this.props.dispatch({
            type: 'COMMENTS-ENTRY',
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
                        value={this.state.feels}
                        onChange={(event) => this.handleChange(event)}> 
                            
                        </textarea>
                    </div>

                </form>
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

export default connect(putReduxStateOnProps)(PageFour);


