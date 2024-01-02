import React, { useState } from 'react';
import AddToCartModal from '../cart/AddToCartModal';

const MisteryBox = ({ title, price, image, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCartClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleAddToCart = () => {
    console.log(`Adăugat în coș: ${quantity} x ${title}`);
    handleCloseModal();  };

  return (
    
    <div className="misterybox">
        
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <button onClick={handleAddToCartClick}>Add to cart</button>
      

      {isModalOpen && (
        <AddToCartModal 
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
        onQuantityChange={handleQuantityChange}
        quantity={quantity} 
        />
      )}
    </div>
  );
};

export default MisteryBox;
