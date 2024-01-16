// CartPage.js
import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./CartPage.css"

const CartPage = ({ isLoggedIn, setCurrentPage}) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [idUser, setIdUser] = useState('');
  const [idOrder, setIdOrder] = useState('')
  const [total, setTotal] = useState(0)
  const token = localStorage.getItem('token')
  
  useEffect(() => {
    const fetchUserId = async () => {
          try {
            const response1 = await axios.get(`http://localhost:8080/users/getId/${token}`);
            const id = response1.data
            setIdUser(id);
            fetchOrderId(id)
            
          } catch (error) {
            console.error('Error fetching id:', error);
          }
    };

    const fetchOrderId = async (id) => {
      try {
        console.log('idUser',id)
        const response2 = await axios.get(`http://localhost:8080/order/getcurrent/${id}`);
        const ordId = response2.data
        setIdOrder(ordId);
        await showCartProducts(ordId)
        showTotalOrder(ordId)
        console.log('bun');

      } catch (error) {
        console.error('Error fetching id:', error);
      }
    };

    const showCartProducts = async (idOrd) => {
      try {
        const response3 =  await axios.get(`http://localhost:8080/orderitems/getoforder/${idOrd}`)
        console.log(response3.data)
        setCartProducts(response3.data); 

      } catch (error) {
        console.error('Error fetching cart products:', error);
      }
    };

    const showTotalOrder = async (idOrd) => {
      try {
        const response4 =  await axios.get(`http://localhost:8080/order/gettotal/${idOrd}`)
        setTotal(response4.data)

      } catch (error) {
        console.error('Error fetching cart products:', error);
      }
    };

    fetchUserId()
  }, []); 
  
  return (
    <div className='cartPage'>
      {isLoggedIn && (
        <>  
          <h2>Shopping Cart</h2>
          <ul>
            {cartProducts.map((product, index) => (
              <li key={index}>
                <div className='cartItem'>
                  <img className='cartImg' src={`products/${product.a.photo}`} alt="product"/>
                  <div>
                    <p>Product: {product.a.name}</p>
                    <p>Price: {`${product.a.price}$`}</p>
                    <p>Quantity:{` ${product.b}`}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>{`Total: ${total}$`}</h3>
          {/* <button onClick={clearCart}>Clear Cart</button> */}
        </>
      )}
      {!isLoggedIn && setCurrentPage('home')}
    </div>
  );
};

export default CartPage;
