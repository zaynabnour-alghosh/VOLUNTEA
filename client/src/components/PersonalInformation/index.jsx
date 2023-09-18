import React from "react";
import './style.css';
import Input from "../../main/components/common/input";
import Button from "../../main/components/common/button";
import logoS from "../../assets/logo-secondary.svg";
import { useNavigate } from "react-router-dom";
const PersonalInformation=()=>{
    const navigate=useNavigate();
    return(
           <div className="fill-personal-container page flex">
                <div className="fill-personal flex column gap-30">
                    <div className=" logo-img pt-10 flex"><img src={logoS} alt="logoS" /></div>
                    <div className="personal-info-container  flex column">
                        <span class="flex fullwidth center"><h2>Add Personal Information</h2></span>
                        <div class="personal-form flex pt-10 gap-5">
                            <div className="persoanl-left flex fullwidth p-10 column gap-10">
                                <Input
                                    label={"Name"}
                                    type={"text"}
                                    placeholder={"Full Name"}
                                    fill={true}
                                />
                                <Input
                                    label={"Description"}
                                    type={"textarea"}
                                    placeholder={"Description"}
                                    fill={true}
                                />
                                <div className="fullwidth user-file">
                                    <Input
                                        label={"Avatar"}
                                        type={"file"}
                                        fill={true}
                                    />
                                </div>                                
                                <div className="other-personal-info flex row gap-20 fullwidth">
                                    <div className="other flex column gap-10 fullwidth">
                                        <Input
                                            label={"Location"}
                                            type={"text"}
                                            placeholder={"Location"}
                                            fill={true}
                                        />
                                        <Input
                                            label={"Mobile"}
                                            type={"text"}
                                            placeholder={"Mobile"}
                                            fill={true}
                                        />
                                    </div>
                                    <div className="other flex column gap-25 fullwidth">
                                        <div className="user-gender flex column fullwidth ">
                                            <label htmlFor="gender">Gender</label>
                                            <select name="gender" id="" className="gender select">
                                                <option value="">Female</option>
                                                <option value="">Male</option>
                                            </select>
                                        </div>
                                        <Input
                                            label={"Date of Birth"}
                                            type={"date"}
                                            fill={true}
                                        />
                                    </div>
                                </div> 
                            </div>
                            <div className="personal-right flex column p-10 gap-10 fullwidth">
                                <div className="pt-15">
                                    <Button
                                        text={"Schedule"}
                                        isAction={true}
                                        isWide={true}
                                    />
                                </div>
                                <div className="personal-schedule flex column gap-20">
                                    <div className="weekday-info flex fullwidth gap-10">
                                        <div className="grid week-grid-container">
                                            <div className="week-grid-item">Mon</div>
                                            <div className="week-grid-item">From: 10:00 </div>
                                            <div className="week-grid-item">To: 10:00 </div>
                                        </div>
                                    </div>
                                    <div className="weekday-info flex fullwidth gap-10">
                                        <div className="grid week-grid-container">
                                            <div className="week-grid-item">Mon</div>
                                            <div className="week-grid-item">From: 10:00 </div>
                                            <div className="week-grid-item">To: 10:00 </div>
                                        </div>
                                    </div>
                                    <div className="weekday-info flex fullwidth gap-10">
                                        <div className="grid week-grid-container">
                                            <div className="week-grid-item">Mon</div>
                                            <div className="week-grid-item">From: 10:00 </div>
                                            <div className="week-grid-item">To: 10:00 </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="add-info-btn flex fullwidth  pt-20 center">
                                    <Button
                                        text={"Add"}
                                        isLight={true}
                                        medium={true}
                                        onClick={()=>navigate('/fill-organization-info')}
                                />
                                </div>
                            </div>                            
                        </div>                                      
                    </div>
                </div>
            </div> 
    );
}
export default PersonalInformation;