import React, { Component } from 'react';
import { connect } from 'react-redux';
import FooterPageFour from '../FooterPageFour/FooterPageFour'
import Typography from '@material-ui/core/Typography';




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
           
                <body className="pagefourheader">
                <header >
                   
                    <Typography variant="h5" component="h2" gutterBottom >
                    <h1 style={{ color: 'white' }}>Any comments you want to leave?</h1>
                        </Typography>
                   
                </header>

                {/* <div>
                    <input required placeholder="Rate 1-5"
                        value={this.state.feels}
                        onChange={(event) => this.handleChange(event)}
                    />
                </div> */}
                
                <form  >
                        <div className="field">
                        <textarea placeholder="Hey... say something!"
                        value={this.state.comments}
                        onChange={(event) => this.handleChange(event)}> 
                            
                        </textarea>
                    </div>

                </form>
                    <br></br>
                    <button className="button" onClick={this.handleClick}>Next</button>
                <FooterPageFour />
                </body>
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


