import React from "react";
import './style.css';
const MissionCard=({mission})=>{
    const {header,description}=mission;
    return(
        <div className="mis-card-container flex">
            <div className="mis-content flex column flex-start">
                <div className="mis-topic">
                    <h4>{header}</h4>
                </div>
                <div className="mis-desc">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
export default MissionCard;