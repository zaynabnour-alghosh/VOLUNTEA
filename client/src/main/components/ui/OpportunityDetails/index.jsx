import React from "react";
import './style.css';
import OpportunityCard from "../OpportunityCard";
const OpportunityDetails=()=>{

    return (
        <div class="opp-datails-container flex column">
            <div className="opp-card-info flex">
                <OpportunityCard buttons={false} />
            </div>
        </div>
    );
}
export default OpportunityDetails