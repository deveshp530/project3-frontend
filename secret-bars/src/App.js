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
      user: null
    };
  }

  //fetch api
  getBars = location => {
    //get bars by location
    console.log(location);
    let url = `https://secret-bars.herokuapp.com/yelps/${location.location}`; //showing bars from previous search
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        console.log(res.businesses);
        //update state to have new list
        this.setState({ listOfBars: res.businesses });
      });
    console.log(this.state.listOfBars);
  };

  setLocation = location => {
    console.log(location);
    // this.setState({ location: location });
    if (location) {
      this.getBars(location);
    }
  };

  componentDidMount() {
    //this.getBars()
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Bars"> Bars </Link>
          {/* <Link to ='/OneBar'> Bar </Link>  */}
        </nav>
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
