import React, {useState} from "react";
import Header from "../header/Header";
import HomePage from "../homepage/HomePage";
import Shop from "../shop/Shop";
import MisteryBox from "../misteryBox/MisteryBox";

export const page = { home: 'home',  shop: 'shop', misteryBox: 'misteryBox' };

function Navigation() {
    const [currentPage, setCurrentPage] = useState(page.home);

    return(
        <div>
            <Header setCurrentPage={setCurrentPage} />
            {currentPage === page.home && <HomePage />}
            {currentPage === page.shop && <Shop />}
            {currentPage === page.misteryBox && <MisteryBox />}
        </div>
        
    );
}

export default Navigation;