import React from "react";
import SubHeader from "../subHeader/SubHeader";
import "./Header.css";

function Header() {
    return(
        <div id="header">
            <img src="images/logoByteMe.jpeg" className='logoByteMe' alt='logo'/>
            <hr className="lineDivider" />
            <SubHeader/>
        </div>
    );
}

export default Header;