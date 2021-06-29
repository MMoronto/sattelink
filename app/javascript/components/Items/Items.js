import React, { useState } from 'react'

const Items = () => {
    const [items, setItems] = useState([])

    return(
        <div className="home">
            <div className="header">
                <h1>Sattelink</h1>
                <p className="subheader">Number One webmarket place for CubeSats</p>
            </div>
            <div className="grid">
                ITEMS GRID GOES HERE
            </div>
        </div>
    )
}

export default Items