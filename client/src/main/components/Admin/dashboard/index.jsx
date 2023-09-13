import React from "react";
import './style.css';
import { useState } from "react";
import Sidebar from '../../common/sidebar';
import Info from "../Info";
import Members from "../Members";
import Header from "../../common/header";
import Project from "../Project";
import Messages from "../Messages";
import Notifications from "../Notifications";
import Stream from "../Stream";
import Profile from "../Profile";
import NotificationsModal from "../../ui/NotificationsModal";
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
    const [previousTab, setPreviousTab] = useState(''); 
    
    const toggleNotificationModal = () => {
        setShowNotificationModal(!showNotificationModal);
      };
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        console.log('Toggling modal');
		setShowModal(!showModal);
	};
    const handleTabClick = (tabName) => {
        setPreviousTab(selectedTab)
        setSelectedTab(tabName);
        if (tabName === 'Notifications') {
            toggleNotificationModal();
            } else {
            setShowNotificationModal(false);
            }
        if (tabName === 'Notifications') {
            setShowNotificationModal(true);
            } else {
            setShowNotificationModal(false);
            }
    };    
    return(
        <div>
            <div className="admin-dash light">
                <div className="admin-dash-container flex">
                    <Sidebar tabs={tabs} onTabClick={handleTabClick} toggleModal={toggleModal}/>
                    <div className="dash-content-container flex column ">
                        <div className="dash-header">
                            {selectedTab==='Dashboard' &&
                            <Header 
                                title={"ADMIN DASHBOARD"}
                            />}
                            {selectedTab=='Projects' && 
                            <Header
                                title={"OPPORTUNITIES"} 
                                buttons={true}
                            />}
                            {selectedTab=='Members' && 
                            <Header
                                title={"MEMBERS"} 
                                search={true}
                            />}
                            {selectedTab=='Stream' && 
                            <Header
                                title={"STREAM"} 
                                avatar={true}
                            />}
                            {selectedTab=='Profile' && 
                            <Header
                                title={"PROFILE "} 
                                avatar={true}
                            />}
                        </div>
                        <div className="dash-content flex ">
                            {selectedTab === 'Dashboard' &&<Info />}
                            {selectedTab === 'Projects' && <Project />}
                            {selectedTab === 'Members' && <Members />}
                            {selectedTab === 'Messages' && <Messages />}
                            {selectedTab === 'Notifications' && ( 
                                <div className="modal-overlay"> 
                                    {previousTab === 'Dashboard' && <><Info /><NotificationsModal showModal={showNotificationModal} toggleModal={toggleNotificationModal} /></>} 
                                    {previousTab === 'Projects' && <><Project /><NotificationsModal showModal={showNotificationModal} toggleModal={toggleNotificationModal} /></>}
                                    {previousTab === 'Members' && <><Members /><NotificationsModal showModal={showNotificationModal} toggleModal={toggleNotificationModal} /></>}
                                    {previousTab === 'Messages' && <><Messages /><div className="notif-modal-content"><NotificationsModal showModal={showNotificationModal} toggleModal={toggleNotificationModal} /></div></>}
                                    {previousTab === 'Stream' && <><Stream /><NotificationsModal showModal={showNotificationModal} toggleModal={toggleNotificationModal} /></>}
                                    {previousTab === 'Profile' && <><Profile /><NotificationsModal showModal={showNotificationModal} toggleModal={toggleNotificationModal} /></>}
                                    {previousTab === 'Notifications' && <><Info /><NotificationsModal showModal={showNotificationModal} toggleModal={toggleNotificationModal} /></>}
                                </div>
                                )}
                            {selectedTab === 'Stream' && <Stream />}
                            {selectedTab === 'Profile' && <Profile />}
                        </div>                      
                    </div>
                </div>
            </div>
        </div>  
    );
}
export default AdminDashboard;
