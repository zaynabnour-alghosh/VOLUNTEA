import React from "react";
import { useState } from "react";
import {BsFillPersonFill,BsFillLockFill,BsPeopleFill} from "react-icons/bs"
import {MdEmail} from 'react-icons/md';
import {FaKey} from 'react-icons/fa';
import {BiCalculator } from 'react-icons/bi';
import logoS from "../../assets/logo-secondary.svg";
import "./style.css";
const NewSpace=({onToggle})=>{
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
    return (
        <div className="fill-registarion-container page flex center">
            <div className="fill-form flex column center">
                <div><img src={logoS} alt="logoS" /></div>
                <span><h2>Create Your Space</h2></span>
                <div className="fill-form-content flex column">
                    <div className="row">
                        <div className="input flex row">
                            <span><BsFillPersonFill/></span>
                            <input type="text" placeholder="Full Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input flex row">
                            <span><MdEmail/></span>
                            <input type="text" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input flex row">
                            <span><BsFillLockFill/></span>
                            <input type="text" placeholder="Password" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input flex row">
                            <span><FaKey/></span>
                            <input type="text" placeholder="Confirm Password" />
                        </div>
                    </div>
                    <hr/>
                    <div className="row ">
                        <div className="input flex row">
                            <span><BsPeopleFill/></span>
                            <input type="text" placeholder="Organization Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input flex row">
                            <span><BiCalculator/></span>
                            <input 
                                type="text" 
                                placeholder="Organization Code" 
                                value={organizationCode}
                                readOnly
                            />
                        </div>
                        
                    </div>
                    <button onClick={generateRandomCode}>Generate</button>
                    <button className="btnSpace">Register</button>

                
                    <div className="option-search">
                        Looking for an orgamization?<span onClick={() => onToggle()}>Look up</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NewSpace;