import React from "react";
import './style.css';
import Input from "../../common/input";
import Button from "../../common/button";
import ModalComponent from "../../common/modal";
const EventModal=({showAddEventModal , onRequestClose })=>{
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            height: 'fit-content',
            width: '30%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '5px',
            padding:'20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',

           
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
        }
    };
    return(
        <div>
            <ModalComponent customStyles={customStyles} showModal={showAddEventModal} onRequestClose={onRequestClose} >
                <div className="schedule-event-container p-30 fullwidth flex column  gap-10 center">
                    <div className="event-title flex fullwidth flex column gap-10 center p-10">ADD EVENT</div>
                        <div className="flex column gap-15">
                            <Input
                                placeholder={"Event Title"}
                                type={"text"}
                            />
                            <Input
                                placeholder={"Description"}
                                type={"textarea"}
                            />
                            <Input
                                placeholder={"Date"}
                                type={"date"}
                            />
                            <Input
                                placeholder={"From"}
                                type={"time"}
                            />
                            <Input
                                placeholder={"To"}
                                type={"time"}
                            />
                        </div>
                        <Button
                            text={"ADD"}
                            isPrimary={true} 
                            medium={true}
                            onClick={()=>{onRequestClose();}}
                        />
                </div>
            </ModalComponent>
        </div>
    );
}
export default EventModal;