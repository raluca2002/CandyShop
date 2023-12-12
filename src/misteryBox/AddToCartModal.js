import React, { useState } from 'react';
import './AddToCartModal.css'; 

const AddToCartModal = ({ onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Apelul funcției de adăugare în coș și închiderea modalului
    onAddToCart(quantity);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Discover the Magic of Sweets!</h3>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={handleAddToCart}>Add to cart</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddToCartModal;
