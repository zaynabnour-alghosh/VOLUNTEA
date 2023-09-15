import React from "react";
import './style.css';
const Item=({label,value})=>{
    return(
    <div class="item-grid-container">
       { label &&<div class="grid-item item-label">{label}</div>}
       {value && <div class="grid-item item-name">{value}</div>}
    </div>
    );
}
export default Item;