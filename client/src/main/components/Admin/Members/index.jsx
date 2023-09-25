import React from "react";
import './style.css';
import MemberRow from "../../ui/MemberRow";

const Members=({toggleMemberProfile,members})=>{
    return(
        <div className="member-grid">
            <div className="member-row members-top">
                <div>Full Name</div>
                <div>Email</div>
                <div>Action</div>
            </div>
            <div className="members-content">
                {members.map((member, index) => (
                    <div key={index}>
                        <MemberRow toggleMemberProfile={toggleMemberProfile} member={member}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Members;