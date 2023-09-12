import React from "react";
import './style.css';
import MemberRow from "../../ui/MemberRow";
const Members=()=>{
    return(
        <div className="member-grid">
            <div className="member-row members-top">
                <div>Full Name</div>
                <div>Email</div>
                <div>Action</div>
            </div>
            <div className="members-content">
                <MemberRow />
                <MemberRow />
                <MemberRow />
                <MemberRow />
            </div>
        </div>
    );
}
export default Members;