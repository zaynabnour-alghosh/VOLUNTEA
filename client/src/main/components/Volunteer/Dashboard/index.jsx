import React from "react";
import './style.css';
import { useState,useEffect } from "react";
import Sidebar from "../../common/sidebar";
import Info from "../Info";
import Members from "../Members";
import Header from "../../common/header";
import Opportunities from "../Opportunities";
import Messages from "../Messages";
import Stream from "../Stream";
import Profile from "../../ui/Profile";
import { sendRequest } from "../../../../config/request";

import MemberProfile from "../../ui/MemberProfile";

const VolunteerDashboard=({orgId})=>{
    const tabs = [
        { icon: 'home', name: 'Content', size: 32},
        { icon: 'task', name: 'Opportunities' , size: 32},
        { icon: 'people', name: 'Members', size: 32},
        { icon: 'chat', name: 'Messages', size: 32},
        { icon: 'notification', name: 'Notifications',size: 32},
        { icon: 'stream', name: 'Stream', size: 32},
        { icon: 'profile', name: 'Profile', size: 32},
        { icon: 'logout', name: 'Logout', size: 32}       
    ];
    const [selectedTab, setSelectedTab] = useState('Content');
    const [searchTerm, setSearchTerm] = useState('');
    const [members,setMembers]=useState([]);
    const [memberSkills, setMemberSkills] = React.useState(null);
    const [memberSchedule, setMemberSchedule] = React.useState(null);
    const [memberName,setMemberName]=useState('');
    const [memberEmail,setMemberEmail]=useState('');
    const [selectedMember, setSelectedMember] = React.useState(null);
    const [volInfo, setVolInfo] = React.useState(null);

    const [showNotificationModal, setShowNotificationModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false); 
    const [showMemberProfile, setShowMemeberProfile] = useState(false);    
    const [joinedAt, setJoinedAt] = useState('');
    const handleSearchChange = (searchTerm) => {
        setSearchTerm(searchTerm);
        };
        const filteredMembers = members.filter((member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    useEffect(() => {
        setShowNotificationModal(false);
    }, [selectedTab]);
    
    const toggleNotificationModal = () => {
        setShowNotificationModal(!showNotificationModal);
      };
    const toggleConfirmationModal = () => {
        setShowConfirmationModal(!showConfirmationModal);
    };
    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
        if (tabName === 'Notifications') {
            toggleNotificationModal();     
        }else if(tabName==='Logout'){
            toggleConfirmationModal();
        }
        else if (tabName === 'Opportunities' 
               || tabName==='Content' 
               || tabName==='Members' 
               || tabName==='Messages' 
               || tabName==='Notifications' 
               || tabName==='Stream' 
               || tabName==='Profile' 
               ) {
            setShowMemeberProfile(false);
        }
    }
    const toggleMemberProfile=async(memberId)=>{
        setShowMemeberProfile(true);
            try{
                const response=await sendRequest({
                    method:"GET",
                    route:`user/${memberId}`,
                    body:"",
                    includeHeaders:true
                });
                if(response){
                    console.log(response);
                    setMemberName(response.name);
                    setMemberEmail(response.email);
                    setSelectedMember(response.profile);
                    setMemberSkills(response.skills);
                    setMemberSchedule(response.schedule);
                }
                }catch(error){
                    console.log(error)
                }
        
    }
    const id=localStorage.getItem('organizationId');
    useEffect(() => {
        const getMembers=async()=>{
        try{
            const response=await sendRequest({
                method:"GET",
                route:`members/${id}`,
                body:"",
                includeHeaders:true
            });
            if(response){
                console.log(response);
                setMembers(response.members);
            }
            }catch(error){
                console.log(error)
            }
        }
        getMembers();
    }, []);
    useEffect(() => {
        const getAuth=async()=>{
        try{
            const response=await sendRequest({
                method:"GET",
                route:'/user',
                body:"",
                includeHeaders:true
            });
            if(response){
                console.log(response);
                setVolInfo(response);
            }
            }catch(error){
                console.log(error)
            }
        }
        getAuth();
    }, []);
    return(
        <div>
            <div className="admin-dash light">
                <div className="admin-dash-container flex">
                    <Sidebar 
                        tabs={tabs} 
                        onTabClick={handleTabClick} 
                        showNotificationModal={showNotificationModal}
                        toggleNotificationModal={toggleNotificationModal}
                        showConfirmationModal={showConfirmationModal}
                        toggleConfirmationModal={toggleConfirmationModal}
                        />
                    <div className="dash-content-container flex column ">
                        {!showMemberProfile &&
                             <> 
                                <div className="dash-header">
                                    {selectedTab==='Content' && <Header title={"VOLUNTEER DASHBOARD"} joined={joinedAt? joinedAt:''}/>}
                                    {selectedTab=='Opportunities' && <Header title={"OPPORTUNITIES"}/>}
                                    {selectedTab=='Members' && <Header title={"MEMBERS"} search={true} onSearchChange={handleSearchChange}/>}
                                    {selectedTab=='Messages' && <Header title={"CHATS"}  avatar={`http://localhost:8000/storage/images/profiles/${volInfo?.profile.avatar_url}`} user={volInfo?.name}/>}
                                    {selectedTab=='Stream' && <Header title={"STREAM"} avatar={`http://localhost:8000/storage/images/profiles/${volInfo?.profile.avatar_url}`} user={volInfo?.name}/>}
                                    {selectedTab=='Profile' && <Header title={"PROFILE "} avatar={`http://localhost:8000/storage/images/profiles/${volInfo?.profile.avatar_url}`} user={volInfo?.name}/>}
                                </div>
                                <div className={`dash-content flex ${selectedTab==='Messages'?'chat-bg':''}`} >
                                    {selectedTab === 'Content' &&<Info  orgId={orgId} setJoinedAt={setJoinedAt}/>}
                                    {selectedTab === 'Opportunities' && <Opportunities orgId={orgId}/>}
                                    {selectedTab === 'Members' && <Members  members={filteredMembers} toggleMemberProfile={toggleMemberProfile}/>}
                                    {selectedTab === 'Messages' && <Messages />}
                                    {selectedTab === 'Stream' && <Stream orgId={orgId}/>}
                                    {selectedTab === 'Profile' && <Profile userInfo={volInfo} />}

                                </div>
                            </>      
                         } 
                        {showMemberProfile && 
                            <MemberProfile 
                            remove={false}
                            name={memberName} 
                            email={memberEmail}
                            skills={memberSkills}
                            schedule={memberSchedule}
                            selectedMember={selectedMember}
                            
                            />}
                    </div>
                </div>
            </div>
        </div>  
    );
}
export default VolunteerDashboard;
