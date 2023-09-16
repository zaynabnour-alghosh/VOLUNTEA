import React from "react";
import './style.css';
import {icons} from "../../../icons.js";
import CalendarComponent from "../../common/calendar";
const MemberSchedule=({goBack})=>{
    return(
        <div className="member-schedule-container fullwidth p-10">
            <div className="member-schedule-top flex row p-30 gap-20">
                <span className="back" onClick={goBack}>{icons['back']}</span>
                <div className="member-schedule flex fullwidth center p-20">
                    SCHEDULE
                </div>
            </div>
            <div className="flex center fullwidth p-20">
                <CalendarComponent/>
            </div>
        </div>
    );
}
export default MemberSchedule;