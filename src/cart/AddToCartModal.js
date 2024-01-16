import React, { useState, useEffect } from 'react';
import axios from "axios";
import './AddToCartModal.css';

const AddToCartModal = ({ onClose, idProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const [user, setUser] = useState('');
  const [idOrder, setIdOrder] = useState('')
  const token = localStorage.getItem('token')

  useEffect(() => {

    const fetchUserId = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/users/getId/${token}`);
            const id = response.data
            setUser(id);
            fetchOrderId(id)
          } catch (error) {
            console.error('Error fetching id:', error);
          }
    };

    const fetchOrderId = async (user) => {
      try {
        console.log('idUser',user)
        const response = await axios.get(`http://localhost:8080/order/getcurrent/${user}`);
        setIdOrder(response.data);
        console.log('bun');

      } catch (error) {
        console.error('Error fetching id:', error);
      }
    };
    fetchUserId();
  }, []); 

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleAddToCart = async () => {
    const orderItem = {
        id_order: idOrder,
        id_product: idProduct,
        quantity: quantity
    }

    try {
      {console.log('orderItem',orderItem.id_order)}
      const response = await axios.post(`http://localhost:8080/orderitems/addorderitems`, orderItem);
      console.log('orderItem',response.status)  
      onClose();
  
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Discover the Magic of Sweets!</h3>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={handleAddToCart}>Add to cart</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddToCartModal;
