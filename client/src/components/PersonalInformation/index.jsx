import React from "react";
import './style.css';
import Input from "../../main/components/common/input";
import Button from "../../main/components/common/button";
import logoS from "../../assets/logo-secondary.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { sendRequest } from "../../config/request";
import FileInput from "../../main/components/common/file";
import ScheduleModal from "../../main/components/ui/ScheduleModal";
const PersonalInformation=()=>{
    const loc = useLocation();
    const queryParams = new URLSearchParams(loc.search);
    const isVolunteer = queryParams.get('volunteer') === 'true';
    const navigate=useNavigate();
    const [skill,setSkill]=useState('');
    const [skills,setSkills]=useState([]);

    const [description,setDescription]=useState('');
    const [avatar,setAvatar]=useState('');
    const [location,setLocation]=useState('');
    const [mobile,setMobile]=useState('');
    const [dob,setDob]=useState('');
    const [selectedGender, setSelectedGender] = useState("female");
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
    const [schedule, setSchedule] = useState([]);

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
    };
    const showScheduleModal = () => {
    setIsScheduleModalOpen(true);
    };
    const toggleScheduleModal=()=>{
    setIsScheduleModalOpen(!isScheduleModalOpen);
    }
    const addSchedule=async(data)=>{
        const newScheduleEntry = {
            day: data.get('weekday'),
            from: data.get('start_time'),
            to: data.get('end_time'),
          };    
        try{
            const response=await sendRequest({
                method:"POST",
                route:"/schedule/add",
                body:data,
                includeHeaders:true
            });
            if(response){
                setSchedule([...schedule, newScheduleEntry]);
                console.log(response);
            }
        }catch(error){
            console.log(error)
        }

    }
    const handlePersonalDetails=async(e)=>{
        console.log("clicked");
        if (!description || !location || !dob || !mobile || !avatar || !selectedGender) {
            setError('Please fill in all the fields.');
            return;
        }
        if (skills.length !== 6) {
            setError('Please add exactly 6 skills.');
            return;
        }
        console.log("clicked info");
        const personalData=new FormData();
        personalData.append('description',description);
        personalData.append("gender", selectedGender);
        personalData.append('address',location);
        personalData.append('mobile',mobile);
        personalData.append('avatar_url',avatar);
        personalData.append('dob',dob);
        const skillData=new FormData();
        skills.forEach((skill, index) => {
            skillData.append(`skills[${index}]`, skill);
          });
        console.log(description,location,dob,mobile,avatar,selectedGender);
        try{
            const response=await sendRequest({
                method:"POST",
                route:"/profile/add",
                body:personalData,
                includeHeaders:true
            
            });
            const response2=await sendRequest({
                method:"POST",
                route:"/skills",
                body:skillData,
                includeHeaders:true
            
            });
            if(response && response2){
                console.log(response);
                console.log(response2);
                if(isVolunteer){
                 navigate(`/login`);
                }
                else{
                    setSuccessMessage('Personal information and skills added successfully!');
                    setTimeout(() => { navigate(`/fill-organization-info`) }, 1000);
                }
            }
        }catch(error){
            console.log(error)
        }
    }

    return(
           <div className="fill-personal-container page flex">
                <div className="fill-personal flex column gap-30">
                    <div className=" logo-img pt-10 flex"><img src={logoS} alt="logoS" /></div>
                    <div className="personal-info-container  flex column">
                        <span class="flex fullwidth center"><h2>Add Personal Information</h2></span>
                        <div class="personal-form flex pt-10 gap-5">
                            <div className="persoanl-left flex fullwidth p-10 column gap-10">
                                <Input
                                    label={"Description"}
                                    type={"text"}
                                    placeholder={"Description"}
                                    fill={true}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <div className="fullwidth user-file">
                                    <Input
                                        label={"Avatar"}
                                        type={"file"}
                                        fill={true}
                                        onChange={(e)=>setAvatar(e.target.files[0])}

                                    />
                                </div>                                
                                <div className="other-personal-info flex row gap-20 fullwidth">
                                    <div className="other flex column gap-10 fullwidth">
                                        <Input
                                            label={"Location"}
                                            type={"text"}
                                            placeholder={"Location"}
                                            fill={true}
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                        />
                                        <Input
                                            label={"Mobile"}
                                            type={"text"}
                                            placeholder={"Mobile"}
                                            fill={true}
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                        />
                                    </div>
                                    <div className="other flex column fullwidth">
                                        <div className="user-gender flex column fullwidth ">
                                            <label htmlFor="gender">Gender</label>
                                            <select 
                                                name="gender" 
                                                className="gender select"
                                                value={selectedGender}
                                                onChange={handleGenderChange}
                                            >
                                                <option value="femal">Female</option>
                                                <option value="male">Male</option>
                                            </select>
                                        </div>
                                        <Input
                                            label={"Date of Birth"}
                                            type={"date"}
                                            fill={true}
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}
                                        />
                                    </div>
                                </div> 
                            </div>
                            <div className="personal-right flex column p-10 gap-10 fullwidth">
                                <div className="pt-15">
                                    <Button
                                        text={"Schedule"}
                                        isAction={true}
                                        isWide={true}
                                        onClick={showScheduleModal}

                                    />
                                </div>
                                <div className="personal-schedule flex column gap-20">
                                    {schedule.map((entry, index) => (
                                        <div className="weekday-info flex fullwidth gap-10" key={index}>
                                        <div className="grid week-grid-container">
                                            <div className="week-grid-item">{entry.day}</div>
                                            <div className="week-grid-item">From: {entry.from}</div>
                                            <div className="week-grid-item">To: {entry.to}</div>
                                        </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-15">
                                    <Input
                                        type={"text"}
                                        placeholder={"skills (required 6)"}
                                        value={skill}
                                        fill={true}
                                        onChange={(e)=>setSkill(e.target.value)}
                                        onKeyDown={()=>{ 
                                            setSkills((prevSkills) => [...prevSkills, skill.trim()]);
                                            setSkill('');
                                        }}

                                    />
                                </div>
                                <div className="personal-schedule fullwidth flex center gap-20">
                                    {skills.map((skill, index) => (
                                    <div key={index}>{skill}</div>
                                    ))}
                                </div>

                                {error && <div className="error-message flex fullwidth center">{error}</div>}
                                {successMessage && <div className="success-message flex fulwidth center">{successMessage}</div>}


                                <div className="add-info-btn flex fullwidth  pt-20 center">
                                    <Button
                                        text={"Add"}
                                        isLight={true}
                                        medium={true}
                                        onClick={handlePersonalDetails}
                                />
                                </div>
                            </div>                            
                        </div>                                      
                    </div>
                </div>
                {isScheduleModalOpen && <ScheduleModal 
                                            addSchedule={addSchedule} 
                                            showScheduleModal={isScheduleModalOpen}
                                            onRequestClose={toggleScheduleModal}
                                            />}
            </div> 
    );
}
export default PersonalInformation;