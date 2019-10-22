import React, { Component } from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import Bars from './components/Bars/Bars'
import OneBar from './components/OneBar/OneBar'


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      listOfBars: []
    };
  }
  
  render() {
    return (
      <div>
        <nav>
          <Link to ='/' >Home</Link>
          <Link to ='/Bars'> Bars </Link> 
          {/* <Link to ='/OneBar'> Bar </Link>  */}
        </nav>
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route path ='/myList' component ={Bars}/>
          <Route path ='/Bars/' component ={Bars}/>
          <Route 
          path ='/OneBar/:name'
          render={routerProps => (
            <OneBar
            match={routerProps.match}
            />
          )}
          /> 
          
        </Switch>
    
      </div>
    )
  }
}

export default App
