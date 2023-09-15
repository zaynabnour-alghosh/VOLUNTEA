import React , { useState } from "react";
import './style.css';
import OpportunityCard from "../OpportunityCard";
import OpportunityApplications from "../OpportunityApplications";
import OpportunityFeedback from "../OpportunityFeedback";
const OpportunityDetails=()=>{
    const [selectedTab, setSelectedTab] = useState('applications');

    const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

    return (
        <div class="opp-details-container flex column">
            <div className="opp-card-info flex column center gap-20">
                <OpportunityCard buttons={false} />
                <div className="opp-details-main flex column fullwidth gap-20">
                    <div className="opp-details-action-tabs flex row fullwidth">
                        <div className={`opp-tab flex center ${selectedTab === 'applications' ? 'selected-tab' : 'unselected-tab'}`} onClick={() => handleTabClick('applications')}>
                            Applications
                        </div>
                        <div className={`opp-tab flex center ${selectedTab === 'feedback' ? 'selected-tab' : 'unselected-tab'}`} onClick={() => handleTabClick('feedback')}>
                            Feedback
                        </div>
                    </div>
                    <div className="opp-details-content flex fullwidth">
                        {selectedTab === 'applications' && <OpportunityApplications/>}
                        {selectedTab === 'feedback' &&  <OpportunityFeedback/>}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OpportunityDetails