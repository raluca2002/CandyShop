import React from "react";
import SubHeader from "../subHeader/SubHeader";
import "./Header.css";

function Header(props) {
    return(
        <div id="header">
            <img src="images/logoByteMe.jpeg" className='logoByteMe' alt='logo'/>
            <hr className="lineDivider" />
            <SubHeader setCurrentPage={props.setCurrentPage} setCategory={props.setCategory} />
        </div>
    );
}

export default Header;