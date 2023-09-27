import React from "react";
import './style.css';
import { sendRequest} from "../../config/request";
import logo from '../../images/logo-mini.png';
import { useState } from "react";
import Input from "../../main/components/common/input";
import Button from "../../main/components/common/button";
import { icons } from "../../icons";
const ForgetPassword=({onToggle})=>{
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const resetPass=async()=>{
        if (!email ||!token || !password) {
            setErrorMessage('Please fill in all fields.');
            setTimeout(() => {
                setErrorMessage('');
              }, 5000);
              return;
          }
          setErrorMessage('');
          setLoading(true);
          const data = new FormData();

          data.append('email', email);
          data.append('password', password);
          data.append('token', token);

        setEmail('');
        setPassword('');
        setToken('');
        try{
            const response=await sendRequest({
                method:"POST",
                route:"/guest/password/reset/verify",
                body:data
            });
            if(response){
                setSuccessMessage('SUCCESS');
                setTimeout(() => {
                setSuccessMessage('');
              }, 1000);
              
              setLoading(false);
              console.log(response);
              setTimeout(() => {
                onToggle();
            }, 2000);
               
            };
        }catch(error){
            console.log(error)
            setLoading(false);
        }

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
                            <div>Reset password email Sent! <br/>Enter a valid email and reset your password</div>
                        </div>
                        <div className="content-form flex column">
                            <div className="forget-row fullwidth flex">
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
                            <div className="forget-row fullwidth pwd flex">
                                <Input 
                                    type={"text"} 
                                    placeholder={"Token"}
                                    icon={icons['key']}
                                    noBorder={true}
                                    fill={true}
                                    value={token}
                                    onChange={(e) => setToken(e.target.value)}
                                />
                            </div>
                            <div className="forget-row pwd flex">
                                <Input 
                                    type={"password"} 
                                    placeholder={"Password"}
                                    icon={icons['lock']}
                                    noBorder={true}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {errorMessage && (
                            <div className=" fullwidth flex center error-message">{errorMessage}</div>
                            )}
                            {successMessage && (
                            <div className=" fullwidth flex center success-message">{successMessage}</div>
                            )}
                            <div className="btn-forget">
                            <Button 
                                text={loading ? 'Loading...' : 'Confirm'}
                                isLight={true}
                                fill={true}
                                onClick={resetPass}
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