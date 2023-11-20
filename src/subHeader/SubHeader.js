import React from 'react';
import Popup from "reactjs-popup";
import CartButton from './CartButton';
import { page } from '../navigation/Navigation';
import './SubHeader.css';
import "reactjs-popup/dist/index.css";

const buttons = [
    { key: "misteryBox", label: "MysteryBox"},
    { key: "contact", label: "Contact"},
];

function SubHeader(props) {


    return(
        <div id='subHeader'>
            <button className="subHeaderButton" onClick={() => props.setCurrentPage(page.home)}>Home</button>
            <Popup trigger={<button className="subHeaderButton">Shop</button>} position="bottom center" arrow={false}>
                <div>
                    <h3>Mai multe OPT</h3>
                    <button onClick={() => props.setCurrentPage(page.shop)}>All</button>
                </div>
            </Popup>
            <button className= "subHeaderButton" onClick={() => props.setCurrentPage(page.misteryBox)}>MysteryBox</button>
            <button className= "subHeaderButton">Contact</button>
            <CartButton/>
        </div>
    );
}

export default SubHeader;