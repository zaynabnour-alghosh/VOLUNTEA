import React from "react";
import './style.css';
import ModalComponent from "../../../main/components/common/modal";
import Input from "../../../main/components/common/input";
import Button from "../../../main/components/common/button";
import { useState } from "react";

const MissionModal=({showMissionModal , onRequestClose,addMission})=>{
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            height: 'fit-content',
            width: '40%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            padding:'30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
           
        },
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.6)',
            top: 0,
            left:0,
            right: 0,
            bottom: 0,
            display:'flex',
            justifyContent:'flex-end',
            width:'100%'
        },
        modal:{
          position:'absolute',
          width:'max-content',
          top:0,
          right:0,
          bottom:0,
          left:'auto'
        }
    
    };
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const org_id=localStorage.getItem("org_id");
    const handleAddMission=()=>{
        const missionData=new FormData();
        missionData.append('header',topic);
        missionData.append('description',description);
        missionData.append('org_id',org_id);

        addMission(missionData);
        onRequestClose();
    }
    return(
        <div >
            <ModalComponent customStyles={customStyles} showModal={showMissionModal} onRequestClose={onRequestClose} >
                <div className='org-mission-form-container flex fullwidth column'>
                    <div className="new-org-mission-form-container flex column fullwidth">
                        <div className="org-mission-form  flex column center">
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Topic"}
                                        placeholder={"Mission Topic"}
                                        type={"text"}
                                        fill={true}
                                        value={topic}
                                        onChange={(e)=>setTopic(e.target.value)}
                                    />
                                </span>
                            </div>
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Description"}
                                        placeholder={"description"}
                                        type={"textarea"}
                                        fill={true}
                                        value={description}
                                        onChange={(e)=>setDescription(e.target.value)}
                                    />
                                </span>
                            </div>
                            <div className="btn-add-mission flex ">
                                <Button 
                                    text={"Add"}
                                    isAction={true}
                                    medium={true}
                                    onClick={handleAddMission}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </div>
    );
}
export default MissionModal;