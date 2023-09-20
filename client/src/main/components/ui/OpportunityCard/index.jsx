import React, { useEffect } from "react";
import './style.css';
import { useState } from 'react';
import Button from "../../common/button";
import OpportunityModal from "../../ui/OpportunityModal";
import FeedbackModal from "../FeedbackModal";

const OpportunityCard=({ toggleOpportunityDetails , buttons ,orgId,apply,applied ,opportunity,setSelectedOpportunity})=>{
    const {
        topic,
        description,
        opportunity_date: opportunityDate,
        location,
        nb_volunteers: nbVolunteers,
        tasks,
        coordinator,
        date
    } = opportunity;
    const [isOppModalOpen, setIsOppModalOpen] = useState(false);
    const [isFeedModalOpen, setIsFeedModalOpen] = useState(false);
     

    
    const showOppModal = () => {
        setIsOppModalOpen(true);
      };
    const toggleOppModal=()=>{
        setIsOppModalOpen(!isOppModalOpen);
    }

    const showFeedModal = () => {
        setIsFeedModalOpen(true);
      };
    const toggleFeedModal=()=>{
        setIsFeedModalOpen(!isFeedModalOpen);
    }
    


    return(
        <div className="opp-card-container flex column">
            
            <div className="opp-card-content pt-20 grid opp-grid-container">
                {!buttons &&<>
                <div className="flex column opp-grid-item opp-date">Date:{date}</div> 
                <div className="flex column opp-grid-item opp-date"></div> 
                </>}
           
                {buttons &&
                <>
                    <div className="flex column opp-grid-item opp-date">Date:{date}</div>
                    <div className="opp-card-top flex row gap-10 opp-grid-item">
                        <Button
                            text={"VIEW"}
                            isPrimary={true}
                            onClick={() => {toggleOpportunityDetails(); setSelectedOpportunity(opportunity)}}
                            medium={true}
                        />
                        <Button
                            text={"EDIT"}
                            isPrimary={true}  
                            onClick={showOppModal}                                      
                            medium={true}
                        />
                        <Button
                            text={"DELETE"}
                            isPrimary={true} 
                            medium={true}
                        />
                    </div>
                </>}
                {apply &&
                <>
                    <div className="flex column opp-grid-item"></div>
                        <div className="send-app-btn flex opp-card-top flex opp-grid-item">
                        <Button
                        text={"Send Application"}
                        isPrimary={true}
                        isWide={true}
                        />
                    </div>
                </>}
                {applied &&
                <>
                    <div className="flex column opp-grid-item"></div>
                    <div className="opp-app-actions flex fullwidth row gap-10 opp-grid-item" >
                        <Button
                            text={"FEEDBACK"}
                            isPrimary={true}
                            medium={true}
                            onClick={showFeedModal}                                      

                        />
                        <Button
                            text={"CANCEL"}
                            isPrimary={true}  
                            medium={true}
                            
                        />
                    </div>
                </>}

                <div className="opp-card-topic flex column opp-grid-item">
                    <h3>Topic</h3>
                    <span>{topic}</span>
                </div>
                <div className="opp-card-coord flex column opp-grid-item">
                    <h3>Coordinator</h3>
                    <span>{coordinator}</span>
                </div>
                <div className="opp-card-desc flex column opp-grid-item">
                    <h3>Description</h3>
                    <span>
                        {description} 
                    </span>
                </div>
                <div className="opp-card-task flex column opp-grid-item">
                    <h3>Tasks</h3>
                    <div className="opp-task-list flex column">
                        {tasks.map(task=>(
                            <div>{task}</div>
                        ))}
                        {/* <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div> */}
                    </div>
                </div>
                <div className="opp-card-location flex column opp-grid-item">
                    <h3>Location</h3>
                    <span>{location}</span>
                </div>
                <div className="opp-card-vacancies flex column opp-grid-item">
                    <h3>Vacancies</h3>
                    <span>{nbVolunteers} volunteers</span>
                </div>
            
            </div>
            {isOppModalOpen && 
                <OpportunityModal 
                    showOppModal={isOppModalOpen}
                    onRequestClose={toggleOppModal}
                    edit={true}
                    orgId={orgId}
                />}
            {isFeedModalOpen && 
                <FeedbackModal 
                    showFeedModal={isFeedModalOpen}
                    onRequestClose={toggleFeedModal}
                />}
        </div>
    );
}
export default OpportunityCard;