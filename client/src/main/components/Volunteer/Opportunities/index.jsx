import React, { useState } from "react";
import './style.css';
import OpportunityCard from "../../ui/OpportunityCard";
import StreamTab from "../../common/streamtab";

const Opportunities=()=>{
    const [selectedTab, setSelectedTab] = useState("All");
    const [isAllOppOpen, setIsAllOppOpen] = useState(false);
    const [isMyAppOpen, setIsMyAppOpen] = useState(false);

    const selectHandler = (value) => {
        setSelectedTab(value);
        if (value === 'All') {
            setIsAllOppOpen(true);
        }
        else if (value === 'My Applications') {
            setIsMyAppOpen(true);
        }
    };
    const toggleAll=()=>{
        setIsAllOppOpen(!isAllOppOpen);
    }
    const toggleApp=()=>{
        setIsMyAppOpen(!isMyAppOpen);
    }
    return(
        <div className="volunteer-stream-container flex column">
            <div className="flex row stream-tabs spaceBetween">
                <StreamTab
                    name={"All"}
                    selected={selectedTab === "All"}
                    value={"All"}
                    onSelected={(value) => selectHandler(value)}
                />
                <StreamTab
                    name={"My Applications"}
                    selected={selectedTab === "My Applications"}
                    value={"My Applications"}
                    onSelected={(value) => selectHandler(value)}
                    
                />        
            </div>
            <div className="volunteer-stream-content flex center wrap">
                <div className="volunteer-stream-main flex column">
                    <div className="opp-container flex column gap-40">
                    </div>
                    {selectedTab === 'All' && <OpportunityCard apply={true}/>}
                    {selectedTab === 'My Applications' && <OpportunityCard applied={true}/>}
                </div>        
            </div>
        </div>
    );
}
export default Opportunities;