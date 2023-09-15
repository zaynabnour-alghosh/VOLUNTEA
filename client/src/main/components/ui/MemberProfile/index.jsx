import React from "react";
import './style.css';
import Header from "../../common/header";
import Button from "../../common/button";
import Item from "../../common/item";
import {icons} from "../../../icons.js"
const MemberProfile=()=>{
    return(
        <div className="member-profile-container fullwidth flex column scroll">
            <Header 
                profile={true}
                name={"Jane Doe"}            
            />
            <div className="member-profile-personal flex column fullwidth pt-40">
                <div><h3>Personal</h3></div>
                <hr/>
                <div className="profile-personal-container fullwidth flex column gap-20">
                <div className="pro-grid-container pt-20">
                    <div className="pro-grid-item">
                        <Item label={"Full Name"} value={"Jane Doe"} />
                    </div>
                    <div className="pro-grid-item">
                        <Item label={"Gender"} value={"Female"} />
                    </div>
                    <div className="pro-grid-item">
                        <Item label={"Birth Date"} value={"22/02/2002"} />
                    </div>
                    <div className="pro-grid-item">
                        <Item label={"Phone"} value={"+ (961) 01 123123"} />
                    </div>
                    <div className="pro-grid-item">
                        <Item label={"Address"} value={"Beirut, Lebanon"} />
                    </div>
                    <div className="pro-grid-item">
                        <Item label={"Email"} value={"janeDoe@mail.com"} />
                    </div>
                </div>
                <div className="flex fullwidth btn-member-schedule">
                    <Button
                        className="btn-schedule"
                        text={"View Schedule"}
                        isPrimary={true}
                        isWide={true}  
                    />
                </div>
                </div>
            </div>
            <div className="member-profile-skills flex column fullwidth pt-40">
                <div><h3>Skills</h3></div>
                <hr/>
                <div className="profile-sills-container fullwidth pt-20 p-10">
                    <div className="skill-grid-container fullwidth pt-20">
                        <div className="skill-grid-item gap-20 flex">
                           <span className="checked">{icons['tick']}</span>
                           <span className="m-skill">Communication</span>
                        </div>
                        <div className="skill-grid-item gap-20 flex">
                           <span className="checked">{icons['tick']}</span>
                           <span className="m-skill">Communication</span>
                        </div>
                        <div className="skill-grid-item gap-20 flex">
                           <span className="checked">{icons['tick']}</span>
                           <span className="m-skill">Communication</span>
                        </div>
                        <div className="skill-grid-item gap-20 flex">
                           <span className="checked">{icons['tick']}</span>
                           <span className="m-skill">Communication</span>
                        </div>
                        <div className="skill-grid-item gap-20 flex">
                           <span className="checked">{icons['tick']}</span>
                           <span className="m-skill">Communication</span>
                        </div>
                        <div className="skill-grid-item gap-20 flex">
                           <span className="checked">{icons['tick']}</span>
                           <span className="m-skill">Communication</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="member-profile-description flex column fullWidth pt-40">
                <div><h3>Description</h3></div>
                <hr/>
                <div className="profile-description-container fullwidth pt-20">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec tempor vestibulum ante, quis eleifend urna venenatis ut. 
                    Vivamus eu enim auctor elit vestibulum fermentum. 
                    Nullam vitae tellus a neque consectetur iaculis non non lorem.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default MemberProfile;