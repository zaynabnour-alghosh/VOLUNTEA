import React, { useState } from "react";
import {icons} from "../../icons.js";
import logo from '../../images/logo-mini.png';
import { Link } from "react-router-dom";
import './style.css';
import { sendRequest } from "../../config/request.js";
import ForgetPassword from "../ForgetPassword";
import Input from "../../main/components/common/input/index.jsx";
import Button from "../../main/components/common/button/index.jsx";
import SpaceModal from "../Spaces/index.jsx";
const Login=()=>{
    const [login,setLogin]=useState(true);
    const [isSpaceModalOpen, setIsSpaceModalOpen] = useState(false);
    const [organizations, setOrganizations] = useState([]);
    const showSpaceModal = () => {
        setIsSpaceModalOpen(true);
        
      };
    const toggleSpaceModal=()=>{
        setIsSpaceModalOpen(!isSpaceModalOpen);
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleUserLogin=async(e)=>{
        console.log("clicked");
        const userData = new FormData();

        userData.append('email', email);
        userData.append('password', password);
        setEmail('');
        setPassword('');
        try{
            const response=await sendRequest({
                method:"POST",
                route:"/guest/login",
                body:userData
            });
            if(response){
                console.log(response);
                setOrganizations(response.data.organizations);
                
                localStorage.setItem(
					"token",
					response.data.token
				);
                showSpaceModal();
                // localStorage.setItem("org_id",response.user.org.id)
                // setTimeout(() => {navigate(`/personal-info`)},1000);
            }
        }catch(error){
            console.log(error)
        }
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
                        <div className="login-row fullwidth flex">
                            <Input 
                                type={"email"} 
                                placeholder={"Email"}
                                icon={icons['email']}
                                noBorder={true}
                                fill={true}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="login-row pwd flex">
                            <div>
                            <Input 
                                type={"password"} 
                                placeholder={"Password"}
                                icon={icons['lock']}
                                noBorder={true}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                
                            />
                            </div>
                        </div>
                        <div className="btn-login">
                            <Button 
                                text={"Continue"}
                                isLight={true}
                                fill={true}
                                onClick={handleUserLogin}
                            />
                        </div>
                    </div>
                    <div className="content-bottom flex column center">
                        <div className="forget-pass" onClick={()=>setLogin(false)}>Forgot Password?</div>
                        <Link to='/'><div className="return">Back to Main</div></Link>
                    </div>
                </div>
                {isSpaceModalOpen && 
                <SpaceModal showSpaceModal={isSpaceModalOpen} onRequestClose={toggleSpaceModal} organizations={organizations}/>
                }   
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