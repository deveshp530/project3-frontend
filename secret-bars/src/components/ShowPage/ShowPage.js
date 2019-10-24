//shows a single bar from dashboard when clicked . use routes and links
//has some info on bar and has option to delete

import React, { Component } from "react";
//import { useParams } from 'react-router-dom'

export class ShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        comment: ''
    };
  }

  // createComment =() =>{
  //   let newComment = {
  //     bar: this.state.listOfBars.businesses.name
  //     text: 
  //   }
  //   let url = `https://secret-bars.herokuapp.com/comments/new`
  // }

  // deleteComment = (commentId) => {
  //   fetch(`https://secret-bars.herokuapp.com/comments/${commentId}`, {
  //     method: 'DELETE'
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }
  handleComment = event => {
   this.setState({comment: event.target.value})
     
  }

  

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
        <img src={bar.image_url} alt={bar.name} />

        <div className="userShowPage">
          {this.props.email !== null ? (
            <div>
              <p>{this.props.email}</p>
              <input
                onChange={this.handleComment}
                type="text" 
                placeholder="enter a comment" 
              />
              <button type="submit" onClick={this.props.createComment}>Submit</button>
            </div>
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
