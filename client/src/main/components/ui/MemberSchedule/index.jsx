import React from "react";
import './style.css';
import {icons} from "../../../../icons.js";
import CalendarComponent from "../../common/calendar";
import Button from "../../common/button";
import EventModal from "../EventModal";
import { useState } from "react";
import ScheduleModal from "../ScheduleModal";
const MemberSchedule=({schedule,goBack, auth})=>{
    const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
    
    const showAddEventModal = () => {
        setIsAddEventModalOpen(true);
    };
    const toggleEventModal=()=>{
        setIsAddEventModalOpen(!isAddEventModalOpen);
    }
    const showScheduleModal = () => {
        setIsScheduleModalOpen(true);
      };
      const toggleScheduleModal=()=>{
        setIsScheduleModalOpen(!isScheduleModalOpen);
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
                        isSecondary={true}
                        medium={true}
                        onClick={showScheduleModal}
                    />
                    <Button
                        text={"+Event"}
                        isSecondary={true}
                        medium={true}
                        onClick={showAddEventModal}
                    />
                </div>
            }
            <div className="flex center fullwidth p-20">
                <CalendarComponent schedule={schedule}/>
            </div>
            {isAddEventModalOpen && 
                <EventModal showAddEventModal={isAddEventModalOpen} onRequestClose={toggleEventModal}
            />}
            {isScheduleModalOpen && 
                <ScheduleModal showScheduleModal={isScheduleModalOpen} onRequestClose={toggleScheduleModal}
            />}
        </div>
    );
}
export default MemberSchedule;