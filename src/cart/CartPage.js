// CartPage.js
import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./CartPage.css"
import CreateOrder from './CreateOrder';


const CartPage = ({ isLoggedIn, setCurrentPage}) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [newCartProducts, setNewCartProducts] = useState([]);
  const [idUser, setIdUser] = useState('');
  const [idOrder, setIdOrder] = useState('')
  const [total, setTotal] = useState(0)
  const [showCreateOrder, setShowCreateOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
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
  
  const handlePlaceOrder = async () => {
    try {
      let userConfirmed;
  
      userConfirmed = window.confirm(`Are you sure you want to place the order?`);
      if (userConfirmed) {
        await handleCreateOrder(idUser);
        setTotal(0);
        setOrderPlaced(true);
        setCartProducts([]);
        console.log('Order placed successfully!');
      } else {
        console.log('Order placement canceled by the user.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const handleRemoveProduct = async (id_order, id_product) => {
  try {
        await axios.delete(`http://localhost:8080/orderitems/${id_order}/${id_product}`);
      const response = await axios.get(`http://localhost:8080/orderitems/getoforder/${id_order}`);
      setCartProducts(response.data);

      const totalResponse = await axios.get(`http://localhost:8080/order/gettotal/${id_order}`);
      setTotal(totalResponse.data);

      setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((product) => product.a.id !== id_product)
    );
  } catch (error) {
    console.error('Error removing product:', error);
  }
};

const handleCreateOrder = async (idUser) => {
  const order = {
    id_user: idUser,
    total: 0,
  };
  try {
    const response = await axios.post(`http://localhost:8080/order/addorder`, order);
    console.log(response.status);
  } catch (error) {
    console.error('Error creating order:', error);
  }
};


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
                  <button onClick={() => handleRemoveProduct(idOrder, product.a.id)}>Remove</button>

                  </div>
                </div>
              </li>
              
            ))}
          </ul>
          <h3>{`Total: ${total}$`}</h3>
          {/* <button onClick={clearCart}>Clear Cart</button> */}
          <button className="placeOrderButton" onClick={handlePlaceOrder}>
            Place Order
          </button>
          {showCreateOrder && (
            <CreateOrder cartProducts={cartProducts} setShowCreateOrder={setShowCreateOrder} />
          )}
          {orderPlaced && <p>Order placed successfully!</p>}
        </>
      )}
      {!isLoggedIn && setCurrentPage('home')}
    </div>
  );
};

export default CartPage;
