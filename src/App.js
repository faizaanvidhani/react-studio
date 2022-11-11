import React from 'react';
import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import BakeryCart from "./components/BakeryCart";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    let newCart = [...cart]
    const itemIndex = cart.findIndex(e => e.name === item.name);
    if (itemIndex !== -1) {
      // update count of existing item
      newCart[itemIndex].count++;
    } else {
      // add item to cart with count=1
      newCart = ([...cart, {key: item, name: item.name, count: 1}]);
    }
    setCart(newCart); // update cart
    setTotal(total + item.price); // update total
  }
  
  return (
    
    <div className="App">

      <div>
        <h1>Faizaan's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <div className="BakeryList">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem addToCart={addToCart} key={index} image={item.image} name={item.name} description={item.description} price={item.price}/>
            // <BakeryItem {...item}/>
          ))}
      </div>

        <div>
          <h2>Cart</h2>
          <BakeryCart cartList={cart}/>
          <h2>Total: ${total.toFixed(2)}</h2>
        </div>
      </div>

    </div>
  );
}

export default App;
