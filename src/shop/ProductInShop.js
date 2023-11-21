import React from "react";

function ProductInShop(props) {

    return(
        <div id='product' onClick={props.onClick}>
            <img className='productImg' src={props.src} alt="product"/>
            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
        </div>
    );
}

export default ProductInShop;

