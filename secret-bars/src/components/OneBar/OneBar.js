//shows a single bar from dashboard when clicked . use routes and links
//has some info on bar and has option to delete

import React, { Component } from "react";
import BarsData from '../../data/BarsSeeds.json'

export class Bar extends Component {

  render() {
  //  let oneBar = BarsData.find(bar =>
  //     bar.name === this.props.match.params.name
  //  )
    return <div><h1>hello</h1>
        {/* <h1>Name: {oneBar.name}</h1> */}
    </div>;
  }
}

export default Bar;

