import React from "react";
import './style.css';
import { useState } from "react";
import Input from "../../common/input";
import Button from "../../common/button";
import { sendRequest } from "../../../../config/request";
import MemberSchedule from "../MemberSchedule";
const Profile=({userInfo})=>{
    const [showSchedule, setShowSchedule] = useState(false);
    const [username, setUsername] = useState(userInfo? userInfo.name:"");
    const [userEmail, setUserEmail] = useState(userInfo ? userInfo.email: "");
    const [mobile, setMobile] = useState(userInfo? userInfo.profile.mobile : "");
    const [address, setAddress] = useState(userInfo? userInfo.profile.address: "");
    const [description, setDescription] = useState(userInfo? userInfo.profile.description: "");
    const [dob, setDob] = useState(userInfo? userInfo.profile.dob: "");
    const [selectedGender, setSelectedGender] = useState(userInfo? userInfo.profile.gender: "");
    const [avatar, setAvatar] = useState(userInfo? userInfo.profile.avatar_url: "");
    const [userSkills, setSkills] = useState(userInfo? userInfo.skills: []);
    const [skill, setSkill] = useState('');
    const [userSchedule, setSchedule] = useState(userInfo? userInfo.schedule: []);
    const [newSkills, setNewSkills] = useState(userSkills);    
    const handleViewScheduleClick = () => {
        setShowSchedule(true);
    };
    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
    };

    const editProfile=async(info)=>{

        const userData=new FormData();
        userData.append('name',info.name);
        userData.append('email',info.userEmail);
        userData.append('gender',info.selectedGender);
        userData.append('address',info.address);
        userData.append('dob',info.dob);
        userData.append('description',info.description);
        userData.append('mobile',info.mobile);
        userData.append('avatar_url',info.avatar);
        try{
            const response=await sendRequest({
                method:"POST",
                route:"/profile/update",
                body:userData,
                includeHeaders:true
            });
            if(response){
                console.log(response);
                setAvatar(`http://localhost:8000/storage/images/profiles/${response.profile.avatar_url}`);
                
            }
        }catch(error){
            console.log(error)
        }
    }
    console.log(userSchedule);
    return(
    <div className="fullwidth">
        {showSchedule ? (
            <MemberSchedule schedule={userSchedule} goBack={() => setShowSchedule(false) }  auth={true}/>
        ) : (
            <>
                <div className="profile-main-content fullwidth ">
                    <div className="profile-container fullWidth flex column">
                        <div className="profile-top-container   flex column spaceBetween">
                            <div className="profile-avatar-container flex row spaceBetween">
                                <div className="profile-avatar-img flex row ">
                                    <div className="profile-img">
                                        <img src={`http://localhost:8000/storage/images/profiles/${userInfo?.profile.avatar_url}`} alt="prfile" />
                                    </div>
                                    <input type="file" 
                                    onChange={(e)=>setAvatar(e.target.files[0])}
                                    />
                                </div>
                                <div className=" profile-edit">
                                    <Button 
                                        text={"Edit"}
                                        isPrimary={true}
                                        medium={true}
                                        onClick={() => editProfile({
                                            username,
                                            description,
                                            avatar,
                                            address,
                                            mobile,
                                            userEmail,
                                            selectedGender,
                                            dob,
                                        })}
                                    />
                                </div>
                            </div>
                            <div className="profile-form-container  flex row fullWidth gap-20">
                                <div className="profile-col1 flex column gap-20 fullWidth">
                                    <div className="profile-col1-row1 gap-20 flex row">
                                        <div className="profile-form-row flex gap-10 column">
                                            <Input
                                                label={"First Name"}
                                                placeholder={"first name"}
                                                type={"text"}
                                                value={userInfo ? userInfo.name : ""}
                                                onChange={(e)=>setUsername(e.target.value)}
                                                
                                            />
                                            <div className="user-gender flex column fullwidth ">
                                                <label htmlFor="gender">Gender</label>
                                                <select 
                                                    name="gender" 
                                                    className="gender select mt-5"
                                                    value={selectedGender}
                                                    onChange={handleGenderChange}
                                                >
                                                    <option value="femal">Female</option>
                                                    <option value="male">Male</option>
                                                </select>
                                            </div>
                                            <Input
                                                label={"Email"}
                                                placeholder={"Email"}
                                                type={"email"}
                                                value={userInfo ? userInfo.email : ""}
                                                onChange={(e)=>setUserEmail(e.target.value)}
                                            />
                                            
                                        </div>
                                        <div className="profile-form-row flex gap-10 column">
                                            <Input
                                                label={"Phone Number"}
                                                placeholder={"phone"}
                                                type={"text"}
                                                value={userInfo ? userInfo.profile.mobile : ""}
                                                onChange={(e)=>setMobile(e.target.value)}
                                            />
                                            <Input
                                                label={"Birth Date"}
                                                placeholder={"date of birth"}
                                                type={"date"}
                                                value={userInfo ? userInfo.profile.dob : ""}
                                                onChange={(e)=>setDob(e.target.value)}
                                            />
                                            
                                            <div className=" fullwidth pt-5">
                                                <Input
                                                label={"Address"}
                                                placeholder={"address"}
                                                type={"text"}
                                                value={userInfo ? userInfo.profile.address : ""}
                                                onChange={(e)=>setAddress(e.target.value)}
                                                />
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                            className="btn-schedule"
                                            text={"View Schedule"}
                                            isPrimary={true}
                                            onClick={handleViewScheduleClick} 
                                            isWide={true}
                                    />
                                    <div className="profile-description">
                                        <Input
                                        label={"Description "}
                                        placeholder={"description"}
                                        type={"textarea"}
                                        fill={true}
                                        value={userInfo ? userInfo.profile.description : ""}
                                        onChange={(e)=>setDescription(e.target.value)}
                                    /> 
                                    </div>
                                </div>
                                <div className="profile-col2 flex  fullWidth column">
                                    <div className="profile-form-skills flex fullWidth">
                                        <Input
                                            label={"Skills"}
                                            placeholder={"skills"}
                                            type={"text"}
                                            value={skill}
                                            onChange={(e) => {
                                                setSkill(e.target.value);
                                            }}
                                            onKeyDown={() => {        
                                                const newSkill =skill.trim();
                                                if (newSkill) {
                                                    setSkills([...userSkills, newSkill]);
                                                    setSkill('');
                                                  }
                                            }}
                                        />
                                    </div>
                                    <div className="profile-form-list flex">
                                        <ul className="skill-list flex column gap-10">
                                        {newSkills?.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                            {/* <li>Lorem ipsum dolor sit</li>
                                            <li>Lorem ipsum dolor sit</li>
                                            <li>Lorem ipsum dolor sit</li>
                                            <li>Lorem ipsum dolor sit</li> */}

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )}
    </div>
    );
}
export default Profile;