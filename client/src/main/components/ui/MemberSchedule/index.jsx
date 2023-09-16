import React from "react";
import './style.css';
import {icons} from "../../../icons.js";
const MemberSchedule=({goBack})=>{
    return(
        <div className="member-schedule-container fullwidth p-30">
            <div className="member-schedule-top flex row p-30 gap-20">
                <span className="back" onClick={goBack}>{icons['back']}</span>
                <div className="member-schedule flex fullwidth center p-20">
                    SCHEDULE
                </div>
            </div>
            <div className="schedule-calendar-container flex center">
                here will go the calendar
            </div>
        </div>
    );
}
export default MemberSchedule;