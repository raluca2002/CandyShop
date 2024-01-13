import React, { useState } from "react";
import Header from "../header/Header";
import HomePage from "../homepage/HomePage";
import Shop from "../shop/Shop";
import MisteryBoxPage from "../misteryBox/MisteryBoxPage";
import ContactButton from "../contact/ContactButton";
import SearchPage from "../search/SearchPage";
import CartPage from '../cart/CartPage';

export const page = { home: 'home',  cart: 'cart', shop: 'shop', misteryBox: 'misteryBox', contact: 'contact', search: 'search',};

function Navigation({ isLoggedIn }) {
    const [currentPage, setCurrentPage] = useState(page.home);

    const [category, setCategory] = useState(0);

    return (
        <div>
            <Header setCurrentPage={setCurrentPage} setCategory={setCategory} isLoggedIn={isLoggedIn} />
            {currentPage === page.home && <HomePage />}
            {currentPage === page.contact && <ContactButton/>}
            {currentPage === page.shop && <Shop category={category} />}
            {currentPage === page.misteryBox && <MisteryBoxPage/>}
            {currentPage === page.search && <SearchPage />}
            {currentPage === page.cart && <CartPage isLoggedIn={isLoggedIn} setCurrentPage={setCurrentPage}/>}
        
        </div>
        
      );
}

export default Navigation;
