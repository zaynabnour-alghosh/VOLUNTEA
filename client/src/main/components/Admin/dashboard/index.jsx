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
import Profile from "../Profile";
import OpportunityDetails from "../../ui/OpportunityDetails";
import MemberProfile from "../../ui/MemberProfile";

const AdminDashboard=()=>{
    const tabs = [
        { icon: 'home', name: 'Dashboard', size: 32},
        { icon: 'task', name: 'Projects' , size: 32},
        { icon: 'people', name: 'Members', size: 32},
        { icon: 'chat', name: 'Messages', size: 32},
        { icon: 'notification', name: 'Notifications',size: 32},
        { icon: 'stream', name: 'Stream', size: 32},
        { icon: 'profile', name: 'Profile', size: 32},
        { icon: 'logout', name: 'Logout', size: 32}       
    ];
    const [selectedTab, setSelectedTab] = useState('Dashboard');
    const [showNotificationModal, setShowNotificationModal] = useState(false);
    const [showOpportunityDetails, setShowOpportunityDetails] = useState(false);    
    const [showMemberProfile, setShowMemeberProfile] = useState(false);    
    
    useEffect(() => {
        setShowNotificationModal(false);
    }, [selectedTab]);
    
    const toggleNotificationModal = () => {
        setShowNotificationModal(!showNotificationModal);
      };
    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
        if (tabName === 'Notifications') {
            toggleNotificationModal();     
        }else if (tabName === 'Projects' 
               || tabName==='Dashboard' 
               || tabName==='Members' 
               || tabName==='Messages' 
               || tabName==='Notifications' 
               || tabName==='Stream' 
               || tabName==='Profile' 
               || tabName==='Logout') {
            setShowOpportunityDetails(false);
            setShowMemeberProfile(false);
        }
    }
    return(
        <div>
            <div className="admin-dash light">
                <div className="admin-dash-container flex">
                    <Sidebar 
                        tabs={tabs} 
                        onTabClick={handleTabClick} 
                        showNotificationModal={showNotificationModal}
                        toggleNotificationModal={toggleNotificationModal}
                        />
                    <div className="dash-content-container flex column ">
                        {!showOpportunityDetails && !showMemberProfile &&
                            <>
                                <div className="dash-header">
                                    {selectedTab==='Dashboard' && <Header title={"ADMIN DASHBOARD"}/>}
                                    {selectedTab=='Projects' && <Header title={"OPPORTUNITIES"} buttons={true}/>}
                                    {selectedTab=='Members' && <Header title={"MEMBERS"} search={true}/>}
                                    {selectedTab=='Messages' && <Header title={"CHATS"}  avatar={true}/>}
                                    {selectedTab=='Stream' && <Header title={"STREAM"} avatar={true}/>}
                                    {selectedTab=='Profile' && <Header title={"PROFILE "} avatar={true}/>}
                                </div>
                                <div className={`dash-content flex ${selectedTab==='Messages'?'chat-bg':''}`} >
                                    {selectedTab === 'Dashboard' &&<Info />}
                                    {selectedTab === 'Projects' && <Project toggleOpportunityDetails={() => setShowOpportunityDetails(true)} />}
                                    {selectedTab === 'Members' && <Members toggleMemberProfile={() => setShowMemeberProfile(true)}/>}
                                    {selectedTab === 'Messages' && <Messages />}
                                    {selectedTab === 'Stream' && <Stream />}
                                    {selectedTab === 'Profile' && <Profile />}
                                </div>
                            </>      
                        }
                        {showOpportunityDetails && <OpportunityDetails />}
                        {showMemberProfile && <MemberProfile/>}
                    </div>
                </div>
            </div>
        </div>  
    );
}
export default AdminDashboard;
