import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Item from './Item'

const Items = () => {
    const [items, setItems] = useState([])

    useEffect(()=> {
        // Get all of our items from api
        // Update items in our state

        axios.get('/api/v1/items.json')
        .then( resp => {
            setItems(resp.data.data)
        })
        .catch( resp => console.log(resp) )
    }, [items.length])

    const grid = items.map( item => {
        return (
            <Item 
                key={item.attributes.name}
                attributes={item.attributes}
            />
        )
    })

    return(
        <div className="home">
            <div className="header">
                <h1>Sattelink</h1>
                <p className="subheader">Online marketplace for CubeSats</p>
            </div>
            <div className="grid">
                <ul>{grid}</ul>
            </div>
        </div>
    )
}

export default Items