import React, { useState } from "react";
import Card from "../Component compostion/Card";

const Product = () => {
  const [product, setProduct] = useState([
    { id: 1, name: "Headphones", price: 1999, img: "https://via.placeholder.com/150" },
    { id: 2, name: "Keyboard", price: 899, img: "https://via.placeholder.com/150" },
    { id: 3, name: "Mouse", price: 599, img: "https://via.placeholder.com/150" }
  ]);

 const [cart,setCart] = useState()

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

 

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Products</h1>
      {product.map((item) => (
        <li key={item.id}>
          <Card 
             key={item.id}
             name={item.name} 
             price={item.price} 
             img={item.img}
             onAddToCart={() => handleAddToCart(item)}
          />
         
        </li>
      ))}

      <h2>Cart Items:</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <p key={index}>{item.name} - ₹{item.price}</p>
        ))
      )}
    </div>
  );
};

export default Product;
