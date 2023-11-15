import React from 'react';
import Popup from "reactjs-popup";
import ShopOption from './ShopOption';
import CartButton from './CartButton';
import './SubHeader.css';
import "reactjs-popup/dist/index.css";

const buttons = [
    { key: "misteryBox", label: "MysteryBox"},
    { key: "contact", label: "Contact"},
    { key: "home", label: "Home"}
];

function SubHeader() {
    return(
        <div id='subHeader'>
            <Popup trigger={<button className='subHeaderButton'>Shop</button>} position="bottom center" arrow={false}>
                <div>Mai multe OPT</div>
            </Popup>
            {buttons.map( button  => (<ShopOption label={button.label} />))}
            <CartButton/>
        </div>
    );
}

export default SubHeader;