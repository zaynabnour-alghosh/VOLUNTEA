import React from "react";
import './style.css';
import logo from '../../images/logo-mini.png';
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import {BsFillLockFill} from "react-icons/bs";
import {FaKey} from 'react-icons/fa';
import { useState } from "react";
const ForgetPassword=({onToggle})=>{
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(e)=>{
        setPasswordInput(e.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }

    return(
        <div className="page flex center">
            <div className="forget-container flex column center">
                    <div className="top">
                        <img src={logo} alt="logoP" />
                    </div>
                    <div className="forget-content flex column">
                        <div className="content-top">
                            <h3>Reset Password</h3>
                            <div>Enter a valid email and reset your password</div>
                        </div>
                        <div className="content-form flex column">
                            <div className="forget-row flex">
                                <span><MdEmail /></span>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="forget-row pwd flex">
                                <div>
                                    <span><BsFillLockFill/></span>
                                    <input 
                                        type={passwordType}
                                        placeholder="New Password"
                                        onChange={handlePasswordChange}    

                                    />
                                </div>
                                <span onClick={togglePassword}>
                                    {passwordType==="password"? <AiFillEyeInvisible/>:<AiFillEye/>}
                                </span>
                            </div>
                            <div className="forget-row pwd flex">
                                <div>
                                    <span><FaKey/></span>
                                    <input 
                                        type={passwordType} 
                                        placeholder="Confirm Password" 
                                        onChange={handlePasswordChange}    
                                    />
                                </div>
                                <span onClick={togglePassword}>
                                    {passwordType==="password"? <AiFillEyeInvisible/>:<AiFillEye/>}
                                </span>
                            </div>
                            <div className="btn-forget">
                                <button>Continue</button>
                            </div>
                        </div>
                        <div className="content-bottom flex column center">
                            <div className="return" onClick={()=>onToggle()}>Return to Login</div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default ForgetPassword;