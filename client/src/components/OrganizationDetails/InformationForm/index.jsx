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
    const [name,setName]=useState('');    
    const [description,setDescription]=useState('');
    const [logo,setLogo]=useState('');
    const [face,setFace]=useState('');
    const [insta,setInsta]=useState('');
    const [whats,setWhats]=useState('');
    const [location,setLocation]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
    const handleAddMission=async(data)=>{
        try{
            const response=await sendRequest({
                method:"POST",
                route:"/admin/organization-mission",
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
    const handleAddEvent=async(data)=>{
        try{
            const response=await sendRequest({
                method:"POST",
                route:"/admin/organization-event",
                body:data,
                includeHeaders:true
            });
            if(response){
                console.log(response);
            }
        }catch(error){
            console.log(error)
        }
    }
    const handleAddOrgInfo=async(e)=>{
        if (!name 
            || !email 
            || !description 
            || !logo 
            || !location 
            || !phone 
            || !face 
            || !whats 
            || !insta) {
            setErrorMessage('All input fields are required.');
            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
            return;
        }
        const orgData=new FormData();
        const org_id=localStorage.getItem("org_id");
        orgData.append('name',name);
        orgData.append('description',description);
        orgData.append('logo_url',logo);
        orgData.append('location',location);
        orgData.append('email',email);
        orgData.append('phone',phone);
        orgData.append('face_link',face);
        orgData.append('insta_link',insta);
        orgData.append('whats_link',whats);
        orgData.append('org_id',org_id);


        try{
            const response=await sendRequest({
                method:"POST",
                route:"/admin/organization-info",
                body:orgData,
                includeHeaders:true
            });
            if(response){
                console.log(response);
                setTimeout(() => {navigate(`/login`)},1000);
            }
        }catch(error){
            console.log(error)
        }
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
                                value={name}
                                onChange={(e)=>setName(e.target.value)}

                            />
                        </div>
                        <div className="logo-file fullwidth org-file">
                            <Input
                                label={"Logo"}
                                type={"file"}
                                fill={true}
                                onChange={(e)=>setLogo(e.target.files[0])}
                            />
                        </div>                                
                    </div>
                    <div>
                        <Input
                            label={"Description"}
                            type={"text"}
                            placeholder={"Description"}
                            fill={true}
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
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
                            value={location}
                            onChange={(e)=>setLocation(e.target.value)}
                        />
                        <Input
                            label={"Mobile"}
                            type={"text"}
                            placeholder={"Mobile"}
                            fill={true}
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                        />
                        <Input
                            label={"Email"}
                            type={"text"}
                            placeholder={"Email"}
                            fill={true}
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="other flex row spaceBetween gap-10 pt-5 ">
                        <Input
                            label={"Facebook"}
                            type={"text"}
                            placeholder={"Link"}
                            fill={true}
                            value={face}
                            onChange={(e)=>setFace(e.target.value)}
                        />
                        <Input
                            label={"Instagram"}
                            type={"text"}
                            placeholder={"Link"}
                            fill={true}
                            value={insta}
                            onChange={(e)=>setInsta(e.target.value)}
                        />
                        <Input
                            label={"Whatsapp"}
                            type={"text"}
                            placeholder={"Link"}
                            fill={true}
                            value={whats}
                            onChange={(e)=>setWhats(e.target.value)}
                        />
                    </div>
                    {errorMessage && <div className="error-message pt-10 flex fullwidth center">{errorMessage}</div>}
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