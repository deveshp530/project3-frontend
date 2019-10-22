//have search bar with location filtered in
//have a my favorite list users favorite bars (which will be dashboard component)
//info on what site does

import React, { Component } from 'react'

export class Home extends Component {
    constructor(props){
        super(props)
        this.state = ({
            location: '',
            listOfBars: []
        })
    }

    handleLocation = (event) =>{
        this.setState({location: event.target.value})
    }
    

    //fetch api
    //get bars by location
    //push bars into listOfBars
    //update state to have new list
    //pass down to bars.js where it will list out each bars
    render() {
        return (
            <div>
                <h1>Hole In The Wall</h1>

                <h3> Find a new low key restaurant or bar </h3>

                <input type="text" onChange={this.handleLocation}/>

            </div>
        )
    }
}

export default Home
