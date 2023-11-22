import React, {useState} from "react";
import Header from "../header/Header";
import HomePage from "../homepage/HomePage";
import Shop from "../shop/Shop";
import MisteryBoxPage from "../misteryBox/MisteryBoxPage";

export const page = { home: 'home',  shop: 'shop', misteryBox: 'misteryBox' };

function Navigation() {
    const [currentPage, setCurrentPage] = useState(page.home);

    return(
        <div>
            <Header setCurrentPage={setCurrentPage} />
            {currentPage === page.home && <HomePage />}
            {currentPage === page.shop && <Shop />}
            {currentPage === page.misteryBox && <MisteryBoxPage />}
        </div>
        
    );
}

export default Navigation;