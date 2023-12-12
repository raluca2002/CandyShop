import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductInShop from "../shop/ProductInShop";
import ProductPage from "../shop/ProductPage";
import Footer from "../footer/Footer";
import "./SearchPage.css";

function SearchPage() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [inputValue,  setInputValue]  = useState("");

    useEffect(() => {
        axios.get('http://localhost:8080/products')
          .then(response => {
            setProducts(response.data); 

          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
    }, []); 

    const nameFilter = products.filter( product => product.name.includes(inputValue) )

    return(
        <div className='searchPage'>
            {selectedProduct ? (
                    <ProductPage product={selectedProduct} goBack={() => setSelectedProduct(null)} />
            ) : (
                <>
                    <input placeholder="What product are you looking for?" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    { inputValue === "" && <img id='cookieMonsterimg' src='./images/cookieMonster.jpg' alt='cookieMonster'/> }
                    { inputValue !== "" ? (
                        <div className="productList">
                            {   nameFilter.map(product => <ProductInShop  key={product.id}  id={product.id} name={product.name} src={`products/${product.photo}`}
                                price={`${product.price}$`}  onClick={() => setSelectedProduct(product)} />) }
                        </div> ) : ('')
                    }
                    <Footer/> 
                </>
            )}       
        </div>
        
    );
}

export default SearchPage;