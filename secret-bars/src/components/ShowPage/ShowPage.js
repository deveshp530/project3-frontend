//shows a single bar from dashboard when clicked . use routes and links
//has some info on bar and has option to delete

import React, { Component } from "react";
//import { useParams } from 'react-router-dom'

export class ShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      url: "",
      image: "",
      reviews: ""
    };
  }

  render() {
    const bar = this.props.listOfBars.find(
      barName => barName.name === this.props.match.params.name
    );
    return (
      <div>
        <h3>Name: {bar.name} </h3>
      </div>
    );
  }
}

export default ShowPage;