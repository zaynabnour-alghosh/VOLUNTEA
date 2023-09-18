import React from "react";
import './style.css';
import Input from "../../../main/components/common/input";
import Button from "../../../main/components/common/button";
import logoS from "../../../assets/logo-secondary.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ImpactModal from "../ImpactModal";
import MissionModal from "../MissionModal";
import OrgEventModal from "../EventModal";
import { sendRequest } from "../../../config/request";
const InformationForm=()=>{
    const navigate=useNavigate();
    const [isImpactModalOpen, setIsImpactModalOpen] = useState(false);
    const [isMissionModalOpen, setIsMissionModalOpen] = useState(false);
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);
    
    const showImpcatModal = () => {
        setIsImpactModalOpen(true);
      };
    const toggleImpactModal=()=>{
        setIsImpactModalOpen(!isImpactModalOpen);
    }

    const showMissionModal = () => {
        setIsMissionModalOpen(true);
      };
    const toggleMissionModal=()=>{
        setIsMissionModalOpen(!isMissionModalOpen);
    }
    const showEventModal = () => {
        setIsEventModalOpen(true);
      };
    const toggleEventModal=()=>{
        setIsEventModalOpen(!isEventModalOpen);
    }
    const handleAddImpact=async(data)=>{
        try{
            const response=await sendRequest({
                method:"POST",
                route:"/admin/organization-impact",
                body:data,
                includeHeaders:true
            });
            if(response){
                console.log(response);
            }
        }catch(error){
            console.log(error)
        }

    };
    const handleAddMission=()=>{

    };
    const handleAddEvent=()=>{

    }
    const handleAddOrgInfo=()=>{

    }

    return(
        <div className="fill-org-container page flex">
        <div className="fill-org flex column gap-30">
            <div className=" logo-img pt-10 flex"><img src={logoS} alt="logoS" /></div>
            <div className="org-info-container  flex column">
                <span class="flex fullwidth center"><h2>Fill Organization Information</h2></span>
                <div class="flex column pt-10 gap-5">
                    <div className="persoanl-left flex fullwidth spaceBetween row gap-10">
                        <div className="fullwidth org-file">
                            <Input
                                label={"Organization"}
                                type={"text"}
                                placeholder={"Name"}
                                fill={true}
                            />
                        </div>
                        <div className="logo-file fullwidth org-file">
                            <Input
                                label={"Logo"}
                                type={"file"}
                                fill={true}
                            />
                        </div>                                
                    </div>
                    <div>
                        <Input
                            label={"Description"}
                            type={"text"}
                            placeholder={"Description"}
                            fill={true}
                        />
                    </div>                    
                    <div className="flex fullwidth center row gap-10">
                        <Button
                            text={"+ Impact"}
                            isAction={true}
                            meduim={true}
                            onClick={showImpcatModal}

                        />
                        <Button
                            text={"+ Mission"}
                            isAction={true}
                            medium={true}
                            onClick={showMissionModal}
                        />
                        <Button
                            text={"+ Event"}
                            isAction={true}
                            medium={true}
                            onClick={showEventModal}
                        />
                    </div>
                    
                    <div className="other flex row  pt-10 spaceBetween gap-10 fullwidth">
                        <Input
                            label={"Location"}
                            type={"text"}
                            placeholder={"Location"}
                            fill={true}
                        />
                        <Input
                            label={"Mobile"}
                            type={"text"}
                            placeholder={"Mobile"}
                            fill={true}
                        />
                        <Input
                            label={"Email"}
                            type={"text"}
                            placeholder={"Email"}
                            fill={true}
                        />
                    </div>
                    <div className="other flex row spaceBetween gap-10 pt-5 ">
                        <Input
                            label={"Facebook"}
                            type={"text"}
                            placeholder={"Link"}
                            fill={true}
                        />
                        <Input
                            label={"Instagram"}
                            type={"text"}
                            placeholder={"Link"}
                            fill={true}
                        />
                        <Input
                            label={"Whatsapp"}
                            type={"text"}
                            placeholder={"Link"}
                            fill={true}
                        />
                    </div>
                    <div className="add-info-btn flex fullwidth pt-10 center">
                    <Button
                        text={"Finish"}
                        isLight={true}
                        medium={true}
                        onClick={handleAddOrgInfo}
                        />
                    </div>                            
                </div>                                                                
            </div>
        </div>
        {isImpactModalOpen && 
            <ImpactModal 
                showImpactModal={isImpactModalOpen}
                onRequestClose={toggleImpactModal}
                addImpact={handleAddImpact}
            />}
        {isMissionModalOpen && 
            <MissionModal 
                showMissionModal={isMissionModalOpen}
                onRequestClose={toggleMissionModal}
                addMission={handleAddMission}
            />}
        {isEventModalOpen && 
            <OrgEventModal 
                showEventModal={isEventModalOpen}
                onRequestClose={toggleEventModal}
                addEvent={handleAddEvent}
            />}
    </div>
    );
}
export default InformationForm;