import React from "react";
import './style.css';
import Button from './../../common/button';
import Input from "../../common/input";
import ModalComponent from "../../common/modal";
import { sendRequest } from "../../../../config/request";
import { useState } from "react";
import {onMessageListener } from '../../../../firebase.js';
const MeetingModal=({showModal , onRequestClose,onUpdateStream})=>{
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            height: 'fit-content',
            width: '40%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '20px',
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
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");
    const [date,setDate ] = useState("");
    const [location,setLocation ] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const[notification,setNotification]=useState('');
    const handleMeet = async() => {
        console.log("click");
        if (!link ||!description || !date) {
            setErrorMessage('Please fill in the fields (location is optional.');
            setTimeout(() => {
                setErrorMessage('');
              }, 5000);
              return;
          }
          setErrorMessage('');
        const id=localStorage.getItem("organizationId");
        const data=new FormData();
        data.append('org_id',id);        
        data.append('link',link);
        data.append('description',description);
        data.append('date_at',date);
        data.append('location',location);

        try{
            const response=await sendRequest({
                method:"POST",
                route:"/admin/new-meeting",
                body:data,
                includeHeaders:true
            });
            
            if(response){
                console.log(response);
                onRequestClose();
                onUpdateStream();
                
            }
            
            }catch(error){
                console.log(error);
                setErrorMessage('Error creating meeting.');
                setTimeout(() => {
                    setErrorMessage('');
                }, 5000);
            }
        };
    return(
        <div >
            <ModalComponent customStyles={customStyles} showModal={showModal} onRequestClose={onRequestClose} >
                <div className='meeting-form-container flex fullwidth column'>
                    <div className="new-meeting-header flex ">
                        <span>Schedule a Meeting</span>
                    </div>
                    <div className="new-meeting-form-container flex column fullwidth">
                        <div className="meeting-form  flex column center">
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Meeting Link"}
                                        placeholder={"meeting link"}
                                        type={"text"}
                                        fill={true}
                                        value={link}
                                        onChange={(e)=>setLink(e.target.value)}
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
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Location"}
                                        placeholder={"location"}
                                        type={"text"}
                                        fill={true}
                                        value={location}
                                        onChange={(e)=>setLocation(e.target.value)}
                                    />
                                </span>
                            </div>
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Date"}
                                        type={"date"}
                                        fill={true}
                                        value={date}
                                        onChange={(e)=>setDate(e.target.value)}
                                    />
                                </span>
                            </div>
                            {errorMessage && (
                            <div className=" fullwidth flex center error-message">{errorMessage}</div>
                            )}
                            <div className="pt-10 btn-add-meeting flex ">
                                <Button 
                                    text={"SCHEDULE"}
                                    isSecondary={true}
                                    onClick={handleMeet}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </div>
    );
}
export default MeetingModal;