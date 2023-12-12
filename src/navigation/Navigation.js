import React, {useState} from "react";
import Header from "../header/Header";
import HomePage from "../homepage/HomePage";
import Shop from "../shop/Shop";
import MisteryBoxPage from "../misteryBox/MisteryBoxPage";

export const page = { home: 'home',  shop: 'shop', misteryBox: 'misteryBox' };

function Navigation() {
    const [currentPage, setCurrentPage] = useState(page.home);
    const [category, setCategory] = useState(0);

    return(
        <div>
            <Header setCurrentPage={setCurrentPage} setCategory={setCategory} />
            {currentPage === page.home && <HomePage />}
            {currentPage === page.shop && <Shop category={category}/>}
            {currentPage === page.misteryBox && <MisteryBoxPage />}
        </div>
        
    );
}

export default Navigation;