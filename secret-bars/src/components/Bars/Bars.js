//call api and make a list of all favorite bars. from here can edit
import React, { Component } from 'react'
import OneBar from '../OneBar/OneBar'
import {Link} from 'react-router-dom'

export class Bars extends Component { 
    constructor(props){
        super(props);
        
    
    }

    render() {
        // let list = this.props.listOfBars.map((item,i) => {
        //     return(
        //    <div key={item} index={i}className='barsList'>
        //         <Link to={'/OneBar/' + item.name}>  <h2>{item.name} </h2> </Link>
        //         <OneBar bar={item.name} listOfBars={this.state.listOfBars}/>
        //        </div>
        //     )
        // })
            return (
            <div>
                <h1>View your list of bars below</h1>
                {/* {list} */}
            </div>
        )
    }
    // render() {
    //     let list = Comments.map((item, i) => {
    //         return (
    //             <div key={item} index={i}className='barsList'>
    //              <Link to={'/OneBar/:name/'+item.name}>  <h2>{item.bar} </h2> </Link>
    //             </div>
    //         )    
    //     })
    //         return (
    //         <div>
    //             <h1>View your list of bars below</h1>
    //             {list}
    //         </div>
    //     )
    // }
}

export default Bars
