import React, { useState, useEffect } from 'react';
import axios from "axios";

const CreateOrder = ({ idUser}) => {
  let total = 0;
  useEffect(() => {
    const handleCreateOrder = async (idUser) => {
      const order = {
        id_user: idUser,
        total: total
      }
      try {
        const response = await axios.post(`http://localhost:8080/order/addorder`, order);
        console.log(response.status)  
      } catch (error) {
        console.error('Error creating order:', error);
      }
    };
    handleCreateOrder(idUser);
  }, []); 

  return (
    <>
    </>
  );
};

export default CreateOrder;