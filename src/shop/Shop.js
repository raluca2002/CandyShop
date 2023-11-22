import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductInShop from "./ProductInShop";
import './Shop.css';
import ProductPage from "./ProductPage";
import Footer from "../footer/Footer";

function Shop() {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/products')
          .then(response => {
            setProducts(response.data); 

          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
    }, []); 

    return(
        <div id='shop'>
            {selectedProduct ? (
                    <ProductPage product={selectedProduct} goBack={() => setSelectedProduct(null)} />
            ) : (
                <>
                    <div className="photoDescription">
                        <h2>SHOP</h2>
                    </div>
                    <h4 id='nrProducts'>Showing {products.length} results</h4>
                    <div className="productList">
                        {products.map(product => <ProductInShop id={product.id} name={product.name} src={`products/${product.photo}`}
                            price={`${product.price}$`}  onClick={() => setSelectedProduct(product)}/>)} 
                    </div>    
                </>
            )}
        <Footer/>        
        </div>
    );
}

export default Shop;