import React, { useState } from "react";
import './style.css';
const Tab=({icon, name, size, isSelected, onTabClick })=>{
    const iconStyle = {
        fontSize: size + 'px',
      };  
    const handleClick = () => {
    onTabClick(name); 
    };
    return(
        <li
            className={`tab-item ${isSelected? 'selected':''}`}
            onClick={handleClick}      
        >
            <span className={`tab-icon ${isSelected? 'selected':''}`} style={iconStyle}>{icon}</span>
            <span className={`tab-name ${isSelected? 'selected':''}`}>{name}</span>
        </li>
    );
}
export default Tab;