import React from "react";
import './style.css';
import ModalComponent from "../../../main/components/common/modal";
import Input from "../../../main/components/common/input";
import Button from "../../../main/components/common/button";
import { Form } from "react-router-dom";
import { useState } from "react";
const ImpactModal=({showImpactModal , onRequestClose ,addImpact,editImpact, impact})=>{
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
            padding:'0px',
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
    const [topic, setTopic] = useState(impact ? impact.header : "");
    const [description, setDescription] = useState(impact ? impact.description : "");
    const [image, setImage] = useState(impact ? impact.image_url : "");
    const [fileName, setFileName] = useState("");
    const org_id=localStorage.getItem("org_id");
    console.log(org_id);
    const handleAddImpact=()=>{
        const impactData=new FormData();
        impactData.append('header',topic);
        impactData.append('description',description);
        impactData.append('image_url',image);
        impactData.append('org_id',org_id);

        addImpact(impactData);
        onRequestClose();
    }
    const handleUpdateImpact=()=>{
        if(impact){
            const impactData=new FormData();
            impactData.append('impact_id',impact.id);
            impactData.append('header',topic);
            impactData.append('description',description);
            impactData.append('image_url',image);

            editImpact(impactData);
            onRequestClose();
        }
    }
    const handleAction=()=>{
        if (impact){
            handleUpdateImpact();
        }else{
            handleAddImpact();
        }
    }
    return(
        <div >
            <ModalComponent customStyles={customStyles} showModal={showImpactModal} onRequestClose={onRequestClose} >
                <div className='org-impact-form-container flex fullwidth column'>
                    <div className="new-org-impact-form-container flex column fullwidth">
                        <div className="org-impact-form  flex column center">
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Topic"}
                                        placeholder={"Impact Topic"}
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
                                        placeholder={"Description"}
                                        type={"textarea"}
                                        fill={true}
                                        value={description}
                                        onChange={(e)=>setDescription(e.target.value)}
                                    />
                                </span>
                            </div>
                            <div className="fullwidth flex column">
                                <span className="pt-10 file">
                                    <Input
                                        label={"Image"}
                                        type={"file"}
                                        fill={true}
                                        fileName={fileName}
                                        onChange={(e)=>{setImage(e.target.files[0]);setFileName(e.target.files[0].name);}}
                                    />
                                </span>
                            </div>
                            <div className="btn-add-impcat flex ">
                                <Button 
                                    text={impact ? "Update" : "Add"}
                                    isAction={true}
                                    medium={true}
                                    onClick={handleAction}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </div>
    );
}
export default ImpactModal;