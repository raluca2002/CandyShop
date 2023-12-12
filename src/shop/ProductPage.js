import React, { useState } from "react";
import AddToCartModal from "../misteryBox/AddToCartModal";

function ProductPage({ product, goBack }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCartClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (quantity) => {
    //de implementat functionalitatea pentru adaugare in cos
  };

  return (
    <div>
      <button className="backButton" onClick={goBack}> go back</button>
      <div id='productPage'>
          <img className='productImg' src={`products/${product.photo}`} alt="product"/>
          <div className="singleProductDescription">
              <h2>{product.name}</h2>
              <h3>{product.description}</h3>
              <h3>Country: {product.country}</h3>
              <h4>Price: {product.price}$</h4>
              <button className="cartButton"  onClick={handleAddToCartClick}>Add to cart</button>
              {isModalOpen && (<AddToCartModal onClose={handleCloseModal} onAddToCart={handleAddToCart} />)}
          </div>     
      </div>
    </div>
  );
}

export default ProductPage;

