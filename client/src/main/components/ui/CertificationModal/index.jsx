import React from "react";
import './style.css';
import Button from './../../common/button';
import Input from "../../common/input";
import { sendRequest } from "../../../../config/request";
import { useState,useEffect } from "react";

import ModalComponent from "../../common/modal";
const CertificationModal=({showModal , onRequestClose,members})=>{
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            height: 'fit-content',
            width: '40%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '20px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            padding:'0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
           
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
        },
        modal:{
          position:'absolute',
          width:'max-content',
          top:0,
          right:0,
          bottom:0,
          left:'auto'
        }
    
    };
    console.log(members);
    useEffect(() => {
        const getOpps=async()=>{
        try{
            const response=await sendRequest({
                method:"GET",
                route:`opportunities/${id}/all`,
                body:"",
                includeHeaders:true
            });
            if(response){
                console.log(response);
                setOpps(response.data);
            }
            }catch(error){
                console.log(error)
            }
        }
        getOpps();
    }, []);
    const [content, setContent] = useState("");
    const [opps,setOpps]=useState([]);
    const id=localStorage.getItem("organizationId");
    const [member,setMember]=useState(null);
    const [opp,setOpp]=useState(null);
    const handleMemberChange=(e)=>{
        const selectedMemberId = e.target.value;
        setMember(selectedMemberId);
    }
    const handleOppChange=(e)=>{
        const selectedOppId = e.target.value;
        console.log("opp",selectedOppId);
        setOpp(selectedOppId);
    }

    const handleCertify =async() => {
        console.log("click");
        
        console.log("Certifying for opportunity", opp, "and member", member);
       
        const data=new FormData();
        data.append('volunteer_id',member);        
        data.append('opp_id',opp);
        data.append('content',content);
        console.log("hi",opp,member);
        try{
            const response=await sendRequest({
                method:"POST",
                route:"/admin/new-certification",
                body:data,
                includeHeaders:true
            });
            if(response){
                console.log(response);
                onRequestClose();
            }
            }catch(error){
                console.log(error)
            }
    };
    

    return(
        <div >
            <ModalComponent customStyles={customStyles} showModal={showModal} onRequestClose={onRequestClose} >
                <div className='certification-form-container flex fullwidth column'>
                    <div className="new-certification-header flex ">
                        <span>New Certification</span>
                    </div>
                    <div className="new-certification-form-container flex column fullwidth">
                        <div className="certification-form  flex column center">
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <label htmlFor="opp">Opportunity</label>
                                    <select name="opp" 
                                        value={opp}
                                        onChange={handleOppChange}
                                        className="pt-10 fullwidth opp-list select">
                                        {opps.map((opp, index) => (
                                        <option value={opp.id} key={index}>{opp.name}</option>
                                        ))}
                                        </select>
                                </span>
                            </div>
                            <div className="fullwidth flex column">
                            <span className="pt-10">
                                <label htmlFor="volunteer">Volunteer</label>
                                <select name="volunteer" 
                                    value={member} 
                                    onChange={handleMemberChange} 
                                    className="pt-10 fullwidth header-list select">
                                    {members.map((member, index) => (
                                    <option value={member.id} key={index}>{member.name}</option>
                                    ))}
                                </select>
                            </span>
                            </div>
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Description"}
                                        placeholder={"description"}
                                        type={"textarea"}
                                        fill={true}
                                        value={content}
                                        onChange={(e)=>setContent(e.target.value)}
                                    />
                                </span>
                            </div>
                            <div className="btn-add-certification flex ">
                                <Button 
                                    text={"CERTIFY"}
                                    isSecondary={true}
                                    onClick={handleCertify}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </div>
    );
}
export default CertificationModal;