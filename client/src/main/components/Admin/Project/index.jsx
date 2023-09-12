import React from "react";
import './style.css';
import OpportunityCard from "../../ui/OpportunityCard";
const Project=()=>{
    return(
        <div className="opp-container flex column gap-40">
            <OpportunityCard/>
            <OpportunityCard/>
            <OpportunityCard/>
            <OpportunityCard/>
        </div>
    );
}
export default Project;