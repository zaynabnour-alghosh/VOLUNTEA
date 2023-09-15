import React , { useState } from "react";
import './style.css';
import OpportunityCard from "../OpportunityCard";
const OpportunityDetails=()=>{
    const [selectedTab, setSelectedTab] = useState('applications');

    const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

    return (
        <div class="opp-datails-container flex column">
            <div className="opp-card-info flex column center gap-20">
                <OpportunityCard buttons={false} />
                <div className="opp-details-action-tabs flex row fullwidth">
                    <div className={`opp-tab flex center ${selectedTab === 'applications' ? 'selected' : 'unselected'}`} onClick={() => handleTabClick('applications')}>
                        Applications
                    </div>
                    <div className={`opp-tab flex center ${selectedTab === 'feedback' ? 'selected' : 'unselected'}`} onClick={() => handleTabClick('feedback')}>
                        Feedback
                    </div>
                </div>
                <div className="opp-details-container">
                    {selectedTab === 'applications' && <div>App</div>}
                    {selectedTab === 'feedback' &&<div>Feedback</div>}
                </div>
            </div>
        </div>
    );
}
export default OpportunityDetails