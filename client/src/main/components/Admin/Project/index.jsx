import React from "react";
import './style.css';
import OpportunityCard from "../../ui/OpportunityCard";
const Project=({toggleOpportunityDetails})=>{
    return(
        <div className="opp-container flex column gap-40">
            <OpportunityCard toggleOpportunityDetails={toggleOpportunityDetails} buttons={true}/>
        </div>
    );
}
export default Project;