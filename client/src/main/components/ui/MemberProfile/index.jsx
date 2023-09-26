import React from "react";
import './style.css';
import Header from "../../common/header";
import Button from "../../common/button";
import Item from "../../common/item";
import {icons} from "../../../../icons.js";
import MemberSchedule from "../MemberSchedule";
import { useState } from "react";
const MemberProfile=({name,selectedMember,email,skills,schedule,remove})=>{
    const [showSchedule, setShowSchedule] = useState(false);
    console.log("member",name);
    console.log(skills);
    console.log(selectedMember);
    console.log(schedule);

    const handleViewScheduleClick = () => {
        setShowSchedule(true);
    };
    return(
        <div className="member-profile-container fullwidth flex column scroll">
            {remove ?
            <Header 
                profile={true}
                name={name}
                admin_pov={true}
                        
            />:
            <Header 
                profile={true}
                name={name}
                volunteer_pov={true}
            />}
            {showSchedule ? (
                <MemberSchedule schedule={schedule} goBack={() => setShowSchedule(false)} />
            ) : (
                <>
                    <div className="member-profile-personal flex column fullwidth pt-40">
                        <div><h3>Personal</h3></div>
                        <hr/>
                        <div className="profile-personal-container fullwidth flex column gap-20">
                            <div className="pro-grid-container pt-20">
                                <div className="pro-grid-item">
                                    <Item label={"Full Name"} value={name} />
                                </div>
                                <div className="pro-grid-item">
                                    <Item label={"Gender"} value={selectedMember?.gender} />
                                </div>
                                <div className="pro-grid-item">
                                    <Item label={"Birth Date"} value={selectedMember?.dob} />
                                </div>
                                <div className="pro-grid-item">
                                    <Item label={"Phone"} value={selectedMember?.mobile} />
                                </div>
                                <div className="pro-grid-item">
                                    <Item label={"Address"} value={selectedMember?.address} />
                                </div>
                                <div className="pro-grid-item">
                                    <Item label={"Email"} value={email} />
                                </div>
                            </div>
                            <div className="flex fullwidth btn-member-schedule">
                                <Button
                                    className="btn-schedule"
                                    text={"View Schedule"}
                                    isPrimary={true}
                                    isWide={true}
                                    onClick={handleViewScheduleClick}  
                                />
                            </div>
                        </div>
                    </div>
                    <div className="member-profile-skills flex column fullwidth pt-40">
                        <div><h3>Skills</h3></div>
                        <hr/>
                        <div className="profile-sills-container fullwidth pt-20 p-10">
                            <div className="skill-grid-container fullwidth pt-20">

                            {skills && skills.map((skill, index) => (
                                <div className="skill-grid-item gap-20 flex" key={index}>
                                <span className="checked">{icons['tick']}</span>
                                <span className="m-skill fullwidth">{skill}</span>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className="member-profile-description flex column fullWidth pt-40">
                        <div><h3>Description</h3></div>
                        <hr/>
                        <div className="profile-description-container fullwidth pt-20">
                            <p>
                            {selectedMember?.description}
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
export default MemberProfile;