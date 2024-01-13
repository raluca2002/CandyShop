import React from "react";
import SubHeader from "../subHeader/SubHeader";
import "./Header.css";

function Header(props) {
    return(
        <div id="header">
            <div className="logos">
                <img src="images/logoByteMe.jpeg" className='logoByteMe' alt='logo'/>
                {/* <h2  className="description">Because adulting needs sugar!</h2> */}
            </div>
            <hr className="lineDivider" />
            <SubHeader setCurrentPage={props.setCurrentPage} setCategory={props.setCategory} isLoggedIn={props.isLoggedIn}/>
        </div>
    );
}

export default Header;