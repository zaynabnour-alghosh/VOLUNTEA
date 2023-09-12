import React from "react";
import './style.css';
import { useState } from "react";
import Sidebar from '../../common/sidebar';
import Info from "../Info";
import Members from "../Members";
const AdminDashboard=()=>{
    const tabs = [
        { icon: 'home', name: 'Dashboard', size: 32},
        { icon: 'task', name: 'Projects' , size: 32},
        { icon: 'people', name: 'Members', size: 32},
        { icon: 'chat', name: 'Messages', size: 32},
        { icon: 'notification', name: 'Nottifications',size: 32},
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
            <div className="admin-dash  light">
            <div className="admin-dash-container flex">
                <Sidebar tabs={tabs} onTabClick={handleTabClick} />
                <div className="dash-content-container flex column ">
                        <div className="dash-header">
                            header goes here
                        </div>
                        <div className="dash-content">
                            {selectedTab === 'Dashboard' && <Info />}
                            {selectedTab === 'Members' && <Members />}
                        </div>                      
                    </div>
                </div>
            </div>
    </div>  
    );
}
export default AdminDashboard;