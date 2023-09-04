import React from "react";
import "./style.css";
import logo from '../../assets/logo-primary.svg';
const Logo=()=>{
    return(
        <div className="logo-container">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </div>

        
    );
}
export default Logo;