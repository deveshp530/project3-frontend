import React, { Component } from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import Bars from './components/Bars/Bars'
import OneBar from './components/ShowPage/ShowPage'


export class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     location: "",
  //     listOfBars: []
  //   };
  // }
  
  render() {
    return (
      <div>
        <nav>
          <Link to ='/' >Home</Link>
          <Link to ='/Bars'> Bars </Link> 
          {/* <Link to ='/OneBar'> Bar </Link>  */}
        </nav>
        <main> 
          
        <Switch>
          <Route exact path ='/' component={Home}/>
          
          <Route 
          path ='/:name/'
          render={routerProps => (
            <OneBar
            
            match={routerProps.match}
            />
            )}
            /> 
          
        </Switch>
    
            </main>
      </div>
    )
  }
}

export default App
