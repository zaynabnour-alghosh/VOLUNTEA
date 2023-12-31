import React from "react";
import './style.css';
import { useState,useEffect } from "react";
import Sidebar from '../../common/sidebar';
import Info from "../Info";
import Members from "../Members";
import Header from "../../common/header";
import Project from "../Project";
import Messages from "../Messages";
import Stream from "../Stream";
import Profile from "../../ui/Profile";
import OpportunityDetails from "../../ui/OpportunityDetails";
import MemberProfile from "../../ui/MemberProfile";
import { sendRequest } from "../../../../config/request";
import { onMessageListener } from "../../../../firebase";
import Notification from "../../common/notification";

const AdminDashboard=({orgId})=>{
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
    const [showNotificationModal, setShowNotificationModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false); 
    const [showOpportunityDetails, setShowOpportunityDetails] = useState(false);    
    const [showMemberProfile, setShowMemeberProfile] = useState(false);  
    const [selectedOpportunity, setSelectedOpportunity] = useState(null); 
    const [opportunities, setOpportunities] = useState([]);
    const [members,setMembers]=useState([]);
    const [selectedMember, setSelectedMember] = React.useState(null);
    const [adminInfo, setAdminInfo] = React.useState(null);
    const [memberSkills, setMemberSkills] = React.useState(null);
    const [memberSchedule, setMemberSchedule] = React.useState(null);
    const [memberName,setMemberName]=useState('');
    const [memberEmail,setMemberEmail]=useState('');
    const [notifications,setNotifications]=useState([]);


    const [notificationTitle,setNotificationTitle]=useState();
    const [notificationBody,setNotificationBody]=useState();
    const [isNotificationOpen,setIsNotificationOpen]=useState(false);
    
    
    const [searchTerm, setSearchTerm] = useState('');
    const handleOpportunitySelect = (opportunity) => {
        setSelectedOpportunity(opportunity);
      };
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
            setShowOpportunityDetails(false);
            setShowMemeberProfile(false);
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
                setAdminInfo(response);
            }
            }catch(error){
                console.log(error)
            }
        }
        getAuth();
    }, []);
    useEffect(() => {
    const getNotif=async()=>{
    try{
        const response=await sendRequest({
            method:"GET",
            route:`notifications/${id}`,
            body:"",
            includeHeaders:true
        });
        if(response){
            console.log("notes",response);
            setNotifications(response.data);
        }
        }catch(error){
            console.log(error)
        }
    }
    getNotif();
    }, []);
    onMessageListener()
    .then((payload)=>{
    console.log("hi",payload);
    setNotificationTitle(payload.data);
    setNotificationBody(payload.notification.title);
    console.log(payload.data['gcm.notification.message']);
    console.log(payload.notification.title);
    setNotificationTitle(payload.data['gcm.notification.message']);
    setNotificationBody(payload.notification.title);
    setIsNotificationOpen(true);

    setTimeout(() => {
    setIsNotificationOpen(false);
    }, 10000);
    })
    return(
        <div>
            <div className="dash light">
                <div className="dash-container flex">
                    <Sidebar 
                        tabs={tabs} 
                        onTabClick={handleTabClick} 
                        notifications={notifications}
                        setNotifications={setNotifications}
                        showNotificationModal={showNotificationModal}
                        toggleNotificationModal={toggleNotificationModal}
                        showConfirmationModal={showConfirmationModal}
                        toggleConfirmationModal={toggleConfirmationModal}
                        />
                    <div className="dash-content-container flex column ">
                        {!showOpportunityDetails && !showMemberProfile &&
                            <>
                                <div className="dash-header">
                                    {selectedTab==='Content' && <Header title={"ADMIN DASHBOARD"}/>}
                                    {selectedTab=='Opportunities' && <Header title={"OPPORTUNITIES"} buttons={true} setOpportunities={setOpportunities} members={members}/>}
                                    {selectedTab=='Members' && <Header title={"MEMBERS"} search={true} onSearchChange={handleSearchChange}/>}
                                    {selectedTab=='Messages' && <Header title={"CHATS"}  avatar={`http://localhost:8000/storage/images/profiles/${adminInfo?.profile.avatar_url}`} user={adminInfo?.name}/>}
                                    {selectedTab=='Stream' && <Header title={"STREAM"}  avatar={`http://localhost:8000/storage/images/profiles/${adminInfo?.profile.avatar_url}`} user={adminInfo?.name}/>}
                                    {selectedTab=='Profile' && <Header title={"PROFILE "}  avatar={`http://localhost:8000/storage/images/profiles/${adminInfo?.profile.avatar_url}`} user={adminInfo?.name}/>}
                                </div>
                                <div className={`dash-content flex ${selectedTab==='Messages'?'chat-bg':''}`} >
                                    {selectedTab === 'Content' &&<Info  orgId={orgId}/>}
                                    {selectedTab === 'Opportunities' && <Project orgId={orgId} setSelectedOpportunity={setSelectedOpportunity} opportunities={opportunities} setOpportunities={setOpportunities} toggleOpportunityDetails={() => setShowOpportunityDetails(true)} />}
                                    {selectedTab === 'Members' && <Members members={filteredMembers} toggleMemberProfile={toggleMemberProfile}/>}
                                    {selectedTab === 'Messages' && <Messages />}
                                    {selectedTab === 'Stream' && <Stream orgId={orgId} members={members}/>}
                                    {selectedTab === 'Profile' && <Profile userInfo={adminInfo}/>}

                                </div>
                            </>      
                        }
                        {showOpportunityDetails && <OpportunityDetails opportunity={selectedOpportunity}/>}
                        {showMemberProfile && <MemberProfile 
                            name={memberName} 
                            email={memberEmail}
                            skills={memberSkills}
                            schedule={memberSchedule}
                            selectedMember={selectedMember} 
                            remove={true}/>}
                    </div>
                </div>
                {isNotificationOpen &&
                <Notification title={notificationTitle} body={notificationBody} toggleNotificationToast={()=>setIsNotificationOpen(!isNotificationOpen)}/>
                 }
            </div>
        </div>  
    );
}
export default AdminDashboard;
