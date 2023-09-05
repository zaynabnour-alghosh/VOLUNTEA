import React from "react";
import './style.css';
const MissionCard=()=>{
    return(
        <div className="mis-card-container flex">
            <div className="mis-content flex column flex-start">
                <div className="mis-topic">
                    <h4>Reforestation Revolution</h4>
                </div>
                <div className="mis-desc">
                    <p>
                    CEI aims to restore and protect 100 
                    million acres of deforested land by 2030, 
                    combating climate change and preserving vital ecosystems.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default MissionCard;