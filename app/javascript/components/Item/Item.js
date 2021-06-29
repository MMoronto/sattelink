import React from 'react'

const Item = (props) => {
    return(
        <div className="card">
            <div className="item-logo">
                <img src={props.attributes.image_url} alt={props.attributes.name} />
            </div>
            <div className="item-name">{props.attributes.name}</div>
            <div className="item-score">{props.attributes.avg_score}</div>
            <div className="item-link">
                <a href={`/items/${props.attributes.slug}`}>View Item</a>
            </div>
        </div>
    )
}

export default Item