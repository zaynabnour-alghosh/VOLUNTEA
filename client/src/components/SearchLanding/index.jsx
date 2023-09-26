import React from "react";
import '../NewSpace/style.css';
import logoS from "../../assets/logo-secondary.svg";
import './style.css';
import {icons} from "../../icons.js";
import Input from "../../main/components/common/input";
import Button from "../../main/components/common/button";
import { useNavigate } from "react-router-dom";
import { sendRequest } from "../../config/request";
import { useState } from "react";
const SearchLanding=({onToggle,setOrgInfo})=>{
    const navigate=useNavigate();
    const [organizationCode, setOrganizationCode] = useState("");
    const handleSearch = async () => {
        try{
            const response=await sendRequest({
                method:"GET",
                route:`organization-landing/${organizationCode}`,
                body:'',
            });
            if(response){
                console.log(response);
                setOrgInfo(response.data);
                navigate(`/voluntea/organization/${response.data.name}`);
            }
        }catch(error){
            console.log(error)
        }
      };
    return (
        <div className="fill-registarion-container page flex center">
            <div className="fill-form flex column center">
                <div><img src={logoS} alt="logoS" /></div>                
                <div className="fill-form-content flex column gap-20">
                    <span><h2>Enter the code</h2></span>
                    <div className="pt-10">
                        <Input
                            icon={icons['people']}
                            type={"text"}
                            placeholder={"Organization Code"}
                            fill={true}
                            value={organizationCode}
                            onChange={(e) => setOrganizationCode(e.target.value)}
                        />
                    </div>
                    <div className="fullwidth flex center">
                        <Button 
                            text={"Search"} 
                            isLight={true}
                            medium={true}
                            onClick={handleSearch}
                        />
                    </div>
                
                    <div className="option-search">
                        <span onClick={() => onToggle()}> Back</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SearchLanding;