//have search bar with location filtered in
//have a my favorite list users favorite bars (which will be dashboard component)
//info on what site does

import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Bars from '../Bars/Bars'
import ShowPage from '../ShowPage/ShowPage'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      //listOfBars: []
    };

  }

  handleLocation = event => {
    console.log(event.target);
    
    this.props.setLocation({ location: this.state.location });
    
  };
  handleInputLocation = (event) =>{
      this.setState({location: event.target.value})
  }

//   //fetch api
//   getBars = () => {
//     //get bars by location
//     let url = `https://secret-bars.herokuapp.com/yelps/${this.state.location}`; //showing bars from previous search
//     fetch(url)
//       .then(res => res.json())
//       .then(res => {
//         console.log(res);
//         console.log(res.businesses);
//         //update state to have new list
//         this.setState({ listOfBars: res.businesses });
//       });
//       console.log(this.state.listOfBars);
      
//   };
 
// componentDidMount(){
//   this.getBars()
// }
  
  //pass down to bars.js where it will list out each bars
  render() {
    let list = this.props.listOfBars.map((item, i) => {
      return (
        <div key={item} index={i} className="barsList">
           <Link to={`/${item.name}`}>
            {" "}
           <h2>{item.name} </h2>{" "}
           </Link>
        
        </div>
      );
    });
    return (
      <div>
        <h1>Hole In The Wall</h1>

        <h3> Find a new low key restaurant or bar </h3>

        <input
          onChange={this.handleInputLocation}
          type="text"
          placeholder="enter your location"
        />

        <button type="Submit" onClick={this.handleLocation}>
          Search
        </button>

        <div className="bars">
          <div>{list}</div>
        </div>
      </div>
    );
  }
}

export default Home;
