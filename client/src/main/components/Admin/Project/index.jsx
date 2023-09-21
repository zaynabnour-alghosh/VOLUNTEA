import React from "react";
import './style.css';
import { useEffect,useState } from "react";
import { sendRequest } from "../../../../config/request";
import OpportunityCard from "../../ui/OpportunityCard";
const Project=({orgId,toggleOpportunityDetails,setSelectedOpportunity,opportunities,setOpportunities})=>{
    const [opportunity, setOpportunity] = useState(null);
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
       
    return(
        <div className="opp-container flex column gap-40">
            {/* <OpportunityCard toggleOpportunityDetails={toggleOpportunityDetails} buttons={true}/> */}
            { opportunities && opportunities.map(opportunity => (
                <OpportunityCard
                    key={opportunity.id}
                    setSelectedOpportunity={setSelectedOpportunity} 
                    toggleOpportunityDetails={toggleOpportunityDetails}
                    buttons={true}
                    opportunity={opportunity}
                    setOpportunity={setOpportunity}
                    setOpportunities={setOpportunities}
                    opportunities={opportunities}
                    orgId={orgId}
                />
            ))}
        </div>
    );
}
export default Project;