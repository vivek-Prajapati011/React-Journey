import React, { useState } from "react";
import Card from "../Component compostion/Card";

const Product = () => {
  const [product, setProduct] = useState([
    { id: 1, name: "Headphones", price: 1999, img: "https://via.placeholder.com/150" },
    { id: 2, name: "Keyboard", price: 899, img: "https://via.placeholder.com/150" },
    { id: 3, name: "Mouse", price: 599, img: "https://via.placeholder.com/150" }
  ]);

 const [cart,setCart] = useState()

 const handleAddToCart = (item) => {
  setCart([...cart, item])

 }

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
    </div>
  );
};

export default Product;
