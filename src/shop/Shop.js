import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductInShop from "./ProductInShop";
import './Shop.css';
import ProductPage from "./ProductPage";
import Footer from "../footer/Footer";

function Shop(props) {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 })
    const [sliderMoved, setSliderMoved] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8081/products')
          .then(response => {
            setProducts(response.data); 

          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
    }, []); 

    const shopFilter = products.filter(product => product.id_category === props.category)
    const categoryPriceFilter = shopFilter.filter(product => product.price >= priceRange.min && product.price <= priceRange.max)
    const allPriceFilter = products.filter(product => product.price >= priceRange.min && product.price <= priceRange.max)

    const handlePriceChange = (event) => {
        setPriceRange({ ...priceRange, [event.target.name]: parseInt(event.target.value) })
        setSliderMoved(true);
    }

    const handleSliderRelease = () => {}

    return(
        <div className='shop'>
            {selectedProduct ? (
                    <ProductPage product={selectedProduct} goBack={() => setSelectedProduct(null)} />
            ) : (
                <>
                    <div className="photoDescription">
                        <h2>SHOP</h2>
                    </div>
                    <div id='shopFilter'>
                        <h4 id='nrProducts'>Showing {shopFilter.length > 0 ? shopFilter.length: products.length} results</h4>
                        <div className="priceRange">
                            <h4 className="range">Price Range: </h4>
                            <input
                                type="range"
                                name="min"
                                value={priceRange.min}
                                min={0}
                                max={100}
                                onChange={handlePriceChange}
                                onMouseUp={handleSliderRelease}
                            />
                            <h4 className="range">{priceRange.min}$ ~ {priceRange.max}$</h4>
                            <input
                                type="range"
                                name="max"
                                value={priceRange.max}
                                min={0}
                                max={100}
                                onChange={handlePriceChange}
                                onMouseUp={handleSliderRelease}
                            />
                        </div>
                    </div>
                    <div className="productList">
                        {shopFilter.length > 0 && sliderMoved === false ? (                            
                            shopFilter.map(product => <ProductInShop  key={product.id}  id={product.id} name={product.name} src={`products/${product.photo}`}
                            price={`${product.price}$`}  onClick={() => setSelectedProduct(product)} />)  
                        ) : shopFilter.length > 0 && sliderMoved === true ? (
                            categoryPriceFilter.map(product => <ProductInShop  key={product.id}  id={product.id} name={product.name} src={`products/${product.photo}`}
                            price={`${product.price}$`}  onClick={() => setSelectedProduct(product)} />)
                        ) : shopFilter.length === 0 && sliderMoved === false ? ( 
                            products.map(product => <ProductInShop  key={product.id}  id={product.id} name={product.name} src={`products/${product.photo}`}
                            price={`${product.price}$`}  onClick={() => setSelectedProduct(product)} />)
                        ) : shopFilter.length === 0 && sliderMoved === true ? ( 
                            allPriceFilter.map(product => <ProductInShop  key={product.id}  id={product.id} name={product.name} src={`products/${product.photo}`}
                            price={`${product.price}$`}  onClick={() => setSelectedProduct(product)} />)
                        ) : ':('}
                    </div>    
                    <Footer/> 
                </>
            )}       
        </div>
    );
}

export default Shop;