import React, { useState,useEffect } from "react";
import './style.css';
import OpportunityCard from "../../ui/OpportunityCard";
import { sendRequest } from "../../../../config/request";
import StreamTab from "../../common/streamtab";

const Opportunities=({orgId})=>{
    const [selectedTab, setSelectedTab] = useState("All");
    const [isAllOppOpen, setIsAllOppOpen] = useState(false);
    const [isMyAppOpen, setIsMyAppOpen] = useState(false);
    const [opportunities, setOpportunities] = useState([]);
    const [applications, setApplications] = useState([]);


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
    useEffect(() => {
        const getOpp = async () => {
			try {
				const response = await sendRequest({
                method:"GET",
                route: `all-opportunities/${orgId}`,
                body:" ",
                })
                
			if (response) {
                console.log(response.data);
                setOpportunities(response.data);
			}
			} catch (error) {
				console.log(error);
			}
		} 
        getOpp();
    }, []);
    
    useEffect(() => {
        const getApp = async () => {
			try {
				const response = await sendRequest({
                method:"GET",
                route: `volunteer/applications`,
                body:" ",
                })
                
			if (response) {
                console.log(response);
                setApplications(response.data);
			}
			} catch (error) {
				console.log(error);
			}
		} 
        getApp();
    }, []);

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
                    <div className="opp-container scroll flex column gap-40">
                    </div>
                    {selectedTab === 'All' && 
                    
                     opportunities && opportunities.map((opportunity,index) => (
                        <div key={index}>
                            <OpportunityCard
                            apply={true}
                            key={opportunity.id}
                            opportunity={opportunity}
                            orgId={orgId}
                        />
                        </div>))}
                    {selectedTab === 'My Applications' && 

                    applications && applications.map((opportunity,index) => (
                        <div key={index}>
                            <OpportunityCard
                            applied={true}
                            key={opportunity.id}
                            opportunity={opportunity}
                            orgId={orgId}
                            setApplications={setApplications}
                        />
                        </div>))}
                </div>        
            </div>
        </div>
    );
}
export default Opportunities;