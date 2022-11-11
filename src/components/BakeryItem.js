// TODO: create a component that displays a single bakery item
import "../BakeryItem.css";

import React from 'react';

export default function BakeryItem(props) {
    const addItem = () => {
        props.addToCart({key: props.name, name: props.name, price: props.price})
    }
    return (
        <div className="BakeryItem">
            <img className="BakeryItemImage" src={props.image} alt={props.name}/>
            <div className="BakeryItemContent">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>${props.price}</p>
                <button className="BakeryButton" onClick={addItem}>Add to Cart</button>
            </div>
        </div>
    )
}
