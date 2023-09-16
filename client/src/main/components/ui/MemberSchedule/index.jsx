import React from "react";
import './style.css';
import {icons} from "../../../icons.js";
import CalendarComponent from "../../common/calendar";
import Button from "../../common/button";
import EventModal from "../EventModal";
import { useState } from "react";
const MemberSchedule=({goBack, auth})=>{
    const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);
    const showAddEventModal = () => {
        setIsAddEventModalOpen(true);
      };
      const toggleEventModal=()=>{
        setIsAddEventModalOpen(!isAddEventModalOpen);
    }
    return(
        <div className="member-schedule-container fullwidth p-10">
            <div className="member-schedule-top flex row p-30 gap-20">
                <span className="back" onClick={goBack}>{icons['back']}</span>
                <div className="member-schedule flex fullwidth center p-20">
                    SCHEDULE
                </div>
            </div>
            {auth && 
                <div className="auth-sechedule-actions flex fullwidth row gap-20 p-20">
                    <Button
                        text={"Edit"}
                        isPrimary={false}
                        medium={true}
                    />
                    <Button
                        text={"+Event"}
                        isPrimary={false} 
                        medium={true}
                        onClick={showAddEventModal}
                    />
                </div>
            }
            <div className="flex center fullwidth p-20">
                <CalendarComponent/>
            </div>
            {isAddEventModalOpen && 
                <EventModal showAddEventModal={isAddEventModalOpen} onRequestClose={toggleEventModal}/>}
        </div>
    );
}
export default MemberSchedule;