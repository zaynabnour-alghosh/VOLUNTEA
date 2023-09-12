import React from "react";
import './style.css';
import Button from "../../common/button";
const MemberRow=()=>{
    return(
        <div className="member-row-container flex row spaceBetween">
            <div className="member-full-name flex row">
                <div className="member-avatar">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU"
                    alt="member"
                />
                </div>
                <span>Jane Doe</span>
            </div>
            <div className="member-email">
                <span>janeDoe@mail.com</span>
            </div>
            <div className="member-action flex row">
                <a href="#">View</a>
                <a href="#">Certify</a>
            </div>
        </div>
    );
}
export default MemberRow;