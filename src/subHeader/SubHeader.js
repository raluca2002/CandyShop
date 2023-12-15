import React from 'react';
import Popup from "reactjs-popup";
import { page } from '../navigation/Navigation';
import './SubHeader.css';
import "reactjs-popup/dist/index.css";

const buttons = [
  { key: "misteryBox", label: "MysteryBoxPage"},
  { key: "contact", label: "Contact"},
];

function SubHeader(props) {
    

  return(
    <div id='subHeader'>
      <button className="subHeaderButton" onClick={() => props.setCurrentPage(page.home)}>Home</button>
      <Popup trigger={<button className="subHeaderButton">Shop</button>} position="bottom center" arrow={false}>
        <div>
          <button className="subHeaderButton" onClick={() => props.setCurrentPage(page.shop)}>Candy & Sweets</button>
          <button className="subHeaderButton" onClick={() => props.setCurrentPage(page.shop)}>Gummies</button>
          <button className="subHeaderButton" onClick={() => props.setCurrentPage(page.shop)}>Lollipops</button>
          <button className="subHeaderButton" onClick={() => props.setCurrentPage(page.shop)}>Chocolate</button>
          <button className="subHeaderButton" onClick={() => props.setCurrentPage(page.shop)}>Cookies</button>
        </div>
      </Popup>
      <button className= "subHeaderButton" onClick={() => props.setCurrentPage(page.misteryBox)}>MysteryBox</button>
      <button className= "subHeaderButton" onClick={() => props.setCurrentPage(page.contact)}>Contact</button>
      <button className= "subHeaderButton" onClick={() => props.setCurrentPage(page.cart)}>🛒</button>
          </div>
  );
}

export default SubHeader;
