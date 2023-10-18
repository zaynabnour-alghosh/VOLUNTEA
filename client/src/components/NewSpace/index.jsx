import React from "react";
import { useState } from "react";
import { icons } from "../../icons.js";
import logoS from "../../assets/logo-secondary.svg";
import { useNavigate } from 'react-router-dom';
import "./style.css";
import {requestPermission} from '../../firebase.js';
import Input from "../../main/components/common/input/index.jsx";
import Button from "../../main/components/common/button/index.jsx";
import ConfirmationModal from "../../main/components/ui/ConfirmationModal/index.jsx";
import { sendRequest } from "../../config/request.js";
const NewSpace=({onToggle,volunteer,code})=>{
    const requestFCMToken = window.requestFCMToken;
    const navigate = useNavigate();
    const [fullName,setFullName]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [organizationCode, setOrganizationCode] = useState('');
    const [user,setUser]=useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [fcmToken, setFCMToken] = useState(null);

    const [showConfirmationModal, setShowConfirmationModal] = useState(false); 
    const toggleConfirmationModal = () => {
        setShowConfirmationModal(!showConfirmationModal);
    };

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
      
    const handleVolunteerSignup=async()=>{
        if (!fullName || !email || !password || !code) {
            setErrorMessage('All fields are required.');
            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
            return;
        }

        
        console.log("clicked volunteer");
        const volunteerData = new FormData();
        volunteerData.append('name', fullName);
        volunteerData.append('email', email);
        volunteerData.append('password', password);
        volunteerData.append('code', code);
        try {
            const t =await requestPermission();
            const token=localStorage.getItem('fcmToken');
            setFCMToken(token);
            console.log("fcm",fcmToken);
            
          } catch (error) {
            console.error('error');
          }
        volunteerData.append('fcm_token', fcmToken);
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setOrganizationCode('');
        setLoading(true);
        try{
            const response=await sendRequest({
                method:"POST",
                route:"/guest/register/volunteer",
                body:volunteerData
            });
            setLoading(false);
            if(response){
                console.log(response);
                localStorage.setItem(
					"token",
					response.user.token
				);
                setShowConfirmationModal(true);
            }
        }catch(error){
            setLoading(false);
            console.log(error);
            setErrorMessage('Registration failed. Please try again.');
        }
    }

    const handleAdminSignup=async(e)=>{
        if (!fullName || !email || !password || !organizationCode) {
            setErrorMessage('All fields are required.');
            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
            return;
        }

        setLoading(true);
        console.log("clicked admin");
        const adminData = new FormData();

        adminData.append('name', fullName);
        adminData.append('email', email);
        adminData.append('password', password);
        adminData.append('code', organizationCode);
         try {
            const t =await requestPermission();
            const token=localStorage.getItem('fcmToken');
            setFCMToken(token);
            console.log("fcm",fcmToken);
            
          } catch (error) {
            console.error('error');
          }
        adminData.append('fcm_token', fcmToken);
        console.log(fullName,email,password,organizationCode);
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setOrganizationCode('');
        try{
            const response=await sendRequest({
                method:"POST",
                route:"/guest/register/admin",
                body:adminData
            });
            setLoading(false);
            if(response){
                console.log(response);
                localStorage.setItem(
					"token",
					response.user.token
				);
                localStorage.setItem("org_id",response.user.org.id)
                setShowConfirmationModal(true);

            }
        }catch(error){
            setLoading(false);
            console.log(error);
            setErrorMessage('Registration failed. Please try again.');
        
        }
    }
    const fillPersonal=(user)=>{
        console.log(user);
        if (volunteer){
        navigate(`/personal-info?volunteer=true`);
        }else{
            navigate(`/personal-info`);
        }
    }
    return (
        <div className="fill-registarion-container page flex center">
            <div className="fill-form flex column center">
                <div><img src={logoS} alt="logoS" /></div>
                
                <div className="fill-form-content flex column">
                    {volunteer? <span><h2>Join Our Space</h2></span>
                    :
                    <span><h2>Create Your Space</h2></span>                    
                    }
                    <div class="new-space-form flex column pt-10 gap-5">
                        <Input
                            icon={icons['profile']}
                            type={"text"}
                            placeholder={"Full Name"}
                            fill={true}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <Input
                            type={"email"}
                            icon={icons['email']}
                            placeholder={"Email Address"}
                            fill={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                        <Input
                            type={"password"}
                            icon={icons['lock']}
                            placeholder={"Password"}
                            fill={true}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            join={true}
                            

                        />
                    </div>
                    <br />
                    <hr/>
                    <div className="flex column gap-10 fullwidth">
                        
                        <div className="space-org-code pt-10">
                            <Input
                                type={"text"}
                                icon={icons['code']}
                                placeholder={"Organization"}
                                fill={true}
                                value={volunteer ? code : organizationCode}
                                readOnly={true}
                                onChange={(e) => volunteer ? setOrganizationCode(code) : setOrganizationCode(e.target.value)}
                                container={true}
                            />   
                        </div>
                        {errorMessage && <div className="error-message flex fullwidth center">{errorMessage}</div>}
                        {loading && <div className="loading-message flex fullwidth center">Loading...</div>}
                        <div className="space-btn flex fullwidth row gap-40 center">
                            {!volunteer && <Button 
                                onClick={generateRandomCode} 
                                text={"Generate"} 
                                isLight={true}
                                medium={true}
                            />}
                            <Button 
                                onClick={volunteer? handleVolunteerSignup:handleAdminSignup} 
                                text={"Next"} 
                                isLight={true}
                                medium={true}
                            /> 
                        </div>
                        {!volunteer && <div className="option-search">
                            Looking for an organization? &nbsp;<span onClick={() => onToggle()}>Look up</span>
                        </div>}

                    </div>
                                          
                    
                   
                    
                
                    
                </div>
            </div>
            {showConfirmationModal && 
                <ConfirmationModal 
                showConfirmationModal={showConfirmationModal}
                onRequestClose={toggleConfirmationModal}
                verify={true}
                setUser={setUser}
                fillPersonal={fillPersonal}
                volunteer={volunteer}
                />}
        </div>
    );
}
export default NewSpace;