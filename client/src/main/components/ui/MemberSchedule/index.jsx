import React from "react";
import './style.css';
const MemberSchedule=({goBack})=>{
    return(
        <div className="member-schedule-container p-30">
            <button onClick={goBack}>Back to Profile</button>
            Here goes the schedule
        </div>
    );
}
export default MemberSchedule;