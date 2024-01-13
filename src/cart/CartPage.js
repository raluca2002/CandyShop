// CartPage.js
import React, { useState, useEffect } from 'react';

const CartPage = ({ isLoggedIn }) => {
  // Starea locală pentru a gestiona produsele din coș
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // Aici poți implementa logica pentru a accesa produsele din coș, fie din starea locală, fie dintr-un context global
    // De exemplu, poți utiliza localStorage pentru a stoca produsele în coș între sesiuni.
    const storedCartProducts = localStorage.getItem('cartProducts');
    if (storedCartProducts) {
      setCartProducts(JSON.parse(storedCartProducts));
    }
  }, [cartProducts]);

  // Funcția pentru a șterge toate produsele din coș
  const clearCart = () => {
    setCartProducts([]);
    localStorage.removeItem('cartProducts');
  };

  return (
    <div>
      {isLoggedIn && (
        <>
          <h2>Shopping Cart</h2>
          <ul>
            {cartProducts.map((product, index) => (
              <li key={index}>
                {/* Afișează informații despre fiecare produs din coș */}
                <p>{product.name}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
                {/* Alte informații despre produs, cum ar fi imaginea, descrierea, etc. */}
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
