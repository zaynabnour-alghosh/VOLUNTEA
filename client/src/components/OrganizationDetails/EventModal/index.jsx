import React from "react";
import './style.css';
import ModalComponent from "../../../main/components/common/modal";
import Input from "../../../main/components/common/input";
import Button from "../../../main/components/common/button";
import { useState } from "react";
const OrgEventModal=({showEventModal , onRequestClose,addEvent,editEvent, event})=>{
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
    const [topic, setTopic] = useState(event ? event.topic : "");
    const [description, setDescription] = useState(event ? event.description : "");
    const [image, setImage] = useState(event ? event.image_url : "");
    const [date, setDate] = useState(event ? event.event_date : "");
    const org_id=localStorage.getItem("org_id");
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddEvent=()=>{
        if (!topic ||!description || !image || !date) {
            setErrorMessage('Please fill in all fields.');
            setTimeout(() => {
                setErrorMessage('');
              }, 5000);
              return;
          }
          setErrorMessage('');
        const eventData=new FormData();
        eventData.append('topic',topic);
        eventData.append('description',description);
        eventData.append('org_id',org_id);
        eventData.append('image_url',image);
        eventData.append('event_date',date);

        addEvent(eventData);
        onRequestClose();
    }
    const handleUpdatedEvent=()=>{
        if(event){
            const eventData=new FormData();
            eventData.append('event_id',event.id);
            eventData.append('topic',topic);
            eventData.append('description',description);
            eventData.append('image_url',image);
            eventData.append('event_date',date);

            editEvent(eventData);
            onRequestClose();
        }
    }
    const handleAction=()=>{
        if (event){
            handleUpdatedEvent();
        }else{
            handleAddEvent();
        }
    }
    return(
        <div >
            <ModalComponent customStyles={customStyles} showModal={showEventModal} onRequestClose={onRequestClose} >
                <div className='org-event-form-container flex fullwidth column'>
                    <div className="new-org-event-form-container flex column fullwidth">
                        <div className="org-event-form  flex column center">
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Topic"}
                                        placeholder={"Event Topic"}
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
                                <span className="pt-10">
                                    <Input
                                        label={"Date"}
                                        type={"date"}
                                        fill={true}
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </span>
                            </div>

                            <div className="fullwidth flex column">
                                <span className="pt-10 file">
                                    <Input
                                        label={"Image"}
                                        type={"file"}
                                        fill={true}
                                        onChange={(e)=>setImage(e.target.files[0])}
                                    />
                                </span>
                            </div>
                            {errorMessage && (
                            <div className=" fullwidth flex center error-message">{errorMessage}</div>
                            )}
                            <div className="btn-add-impcat flex ">
                                <Button 
                                    text={event ? "Update" : "Add"}
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
export default OrgEventModal;