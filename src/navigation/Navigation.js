import React, { useState } from "react";
import Header from "../header/Header";
import HomePage from "../homepage/HomePage";
import Shop from "../shop/Shop";
import MisteryBoxPage from "../misteryBox/MisteryBoxPage";
import ShoppingCart from "../cart/ShoppingCart";
import CartButton from "../cart/CartButton"
import ContactButton from "../contact/ContactButton";
import SearchPage from "../search/SearchPage";

export const page = { home: 'home',  cart: 'cart', shop: 'shop', misteryBox: 'misteryBox', contact: 'contact', search: 'search',};

function Navigation() {
    const [currentPage, setCurrentPage] = useState(page.home);
    const handleCartClick = () => {
        setCurrentPage(page.cart);
        console.log('Current Page:', currentPage);
      };
    const [category, setCategory] = useState(0);

    return (
        <div>
            <Header setCurrentPage={setCurrentPage} setCategory={setCategory} />
            {currentPage === page.home && <HomePage />}
            {currentPage === page.contact && <ContactButton/>}
            {currentPage === page.shop && <Shopcategory={category} />}
            {currentPage === page.misteryBox && <MisteryBoxPage/>}
            {currentPage === page.cart && <ShoppingCart/>}
            {currentPage === page.search && <SearchPage />}
        
        </div>
        
      );
}

export default Navigation;
