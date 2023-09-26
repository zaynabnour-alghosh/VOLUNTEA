import React from "react";
import './style.css';
import MissionCard from "../MissionCard";
const MissionSection=({data})=>{
    return(
        <div className="page mission-page flex column">
        <div className="missions-header flex center">
            <h1>How We Do it</h1>
        </div>
        <div className="missions flex center">
            <div className="missions-container grid-container">
            {data.map((mission, index) => (
            <div key={index}>
                <MissionCard className="grid-item" mission={mission} />
            </div>
            ))}
            </div>
        </div>
    </div>
    );
}
export default MissionSection;