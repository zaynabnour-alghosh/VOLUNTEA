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
const SearchLanding=({onToggle,setOrgInfo,setImpacts,setMissions,setEvents,setAll})=>{
    const navigate=useNavigate();
    const [organizationCode, setOrganizationCode] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSearch = async () => {
        if (!organizationCode) {
            setErrorMessage('Organization code is required.');
            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
            return;
        }
         setLoading(true);
        try{
            const response=await sendRequest({
                method:"GET",
                route:`organization-landing/${organizationCode}`,
                body:'',
            });
            setLoading(false);
            if(response){
                console.log(response);
                setAll(response);
                setOrgInfo(response.data);
                setImpacts(response.impacts);
                setMissions(response.missions);
                setEvents(response.events);
                navigate(`/voluntea/organization/${response.data.name}`);
            }
        }catch(error){
            console.log(error)
            navigate('/404');
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
                    {errorMessage && <div className="error-message flex fullwidth center">{errorMessage}</div>}
                    <div className="fullwidth flex center">
                        <Button 
                            text={loading ? "Searching..." : "Search"} 
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