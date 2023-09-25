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

const AdminDashboard=({orgId})=>{
    // console.log('id',orgId);
    const tabs = [
        { icon: 'home', name: 'Dashboard', size: 32},
        { icon: 'task', name: 'Opportunities' , size: 32},
        { icon: 'people', name: 'Members', size: 32},
        { icon: 'chat', name: 'Messages', size: 32},
        { icon: 'notification', name: 'Notifications',size: 32},
        { icon: 'stream', name: 'Stream', size: 32},
        { icon: 'profile', name: 'Profile', size: 32},
        { icon: 'logout', name: 'Logout', size: 32}       
    ];
    const [selectedTab, setSelectedTab] = useState('Dashboard');
    const [showNotificationModal, setShowNotificationModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false); 
    const [showOpportunityDetails, setShowOpportunityDetails] = useState(false);    
    const [showMemberProfile, setShowMemeberProfile] = useState(false);  
    const [selectedOpportunity, setSelectedOpportunity] = useState(null); 
    const [opportunities, setOpportunities] = useState([]);
    const [members,setMembers]=useState([]);
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
    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
        if (tabName === 'Notifications') {
            toggleNotificationModal();     
        }else if(tabName==='Logout'){
            toggleConfirmationModal();
        }
        else if (tabName === 'Opportunities' 
               || tabName==='Dashboard' 
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
    return(
        <div>
            <div className="dash light">
                <div className="dash-container flex">
                    <Sidebar 
                        tabs={tabs} 
                        onTabClick={handleTabClick} 
                        showNotificationModal={showNotificationModal}
                        toggleNotificationModal={toggleNotificationModal}
                        showConfirmationModal={showConfirmationModal}
                        toggleConfirmationModal={toggleConfirmationModal}
                        />
                    <div className="dash-content-container flex column ">
                        {!showOpportunityDetails && !showMemberProfile &&
                            <>
                                <div className="dash-header">
                                    {selectedTab==='Dashboard' && <Header title={"ADMIN DASHBOARD"}/>}
                                    {selectedTab=='Opportunities' && <Header title={"OPPORTUNITIES"} buttons={true} setOpportunities={setOpportunities}/>}
                                    {selectedTab=='Members' && <Header title={"MEMBERS"} search={true} onSearchChange={handleSearchChange}/>}
                                    {selectedTab=='Messages' && <Header title={"CHATS"}  avatar={true}/>}
                                    {selectedTab=='Stream' && <Header title={"STREAM"} avatar={true}/>}
                                    {selectedTab=='Profile' && <Header title={"PROFILE "} avatar={true}/>}
                                </div>
                                <div className={`dash-content flex ${selectedTab==='Messages'?'chat-bg':''}`} >
                                    {selectedTab === 'Dashboard' &&<Info  orgId={orgId}/>}
                                    {selectedTab === 'Opportunities' && <Project orgId={orgId} setSelectedOpportunity={setSelectedOpportunity} opportunities={opportunities} setOpportunities={setOpportunities} toggleOpportunityDetails={() => setShowOpportunityDetails(true)} />}
                                    {selectedTab === 'Members' && <Members members={filteredMembers} toggleMemberProfile={() => setShowMemeberProfile(true)}/>}
                                    {selectedTab === 'Messages' && <Messages />}
                                    {selectedTab === 'Stream' && <Stream orgId={orgId} members={members}/>}
                                    {selectedTab === 'Profile' && <Profile />}

                                </div>
                            </>      
                        }
                        {showOpportunityDetails && <OpportunityDetails opportunity={selectedOpportunity}/>}
                        {showMemberProfile && <MemberProfile remove={true}/>}
                    </div>
                </div>
            </div>
        </div>  
    );
}
export default AdminDashboard;
