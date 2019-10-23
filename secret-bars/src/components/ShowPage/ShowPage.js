//shows a single bar from dashboard when clicked . use routes and links
//has some info on bar and has option to delete

import React, { Component } from "react";
import { useParams } from 'react-router-dom'

export class ShowPage extends Component {
// constructor(props){
//   super(props)

//   this.state=({
//     name: '',
//     url: '',
//     image: '',
//     reviews: '',

//   })
// }

  render() {
  // let { name } = useParams()

  
  // const bar = this.props.listOfbars.find(barName => barName.name === name)
  return <div>
        <h3>Name: {this.props.bar} </h3>
    </div>
  }
}

export default ShowPage;

