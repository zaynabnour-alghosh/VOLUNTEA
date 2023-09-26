import React from "react";
import './style.css';
import { useState } from "react";
import Input from "../../common/input";
import Button from "../../common/button";
import ModalComponent from "../../common/modal";
const ScheduleModal=({showScheduleModal , onRequestClose,addSchedule})=>{
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
    
    const [day, setDay] = useState("Monday");
    const [fromTime, setFromTime] = useState("");
    const [toTime, setToTime] = useState("");
    const handleDayChange = (e) => {
        setDay(e.target.value);
    };
    const handleConfirm = () => {
        
        const scheduleData=new FormData();
        scheduleData.append('weekday',day);
        scheduleData.append('start_time',fromTime);
        scheduleData.append("end_time", toTime);

        addSchedule(scheduleData);
        onRequestClose();

        };
    return(
        <div>
            <ModalComponent customStyles={customStyles} showModal={showScheduleModal} onRequestClose={onRequestClose} >
                <div className="schedule-modal-container p-30 fullwidth flex column  gap-10 center">
                    <div className="schedule-title flex fullwidth flex column gap-10 center p-10">EDIT SCHEDULE</div>
                        <div className="flex column gap-15">
                            <select name="week"  
                                    className="pt-10 fullwidth weekdays-list select"
                                    value={day}
                                    onChange={handleDayChange}                            
                            >
                                    <option value="Monday">Moday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                    <option value="Sunday">Sunday</option>
                            </select>
                            
                            <Input
                                placeholder={"from"}
                                type={"time"}
                                value={fromTime}
                                onChange={(e) => setFromTime(e.target.value)}
                            />
                            <Input
                                placeholder={"To"}
                                type={"time"}
                                value={toTime}
                                onChange={(e) => setToTime(e.target.value)}
                            />
                        </div>
                        <Button
                            text={"CONFIRM"}
                            isPrimary={true} 
                            medium={true}
                            onClick={handleConfirm}
                        />
                </div>
            </ModalComponent>
        </div>
    );
}
export default ScheduleModal;