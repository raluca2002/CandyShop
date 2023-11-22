import React, { useState } from 'react';
import AddToCartModal from './AddToCartModal';

const MisteryBox = ({ title, price, image, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCartClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (quantity) => {
    //de implementat functionalitatea pentru adaugare in cos
    console.log(`Adăugat în coș: ${quantity} x ${title}`);
  };

  return (
    
    <div className="misterybox">
        
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <button onClick={handleAddToCartClick}>Add to cart</button>
      

      {isModalOpen && (
        <AddToCartModal onClose={handleCloseModal} onAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

export default MisteryBox;
