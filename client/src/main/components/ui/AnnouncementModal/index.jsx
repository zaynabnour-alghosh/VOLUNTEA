import React from "react";
import './style.css';
import Button from './../../common/button';
import ModalComponent from "../../common/modal";
import { useState } from "react";
import { sendRequest } from "../../../../config/request";
import Input from "../../common/input";
const AnnouncementModal=({showModal , onRequestClose})=>{
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            height: 'fit-content',
            width: '60%',
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
    const [header, setHeader] = useState("Event");
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [fromTime, setFromTime] = useState("");
    const [toTime, setToTime] = useState("");
    const handleHeaderChange = (e) => {
        setHeader(e.target.value);
    };
    const handleAnnounce = async() => {
        console.log("click");
        const id=localStorage.getItem("organizationId");
        const data=new FormData();
        data.append('org_id',id);        
        data.append('header',header);
        data.append('topic',topic);
        data.append('date_at',date);
        data.append('description',description);
        data.append('from',fromTime);
        data.append("to", toTime);

        try{
            const response=await sendRequest({
                method:"POST",
                route:"/admin/new-announcement",
                body:data,
                includeHeaders:true
            });
            if(response){
                console.log(response);
                onRequestClose();

            }
        }catch(error){
            console.log(error)
        }
       

        };
    return(
        <div >
            <ModalComponent customStyles={customStyles} showModal={showModal} onRequestClose={onRequestClose} >
                <div className='new-announcement-form-container flex fullwidth column'>
                    <div className="new-announcement-header flex row spaceBetween">
                        <span>Announce Something</span>
                    </div>
                    <div className="new-announcement-form-container">
                        <div className="new-announcement-form-grid grid new-announcement-grid-container">
                            <div className="announcement-card-topic flex column new-announcement-grid-item">
                                <span className="pt-10">
                                    <label htmlFor="header">Header</label>
                                    <select name="header" 
                                        className="pt-10 fullwidth  select header-list"
                                        value={header}
                                        onChange={handleHeaderChange}
                                        >
                                        <option value="Event">Event</option>
                                        <option value="Opportunity">Opportunity</option>
                                        <option value="Reminder">Reminder</option>
                                        <option value="Updates">Updates</option>
                                        <option value="Emergency">Emergency</option>
                                        <option value="Feedbackent">Feedbackent</option>
                                        <option value="Resources">Resources</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </span>
                            </div>
                            <div className="announcement-card-coord flex column new-announcement-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"Topic"}
                                        placeholder={"topic"}
                                        type={"text"}
                                        fill={true}
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value)}
                                    />
                                </span>
                            </div>
                            <div className="announcement-card-desc flex column new-announcement-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"Description"}
                                        placeholder={"decription"}
                                        type={"textarea"}
                                        fill={true}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </span>
                            </div>
                            <div className="announcement-card-coord flex column new-announcement-grid-item">
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
                            <div className="announcement-card-location flex column new-announcement-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"From"}
                                        type={"time"}
                                        fill={true}
                                        value={fromTime}
                                        onChange={(e) => setFromTime(e.target.value)}
                                    />
                                </span>
                            </div>
                            <div className="announcement-card-vacancies flex column new-announcement-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"To"}
                                        type={"time"}
                                        fill={true}
                                        value={toTime}
                                        onChange={(e) => setToTime(e.target.value)}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="btn-add-announcement flex fullwidth center">
                            <Button 
                                text={"Announce"}
                                isSecondary={true}
                                onClick={handleAnnounce}
                            />
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </div>
    );
}
export default AnnouncementModal;

