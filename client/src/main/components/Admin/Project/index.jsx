import React from "react";
import './style.css';
import { useEffect,useState } from "react";
import { sendRequest } from "../../../../config/request";
import OpportunityModal from "../../ui/OpportunityModal";
import OpportunityCard from "../../ui/OpportunityCard";
const Project=({orgId,toggleOpportunityDetails,setSelectedOpportunity})=>{
    const [opportunities, setOpportunities] = useState([]);
    const [isOppModalOpen, setIsOppModalOpen] = useState(false);

    const showOppModal = () => {
        setIsOppModalOpen(true);
      };
    const toggleOppModal=()=>{
        setIsOppModalOpen(!isOppModalOpen);
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
    const handleAddOpportunityToProject = (newOpportunity) => {
        setOpportunities( ...opportunities,newOpportunity);
      };

   
   
    return(
        <div className="opp-container flex column gap-40">
            {/* <OpportunityCard toggleOpportunityDetails={toggleOpportunityDetails} buttons={true}/> */}
            {opportunities.map(opportunity => (
                <OpportunityCard
                    key={opportunity.id}
                    setSelectedOpportunity={setSelectedOpportunity} 
                    toggleOpportunityDetails={toggleOpportunityDetails}
                    buttons={true}
                    opportunity={opportunity}
                    orgId={orgId}
                />
            ))}


            {isOppModalOpen && 
                <OpportunityModal 
                    showOppModal={isOppModalOpen}
                    onRequestClose={toggleOppModal}
                    edit={false}
                    orgId={orgId}
                    
                    addOpportunityToProject={handleAddOpportunityToProject}
                />}




        </div>
    );
}
export default Project;