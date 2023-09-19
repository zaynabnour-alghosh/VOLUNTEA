import React from "react";
import './style.css';
import logo from '../../images/logo-mini.png';
import { useState } from "react";
import Input from "../../main/components/common/input";
import Button from "../../main/components/common/button";
import { icons } from "../../icons";
const ForgetPassword=({onToggle})=>{

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
                            <div className="forget-row fullwidth flex">
                            <Input 
                                type={"email"} 
                                placeholder={"Email"}
                                icon={icons['email']}
                                noBorder={true}
                                fill={true}
                            />
                            </div>
                            <div className="forget-row fullwidth pwd flex">
                                <Input 
                                    type={"text"} 
                                    placeholder={"Token"}
                                    icon={icons['key']}
                                    noBorder={true}
                                    fill={true}
                                />
                            </div>
                            <div className="forget-row pwd flex">
                                <Input 
                                    type={"password"} 
                                    placeholder={"Password"}
                                    icon={icons['lock']}
                                    noBorder={true}
                                    // no_container={true}
                                />
                            </div>
                            <div className="btn-forget">
                            <Button 
                                text={"Confirm"}
                                isLight={true}
                                fill={true}
                            />
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