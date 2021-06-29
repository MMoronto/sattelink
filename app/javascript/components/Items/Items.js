import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Items = () => {
    const [items, setItems] = useState([])

    useEffect(()=> {
        // Get all of our items from api
        // Update items in our state

        axios.get('/api/v1/items.json')
        .then( resp => {
            debugger
        })
        .catch( data => {
            debugger
        })
    }, [])

    return(
        <div className="home">
            <div className="header">
                <h1>Sattelink</h1>
                <p className="subheader">Number One webmarket for CubeSats</p>
            </div>
            <div className="grid">
                ITEMS GRID GOES HERE
            </div>
        </div>
    )
}

export default Items