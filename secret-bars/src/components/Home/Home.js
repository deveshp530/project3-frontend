//have search bar with location filtered in
//have a my favorite list users favorite bars (which will be dashboard component)
//info on what site does

import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Bars from '../Bars/Bars'
import OneBar from '../OneBar/OneBar'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      listOfBars: []
    };
    //this.bind
  }

  handleLocation = event => {
    this.setState({ location: event.target.value });
  };

  
    
  getBars = () => {
    let url = `https://secret-bars.herokuapp.com/yelps/${this.state.location}`; //showing bars from previous search
    fetch(url)
    
    .then(res=>res.json())
    .then(res => {
        console.log(res)
        console.log(res.businesses)
        this.setState({listOfBars: res.businesses})
    })
  }
    // .then(this.barsRedirect())
   
    //console.log(this.state.listOfBars)
  // };
  
  // barsRedirect = ()=> {
   
  //   console.log('hello')

  // }
  
  

  //fetch api
  //get bars by location
  //push bars into listOfBars
  //update state to have new list
  //pass down to bars.js where it will list out each bars
  render() {
    
        let list = this.state.listOfBars.map((item,i) => {
            return(
           <div key={item} index={i}className='barsList'>
                <Link to={'/OneBar/' + item.name}>  <h2>{item.name} </h2> </Link>
                <OneBar bar={item.name} listOfBars={this.state.listOfBars}/>
               </div>
            )
        })
        return (
      <div>
        <h1>Hole In The Wall</h1>

        <h3> Find a new low key restaurant or bar </h3>

        <input
          type="text"
          onChange={this.handleLocation}
          placeholder="enter your location"
        />
       
        <button type="Submit" onClick={this.getBars} >
          Search
        </button>
        
        
        <div className="bars">
            <div>{list}</div>
        </div>
      </div>
        )
  }
}

export default Home;
