import React, { useState } from "react";
import './style.css';
const Tab=({icon, name, size, isSelected, onToggle })=>{
    const iconStyle = {
        fontSize: size + 'px',
      };  
    return(
        <li
            className={`tab-item ${isSelected? 'selected':''}`}
            onClick={onToggle}      
        >
            <span className={`tab-icon ${isSelected? 'selected':''}`} style={iconStyle}>{icon}</span>
            <span className={`tab-name ${isSelected? 'selected':''}`}>{name}</span>
        </li>
    );
}
export default Tab;