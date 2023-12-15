import React, { useState } from "react";
import Header from "../header/Header";
import HomePage from "../homepage/HomePage";
import Shop from "../shop/Shop";
import MisteryBoxPage from "../misteryBox/MisteryBoxPage";
import ShoppingCart from "../cart/ShoppingCart";
import CartButton from "../cart/CartButton"
import ContactButton from "../contact/ContactButton";

export const page = { home: 'home',  cart: 'cart', shop: 'shop', misteryBox: 'misteryBox', contact: 'contact'};

function Navigation() {
    const [currentPage, setCurrentPage] = useState(page.home);
    const handleCartClick = () => {
        setCurrentPage(page.cart);
        console.log('Current Page:', currentPage);
      };

    return (
        <div>
            <Header setCurrentPage={setCurrentPage} />
            {currentPage === page.home && <HomePage />}
            {currentPage === page.contact && <ContactButton/>}
            {currentPage === page.shop && <Shop/>}
            {currentPage === page.misteryBox && <MisteryBoxPage/>}
            {currentPage === page.cart && <ShoppingCart/>}
        
        </div>
      );
}

export default Navigation;
