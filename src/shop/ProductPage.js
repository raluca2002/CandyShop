import React from "react";

function ProductPage({ product, goBack }) {
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
                <button className="cartButton" >Add to cart</button>
            </div>     
        </div>
      </div>
    );
}

export default ProductPage;

