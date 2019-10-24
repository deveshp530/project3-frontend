import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
//import Bars from './components/Bars/Bars'
import ShowPage from "./components/ShowPage/ShowPage";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      listOfBars: [],
      username: "",
      email: "",
      currentUser: null,
      comment: ""
    };
  }

  //fetch api
  getBars = getLocation => {
    //get bars by getLocation

    let url = `https://secret-bars.herokuapp.com/yelps/${getLocation.location}`; //showing bars from previous search
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res.businesses);
        //update state to have new list
        this.setState({ listOfBars: res.businesses });
      });
  };
  //fetch backend API and create User
  createUser = () => {
    let newUser = {
      username: this.state.username,
      email: this.state.email
    };
    console.log(newUser);
    let url = `https://secret-bars.herokuapp.com/visitors/new`;
    fetch(url, {
      body: JSON.stringify(newUser),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(createdUser => {
        return createdUser.json();
      })
      .then(body => {
        this.setState({ currentUser: body });
      });
  };
  //fetch backend API for existing User
  getUser = () => {
    let userEmail = this.state.email;
    let url = `https://secret-bars.herokuapp.com/visitors/${userEmail}`;

    fetch(url)
      .then(info => {
        console.log(info);
        return info.json();
      })
      .then(userInfo => {
        this.setState({ currentUser: userInfo });
      });
  };

  createComment = () => {
    let newComment = {
      userId: this.props.currentUser,
      bar: this.props.match.params.name,
      text: this.state.comment
    };
    let url = `https://secret-bars.herokuapp.com/comments/new`;
    fetch(url, {
      body: JSON.stringify(newComment),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(createdComment =>{
      return createdComment.json()
    }).then(thisComment =>{
      this.props.currentUser.comments.push(thisComment)
    })
  };

  // deleteComment = () => {
  //   fetch(`https://secret-bars.herokuapp.com/comments/${commentId}`, {
  //     method: 'DELETE'
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  setLocation = location => {
    console.log(location);
    // this.setState({ location: location });
    if (location) {
      this.getBars(location);
    }
  };

  showNewUserModal = event => {
    let newModal = document.getElementsByClassName("newUserModal");
    newModal[0].style.display = "block";
    console.log(newModal);
  };
  closeNewModal = event => {
    let newModal = document.getElementsByClassName("newUserModal");
    newModal[0].style.display = "none";
    console.log(newModal);
  };

  handleNewUsername = event => {
    this.setState({ username: event.target.value });
  };
  handleNewUserEmail = event => {
    this.setState({ email: event.target.value });
  };
  showUserModal = event => {
    let userModal = document.getElementsByClassName("userModal");
    userModal[0].style.display = "block";
    console.log(userModal);
  };
  closeModal = event => {
    let userModal = document.getElementsByClassName("userModal");
    userModal[0].style.display = "none";
    console.log(userModal);
  };

  handleUserInput = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Bars"> Bars </Link>

          {/* <Link to ='/OneBar'> Bar </Link>  */}
        </nav>

        <button onClick={this.showNewUserModal}>New User? </button>
        <div className="newUserModal modal">
          <div className="newUserModal-container">
            <input
              onChange={this.handleNewUsername}
              type="text"
              placeholder="enter your username"
            />
            <input
              onChange={this.handleNewUserEmail}
              type="text"
              placeholder="enter your email"
            />
            <button
              onClick={() => {
                this.createUser();
                this.closeNewModal();
              }}
              type="Submit"
            >
              Submit
            </button>
          </div>
        </div>
        <button onClick={this.showUserModal}>Existing User?</button>
        <div className="userModal modal">
          <div className="userModal-container">
            <input
              onChange={this.handleUserInput}
              type="text"
              placeholder="enter your email"
            />
            <button
              onClick={() => {
                this.getUser();
                this.closeModal();
              }}
              type="Submit"
            >
              Submit
            </button>
          </div>
        </div>

        <main>
          <Switch>
            <Route
              exact
              path="/"
              //  component={Home}
              render={props => (
                <Home
                  {...props}
                  listOfBars={this.state.listOfBars}
                  user={this.state.user}
                  setLocation={this.setLocation}
                />
              )}
            />

            <Route
              path="/:name/"
              render={routerProps => (
                <ShowPage
                  match={routerProps.match}
                  listOfBars={this.state.listOfBars}
                  email={this.state.email}
                  currentUser={this.state.currentUser}
                  createComment={this.createComment}
                  comment={this.state.comment}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
