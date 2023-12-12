import React from 'react';
import Popup from "reactjs-popup";
import CartButton from './CartButton';
import { page } from '../navigation/Navigation';
import './SubHeader.css';
import "reactjs-popup/dist/index.css";

const buttons = [
    { key: "misteryBox", label: "MysteryBoxPage"},
    { key: "contact", label: "Contact"},
];

const categories = [
    {key: 'Candy & Sweets', label: 0},
    {key: 'Cookies', label: 1},
    {key: 'Chocolate', label: 2},
    {key: 'Gummies', label: 3},
    {key: 'Lollipops', label: 4}
];

function SubHeader(props) {

    return(
        <div id='subHeader'>
            <button className="subHeaderButton" onClick={() => props.setCurrentPage(page.home)}>Home</button>
            <Popup trigger={<button className="subHeaderButton">Shop</button>} position="bottom center" arrow={false}>
                <div>
                    {categories.map(eachCategory => <button className="subHeaderButton" onClick={() => {props.setCurrentPage(page.shop); props.setCategory(eachCategory.label);}}>{eachCategory.key}</button>)}
                </div>
            </Popup>
            <button className= "subHeaderButton" onClick={() => props.setCurrentPage(page.misteryBox)}>MysteryBox</button>
            <button className= "subHeaderButton">Contact</button>
            <CartButton/>
        </div>
    );
}

export default SubHeader;