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
      comment: "",
      commentUpdate: "",
      placeHolder: "",
      listOfComments: [],
      listOfUsers: []
    };
  }
  //fetch api
  getBars = getLocation => {
    //get bars by location
    let url = `https://secret-bars.herokuapp.com/yelps/${getLocation.location}`; //showing bars from previous search
    fetch(url)
      .then(res => res.json())
      .then(res => {
        //update state to have new list
        this.setState({ listOfBars: res.businesses });
      });
  };
  setLocation = location => {
    if (location) {
      this.getBars(location);
    }
  };
  //fetch backend API and create User
  createUser = () => {
    if(this.state.username && this.state.email !==""){
    let newUser = {
      username: this.state.username,
      email: this.state.email
    };
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
    }
  };
  //fetch backend API for existing User
  getUser = () => {
    let userEmail = this.state.email;
    let url = `https://secret-bars.herokuapp.com/visitors/${userEmail}`;
    fetch(url)
      .then(info => {
        return info.json();
      })
      .then(userInfo => {
        this.setState({ currentUser: userInfo });
      });
  };
<<<<<<< HEAD

  //get all comments from backend
=======
>>>>>>> 096ca4eb98a078cc996d3ee6b0de4c1e50a2b414
  getAllComments = () => {
    let url = "https://secret-bars.herokuapp.com/comments/all-comments";
    fetch(url)
      .then(info => {
<<<<<<< HEAD
=======
        console.log(info);
        return info.json();
>>>>>>> 096ca4eb98a078cc996d3ee6b0de4c1e50a2b414
      })
      .then(allComments => {
        this.setState({ listOfComments: allComments });
      });
  };
<<<<<<< HEAD

    //get all users from backend. used to display users who commented on bars
=======
>>>>>>> 096ca4eb98a078cc996d3ee6b0de4c1e50a2b414
  getAllUsers = () => {
    let url = "https://secret-bars.herokuapp.com/visitors/all-visitors";
    fetch(url)
      .then(info => {
<<<<<<< HEAD
=======
        console.log(info);
>>>>>>> 096ca4eb98a078cc996d3ee6b0de4c1e50a2b414
        return info.json();
      })
      .then(allUsers => {
        this.setState({ listOfUsers: allUsers });
      });
  };
<<<<<<< HEAD

=======
>>>>>>> 096ca4eb98a078cc996d3ee6b0de4c1e50a2b414
  showNewUserModal = event => {
    let newModal = document.getElementsByClassName("newUserModal");
    newModal[0].style.display = "block";
  };
  closeNewModal = event => {
    let newModal = document.getElementsByClassName("newUserModal");
    newModal[0].style.display = "none";
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
  };
  closeUserModal = event => {
    let userModal = document.getElementsByClassName("userModal");
    userModal[0].style.display = "none";
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
                this.getAllComments();
                this.getAllUsers();
                this.closeUserModal();
              }}
              type="Submit"
            >
              Submit
            </button>
          </div>
        </div>
​
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
​
            <Route
              path="/:name/"
              render={routerProps => (
                <ShowPage
                  match={routerProps.match}
                  listOfBars={this.state.listOfBars}
                  email={this.state.email}
                  currentUser={this.state.currentUser}
                  listOfUsers={this.state.listOfUsers}
                  listOfComments={this.state.listOfComments}
                  comment={this.state.comment}
                  commentUpdate={this.state.commentUpdate}
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