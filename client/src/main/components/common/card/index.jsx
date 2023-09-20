import React from "react";
import './style.css';
const Card=({image,src,desc,title,dateState,date,onClick})=>{
    if (onClick){
        onClick();
    }
    return(
        <div className="basecard-container flex column" onClick={handleClick}>
            {image && (
                <div className="basecard-header">
                    <img src={src} alt="impact" />
                </div>
            )}
            <div className="basecard-content flex column center">
                <div className="basecard-topic">
                <h4>{title}</h4>
                </div>
                <div className="basecard-desc">
                    <p>{desc}</p>
                    {dateState && (
                    <div className="flex">Date:{date}</div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Card;