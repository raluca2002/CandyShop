// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = { products: [] };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { ...state, products: [...state.products, action.payload] };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
