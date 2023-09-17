import React from "react";
import { useState } from "react";
import {BsFillPersonFill,BsFillLockFill,BsPeopleFill} from "react-icons/bs"
import {MdEmail} from 'react-icons/md';
import { icons } from "../../icons.js";
import {FaKey} from 'react-icons/fa';
import {BiCalculator } from 'react-icons/bi';
import logoS from "../../assets/logo-secondary.svg";
import { useNavigate } from 'react-router-dom';
import "./style.css";
import Input from "../../main/components/common/input";
import Button from "../../main/components/common/button/index.jsx";
const NewSpace=({onToggle})=>{
    const navigate = useNavigate();
    const [organizationCode, setOrganizationCode] = useState('');
    const generateRandomCode=()=>{
    const alphanumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const length = 10;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
        result += alphanumericChars.charAt(randomIndex);
    }
    setOrganizationCode(result);
    }
    const createOrganization=()=>{
        navigate('/fill-organization-info');
    }
    return (
        <div className="fill-registarion-container page flex center">
            <div className="fill-form flex column center">
                <div><img src={logoS} alt="logoS" /></div>
                
                <div className="fill-form-content flex column">
                    <span><h2>Create Your Space</h2></span>
                    <div class="new-space-form flex column pt-10 gap-5">
                        <Input
                            icon={icons['profile']}
                            type={"text"}
                            placeholder={"Full Name"}
                            fill={true}
                        />
                        <Input
                            type={"email"}
                            icon={icons['email']}
                            placeholder={"Email Address"}
                            fill={true}
                        />
                        <Input
                            type={"password"}
                            icon={icons['lock']}
                            placeholder={"Password"}
                            fill={true}
                        />
                        <Input
                            type={"password"}
                            icon={icons['key']}
                            placeholder={"Confirm Password"}
                            fill={true}
                        />
                    </div>
                    <hr/>
                    <div className="flex column gap-10 fullwidth">
                        
                        <div className="space-org-code pt-10">
                            <Input
                                type={"text"}
                                icon={icons['code']}
                                placeholder={"Organization"}
                                fill={true}
                                readOnly={true}
                                value={organizationCode}
                            />   
                        </div>
                        <div className="space-btn flex fullwidth row gap-40 center">
                            <Button 
                                onClick={generateRandomCode} 
                                text={"Generate"} 
                                isLight={true}
                                medium={true}
                            />
                            <Button 
                                onClick={()=>{navigate('/fill-organization-info');}} 
                                text={"Next"} 
                                isLight={true}
                                medium={true}
                            /> 
                        </div>
                        <div className="option-search">
                            Looking for an organization?<span onClick={() => onToggle()}>Look up</span>
                        </div>

                    </div>
                                          
                    
                   
                    
                
                    
                </div>
            </div>
        </div>
    );
}
export default NewSpace;