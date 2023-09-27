import React from "react";
import './style.css';
import { useState } from "react";
import Input from "../../common/input";
import {icons} from "../../../../icons.js";
import Button from "../../common/button";
import ModalComponent from "../../common/modal";
import { sendRequest } from "../../../../config/request";
import { useNavigate } from "react-router-dom";
const ConfirmationModal=({body,confirm,cancel,volunteer,fillPersonal,setUser,showConfirmationModal , onRequestClose,verify})=>{
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            height: 'fit-content',
            width: '30%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '5px',
            padding:'20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',

           
        },
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.6)',
            top: 0,
            left:0,
            right: 0,
            bottom: 0,
            display:'flex',
            justifyContent:'flex-end',
            width:'100%'
        }
    };
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [message,setMessage]=useState('');
    const verifyUser=async()=>{
        if (verify){
            const data=new FormData();
            data.append('email',email);
            data.append('token',token);
            try{
                const response=await sendRequest({
                    method:"POST",
                    route:"/guest/verify-email",
                    body:data
                });
                if(response){
                    console.log(response);
                   
                    if(response.verification_status==true)
                    setMessage(response.message);
                    setUser(response);
                    fillPersonal(response.user);
                }
            }catch(error){
                console.log(error)
            }
        }
    }
    const logout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('organizationId');
        localStorage.removeItem('role');
        navigate('/login');
    }
    return(
        <div>
            <ModalComponent customStyles={customStyles} showModal={showConfirmationModal} onRequestClose={onRequestClose} >
                <div className="confirmation-modal-cotainer flex column center">
                    <div className="confirm-body flex  column p-30 center">
                       {verify && <>
                        <p>We sent you a verification email</p>
                            <div className="verify-content pt-20">
                                <Input 
                                type={"email"} 
                                placeholder={"Email"}
                                icon={icons['email']}
                                fill={true}
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                            <Input 
                                type={"text"} 
                                placeholder={"Token"}
                                icon={icons['key']}
                                fill={true}
                                value={token}
                                onChange={(e)=>setToken(e.target.value)}
                            /> 
                            </div>
                        {message && <h4>{message}</h4>}
                            
                        </>}
                        {!verify &&<p>Are you sure you want to proceed?</p>}
                    </div>
                    <div className="confirm-actions fullwidth flex row gap-30 center p-10">
                        <Button
                            text={"Cancel"}
                            isPrimary={true}
                            medium={true}
                            onClick={()=>{onRequestClose();}}
                        />
                        <Button
                            text={"Confirm"}
                            isPrimary={true} 
                            medium={true}
                            onClick={verify?verifyUser:logout}                            
                        />
                        </div>
                </div>
            </ModalComponent>
        </div>
    );
}
export default ConfirmationModal;