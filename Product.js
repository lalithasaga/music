import React from 'react';
import './Product.css';

const Product = ({ title, price, imageUrl }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
