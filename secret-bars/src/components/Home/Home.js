 //have search bar with location filtered in
//have a my favorite list users favorite bars (which will be dashboard component)
//info on what site does
​
import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Bars from '../Bars/Bars'
//import ShowPage from "../ShowPage/ShowPage";
​
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
  }
​
  handleLocation = event => {
    this.props.setLocation({ location: this.state.location });
  };
  handleInputLocation = event => {
    this.setState({ location: event.target.value });
  };
​
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
​
        <h3> Find a new low key restaurant or bar </h3>
​
        <input
          onChange={this.handleInputLocation}
          type="text"
          placeholder="enter your location"
        />
​
        <button type="Submit" onClick={this.handleLocation}>
          Search
        </button>
​
        <div className="bars">
          <div>{list}</div>
        </div>
      </div>
    );
  }
}
​
export default Home;