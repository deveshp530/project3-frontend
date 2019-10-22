//call api and make a list of all favorite bars. from here can edit

import React, { Component } from 'react'
import BarsData from '../../data/BarsSeeds.json'
import {Link} from 'react-router-dom'

// const yelp = require('yelp-fusion');
// const client = yelp.client(`iyEkKM7x92L8Mib8tCO0wRP8hUbwpc4xbAlyF_slEjQjcvc01lK0ytRA6VI81ogvn8aTuwIV7TMxTN_c7G48BAXQVOEZ5MCBd6PqNgGq5uq9P6jd3sQ7SHwU0vysXXYx`)



export class Bars extends Component { 
    constructor(props){
        super(props);
    }

    render() {
        let list = BarsData.map((item, i) => {
            return (
                <div key={item} index={i}className='barsList'>
                 <Link to={'/OneBar/:name/'+item.location}>  <h2>{item.name} </h2> </Link>
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
}

export default Bars
