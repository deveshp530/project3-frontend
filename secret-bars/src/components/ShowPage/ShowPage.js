//shows a single bar from dashboard when clicked . use routes and links
//has some info on bar and has option to delete

import React, { Component } from "react";
//import { useParams } from 'react-router-dom'
import "./ShowPage.css";

export class ShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ""
    };
  }

  handleComment = event => {
    this.setState({ comment: event.target.value });
  };
  handleEdit = event => {
    console.log(this.state.commentForUpdate);
    this.setState({
      commentForUpdate: {
        bar: this.state.commentForUpdate.bar,
        text: event.target.value,
        user: this.state.commentForUpdate.user,
        __v: this.state.commentForUpdate.__v,
        _id: this.state.commentForUpdate._id
      }
    });
  };

  createComment = () => {
    if(this.state.comment !== ""){
      let newComment = {
        
        bar: this.props.match.params.name,
        text: this.state.comment,
        user: this.props.currentUser._id
      };
      console.log(newComment)
      let url = `https://secret-bars.herokuapp.com/comments/${newComment.user}`;
      fetch(url, {
        body: JSON.stringify(newComment),
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      }).then(createdComment =>{
        console.log(createdComment)
        return createdComment.json()
      }).then(thisComment =>{
        this.props.currentUser.comments.push(thisComment)
        console.log(thisComment)
        console.log(this.props.currentUser)
      })
    }
    };

  setPlaceholder = event => {
    console.log(event.target.placeholder);
    this.setState({ placeHolder: event.target.placeholder }, () => {
      let updateId = this.props.listOfComments.find(
        comments => comments.text === this.state.placeHolder
      );
      this.setState({ commentForUpdate: updateId });
    });
  };

  updateComment = () => {
    let url = `https://secret-bars.herokuapp.com/comments/${this.state.commentForUpdate._id}`;
    fetch(url, {
      body: JSON.stringify(this.state.commentForUpdate),
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(thisNewComment => {
      //this.props.currentUser.comments.push(thisComment)
      console.log(thisNewComment);
      console.log(this.props.currentUser);
    });
  };
  deleteComment = () => {
    fetch(
      `https://secret-bars.herokuapp.com/comments/${this.state.commentForUpdate._id}`,
      {
        body: JSON.stringify(this.state.commentForUpdate),
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      }
    ).catch(err => {
      console.log(err);
    });
  };

  showCommentModal = () => {
    let commentModal = document.getElementsByClassName("commentModal");
    commentModal[0].style.display = "block";
  };
  closeCommentModal = () => {
    let commentModal = document.getElementsByClassName("commentModal");
    commentModal[0].style.display = "none";
  };

  closeEditModal = () => {
    let editCommentModal = document.getElementsByClassName("editCommentModal");
    editCommentModal[0].style.display = "none";
  };
  showEditModal = () => {
    let editCommentModal = document.getElementsByClassName("editCommentModal");
    editCommentModal[0].style.display = "block";
  };

  render() {
    const bar = this.props.listOfBars.find(
      barName => barName.name === this.props.match.params.name
    );

    let comments = this.props.listOfComments.filter(
      comment => comment.bar === this.props.match.params.name
    );
    console.log(comments);
    let showComments = comments.map(item => {
      console.log(item.user);
      return (
        <div className="comment">
          <h4> {item.user}</h4>
          <p> {item.text}</p>
          {item.user[0] === this.props.currentUser._id ? (
            <div>
              <button onClick={this.showEditModal}>Edit Comment</button>

              <div className="editCommentModal">
                <div className="editCommentModalContainer">
                  <input
                    className="editInput"
                    type="text"
                    placeholder={item.text}
                    onChange={this.handleEdit}
                    onClick={this.setPlaceholder}
                  />
                  <button
                    onClick={() => {
                      this.updateComment();
                      this.closeEditModal();
                    }}
                    type="Submit"
                  >
                    {" "}
                    Submit{" "}
                  </button>
                  <button
                    onClick={() => {
                      this.deleteComment();
                      this.closeEditModal();
                    }}
                  >
                    Delete Comment
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      );
    });
    return (
      <div>
        <h1>Name: {bar.name} </h1>
        <h3>Phone number: {bar.display_phone}</h3>
        <h2>Number of reviews: {bar.review_count}</h2>
        <a href={bar.url}>Yelp Link</a>
        <img src={bar.image_url} alt={bar.name} />

        <div className="userShowPage">
          {this.props.email !== "" ? (
            <div>
              <h4> Comments </h4>
              <div>{showComments}</div>
              <p>{this.props.email}</p>
              <button onClick={this.showCommentModal}> New Comment</button>
              <div className="commentModal">
                <div className="commentModalContainer">
                  <input
                    onChange={this.handleComment}
                    type="text"
                    placeholder="enter a comment"
                  />
                  <button
                    onClick={() => {
                      this.createComment();
                      this.closeCommentModal();
                    }}
                    type="Submit"
                  >
                    {" "}
                    Submit{" "}
                  </button>
                </div>
              </div>
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
