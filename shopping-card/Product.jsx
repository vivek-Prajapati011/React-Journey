import React, { useState } from "react";
import Card from "../Component compostion/Card";

const Product = () => {
  const [product, setProduct] = useState([
    { id: 1, name: "Headphones", price: 1999, img: "https://via.placeholder.com/150" },
    { id: 2, name: "Keyboard", price: 899, img: "https://via.placeholder.com/150" },
    { id: 3, name: "Mouse", price: 599, img: "https://via.placeholder.com/150" }
  ]);

  return (
    <div>
      {product.map((item) => (
        <li key={item.id}>
          <Card name={item.name} price={item.price} img={item.img} />
        </li>
      ))}
    </div>
  );
};

export default Product;
