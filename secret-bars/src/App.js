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
      email:"",
      currentUser: null
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

  createUser = () => {
   
    let newUser = {
      username: this.state.username,
      email: this.state.email
    }
    console.log(newUser)
    let url = `https://secret-bars.herokuapp.com/visitors/new`
    fetch(url, {
      body: JSON.stringify(newUser),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then((createdUser) => {
      return createdUser.json()
    })
    .then((body) => {
      this.setState({ currentUser: body})
    })
  }

  setLocation = location => {
    console.log(location);
    // this.setState({ location: location });
    if (location) {
      this.getBars(location);
    }
  };

  showNewUserModal = (event) => {
    let newModal = document.getElementsByClassName("newUserModal")
    newModal[0].style.display = "block";
  console.log(newModal)
  }
  closeNewModal = (event) => {
    let newModal = document.getElementsByClassName("newUserModal")
   newModal[0].style.display= "none";
   console.log(newModal)
  }
  
  handleNewUsername = event => {
    this.setState({username: event.target.value})
  }
  handleNewUserEmail = event => {
    this.setState({email: event.target.value})
    
  }
  showUserModal = (event) => {
    let userModal = document.getElementsByClassName("userModal")
   userModal[0].style.display = "block";
   console.log(userModal)
  }
  closeModal = (event) => {
    let userModal = document.getElementsByClassName("userModal")
    userModal[0].style.display= "none";
    console.log(userModal)
  }
  
  handleUserInput = event => {
    this.setState({email: event.target.value})
  }
  // deleteComment = (commentId) => {
  //   fetch(`https://secret-bars.herokuapp.com/comments/${commentId}`, {
  //     method: 'DELETE'
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Bars"> Bars </Link>
          
          {/* <Link to ='/OneBar'> Bar </Link>  */}
        </nav>
      
          <button onClick={this.showNewUserModal}>New User? </button>
          <div className="newUserModal modal" >
          <div className="newUserModal-container">
            <input onChange={this.handleNewUsername}
              type="text"
              placeholder="enter your username"
              />
               <input onChange={this.handleNewUserEmail}
              type="text"
              placeholder="enter your email"
              />
              <button onClick={() => {
                this.createUser()
                this.closeNewModal()
              }}
              type="Submit">Submit</button>
          </div>
        </div>
        <button onClick={this.showUserModal}>Existing User?</button>
          <div className="userModal modal" >
          <div className="userModal-container">
            <input onChange={this.handleUserInput}
              type="text"
              placeholder="enter your email"
              />
              <button onClick={() => {
                console.log('hello')
                this.closeModal()
              }}
              type="Submit">Submit</button>
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
