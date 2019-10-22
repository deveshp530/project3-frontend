//call api and make a list of all favorite bars. from here can edit
import React, { Component } from 'react'
import BarsData from '../../data/BarsData.json'
import {Link} from 'react-router-dom'

export class Bars extends Component { 
    constructor(props){
        super(props);
        
        this.state = BarsData
    }

    render() {
        let list = BarsData.map((item, i) => {
            return (
                <div key={item} index={i}className='barsList'>
                 <Link to={'/OneBar/'+item.name}>  <h2>{item.name} </h2> </Link>
                </div>
            )    
        })
            return (
            <div>
                <h1>View your list of bars below</h1>
                {list}
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
