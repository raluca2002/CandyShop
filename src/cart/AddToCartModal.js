import React from 'react';
import './AddToCartModal.css';

const AddToCartModal = ({ onClose, onAddToCart, onQuantityChange, quantity }) => {
  const handleAddToCart = () => {
    onAddToCart();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Discover the Magic of Sweets with MisteryBox!</h3>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={onQuantityChange}
        />
        <button onClick={handleAddToCart}>Add to cart</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddToCartModal;
