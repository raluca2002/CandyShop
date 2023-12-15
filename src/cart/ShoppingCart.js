import React from 'react';
import './ShoppingCart.css';
import { useCart } from './CartContext';
import Footer from '../footer/Footer';

const ShoppingCart = ({ isOpen, onClose }) => {
  const { state } = useCart();
  const { products } = state;

  const total = calculateTotal(products);
  console.log('Products:', products);

  return (
    <div className={`shopping-cart ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="cart-items">
        {products.map((product, index) => (
          <div className="cart-item" key={index}>
            <img src={product.image} alt={product.title} />
            <div className="item-details">
              <p>{product.title}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total: ${total.toFixed(2)}</p>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );

  <Footer/>

};

export default ShoppingCart;

function calculateTotal(products) {
  return products.reduce((total, product) => total + product.price * product.quantity, 0);
}
