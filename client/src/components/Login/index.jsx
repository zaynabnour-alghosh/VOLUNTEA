import React, { useState } from "react";
import {icons} from "../../icons.js";
import logo from '../../images/logo-mini.png';
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import {BsFillLockFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import './style.css';
import ForgetPassword from "../ForgetPassword";
import Input from "../../main/components/common/input/index.jsx";
import Button from "../../main/components/common/button/index.jsx";
const Login=()=>{
    const [login,setLogin]=useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return(
        <>
            {login?
            <div className="page login-page flex center">
            <div className="login-container flex column center">
                <div className="top">
                    <img src={logo} alt="logoP" />
                </div>
                <div className="login-content flex column">
                    <div className="content-top">
                        <h3>Login</h3>
                        <div>Voluntea App</div>
                    </div>
                    <div className="content-form flex column">
                        <div className="login-row fullwidth flex">
                            <Input 
                                type={"email"} 
                                placeholder={"Email"}
                                icon={icons['email']}
                                noBorder={true}
                                fill={true}
                            />
                        </div>
                        <div className="login-row pwd flex">
                            <div>
                            <Input 
                                type={"password"} 
                                placeholder={"Password"}
                                icon={icons['lock']}
                                noBorder={true}
                                
                            />
                            </div>
                        </div>
                        <div className="btn-login">
                            <Button 
                                text={"Continue"}
                                isLight={true}
                                fill={true}
                            />
                        </div>
                    </div>
                    <div className="content-bottom flex column center">
                        <div className="forget-pass" onClick={()=>setLogin(false)}>Forgot Password?</div>
                        <Link to='/'><div className="return">Back to Main</div></Link>
                    </div>
                </div>
            </div>
        </div>
        :
        <div className="forget">
        <ForgetPassword onToggle={()=>setLogin(true)}/>
        </div>
        }
            
           
        </>
    );
}
export default Login;