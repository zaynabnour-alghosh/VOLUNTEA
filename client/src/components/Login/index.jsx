import React, { useState } from "react";
import logo from '../../images/logo-mini.png';
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import {BsFillLockFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import './style.css';
import ForgetPassword from "../ForgetPassword";
const Login=()=>{
    const [login,setLogin]=useState(true);
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
                        <div className="login-row flex">
                            <span><MdEmail /></span>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="login-row pwd flex">
                            <div>
                                <span><BsFillLockFill/></span>
                                <input 
                                    type={passwordType} 
                                    placeholder="Password" 
                                    onChange={handlePasswordChange}    
                                />
                            </div>
                            <span onClick={togglePassword}>
                                {passwordType==="password"? <AiFillEyeInvisible/>:<AiFillEye/>}
                            </span>
                        </div>
                        <div className="btn-login">
                            <button>Continue</button>
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