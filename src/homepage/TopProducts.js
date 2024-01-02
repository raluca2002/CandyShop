import React from 'react'

function TopProducts(props) {
    if (props.name === 'Heart-shaped biscuits' || props.name === 'Raspberry flavored biscuits' || props.name === 'Christmas Biscuits') {
        return(
            <div id='product' onClick={props.onClick}>
                <img className='productImg topProductImg' src={props.src} alt="product"/>
                <h3>{props.name}</h3>
                <h4>{props.desc}</h4>
                <h4>{props.price}</h4>
            </div>
        );
    }
}

export default TopProducts;