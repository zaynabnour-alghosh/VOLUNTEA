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
    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };
    return(
        <div>
            <div className="admin-dash light">
            <div className="admin-dash-container flex">
                <Sidebar tabs={tabs} onTabClick={handleTabClick} />
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
                        </div>
                        <div className="dash-content flex ">
                            {selectedTab === 'Dashboard' && <Info />}
                            {selectedTab === 'Projects' && <Project />}
                            {selectedTab === 'Members' && <Members />}
                            {selectedTab === 'Messages' && <Messages />}
                            {selectedTab === 'Notifications' && <Notifications />}
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