import React, { useState, useEffect } from "react";
import axios from "axios";
import './HomePage.css';
import Footer from '../footer/Footer';
import TopProducts from './TopProducts.js';

function HomePage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/products')
      .then(response => {
        setProducts(response.data); 

      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); 

  return (
    <div id='homePage'>
        <div className='homePageDescription'>
          <img  id='donutImg' src='donut.png' alt='donut'/>
          <p> 
            <h2>Byte Me</h2>
            <h3>
                is your ultimate destination for a global candy adventure!
                As an online candy store, Byte Me takes sweet tooth cravings to new heights by offering a delectable array of international candies.
                Explore a world of flavor from the comfort of your home, with an amazing
                selection of sweet treats sourced from various corners of the globe. 
            </h3> 
          </p>
        </div>
        <h1 id='topProductsDescrtiption'>Best sellers in our shop</h1>
        <div className='topProducts'>
            {products.map(product => <TopProducts key={`top_${product.id}`} name={product.name} src={`products/${product.photo}`}
                            price={`${product.price}$`}  desc={product.description} />)}
        </div>
        <Footer/>
    </div>
  );
};

export default HomePage;

