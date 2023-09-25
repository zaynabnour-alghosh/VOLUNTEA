import React from "react";
import './style.css';
import Button from "../../common/button";
const MemberRow=({toggleMemberProfile ,member})=>{
    const {id,name,email,avatar}=member;
    return(
        <div className="member-row-container flex row spaceBetween">
            <div className="member-full-name flex row">
                <div className="member-avatar">
                <img
                    src={`http://localhost:8000/storage/images/profiles/${avatar}`}
                    alt="member"
                />
                </div>
                <span>{name}</span>
            </div>
            <div className="member-email">
                <span>{email}</span>
            </div>
            <div className="member-action flex row">
                <Button 
                    isLink={true} 
                    text={"View"} 
                    onClick={toggleMemberProfile}/>
            </div>
        </div>
    );
}
export default MemberRow;