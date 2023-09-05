import React from "react";
import './style.css';
import ImpactCard from "../ImpactCard";

const ImpactSection=()=>{
    return(
        <div className="page impact-page flex column">
            <div className="impacts-header flex center">
                <h1>What We Do</h1>
            </div>
            <div className="impacts flex">
                <div className="impacts-container flex center">
                    <ImpactCard/>
                    <ImpactCard/>
                    <ImpactCard/>
                </div>
            </div>
        </div>
    );
}
export default ImpactSection;