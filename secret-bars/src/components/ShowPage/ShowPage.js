//shows a single bar from dashboard when clicked . use routes and links
//has some info on bar and has option to delete

import React, { Component } from "react";
//import { useParams } from 'react-router-dom'

export class ShowPage extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     name: "",
  //     url: "",
  //     image: "",
  //     reviews: ""
  //   };
  // }

  render() {
    const bar = this.props.listOfBars.find(
      barName => barName.name === this.props.match.params.name
    );
    return (
      <div>
        <h1>Name: {bar.name} </h1>
        <h3>Phone number: {bar.display_phone}</h3>
        <h2>Number of reviews: {bar.review_count}</h2>
        <a href={bar.url}>Yelp Link</a>

        <div className="userShowPage">
          {this.props.email !== null ? (
            <p>{this.props.email}</p>
          ) : (
            <div>
              <p>hello</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ShowPage;
