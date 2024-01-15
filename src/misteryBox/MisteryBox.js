import React, { useState } from 'react';
import AddToCartModal from '../cart/AddToCartModal';

const MisteryBox = ({ title, price, image, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCartClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="misterybox">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <button onClick={handleAddToCartClick}>Add to cart</button>
      {isModalOpen && (
        <AddToCartModal onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default MisteryBox;
