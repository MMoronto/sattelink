import React, { useState, useEffect } from 'react'

const Items = () => {
    const [items, setItems] = useState([])

    useEffect(()=> {
        // Get all of our items from api
        // Update items in our state
    })

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