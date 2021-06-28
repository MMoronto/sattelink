import React from 'react'

const Items = () => {
    const [items, setItems] = useState([])

    return(
        <div className="home">
            <div className="header">
                <h1>Sattelink</h1>
                <p>Number One webmarket place for CubeSats</p>
            </div>
            <div className="grid"></div>
        </div>
    )
}

export default Items