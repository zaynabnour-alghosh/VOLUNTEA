import React, { useState } from "react";
import './style.css';
import Tab from "../tab";
import {icons} from '../../../../icons.js';
import NotificationsModal from "../../ui/NotificationsModal";
import secondaryLogo from '../../../../assets/secondary-white.svg';
import ConfirmationModal from "../../ui/ConfirmationModal";
const Sidebar=({tabs,onTabClick, toggleModal,showNotificationModal, toggleNotificationModal,showConfirmationModal,toggleConfirmationModal})=>{
    const [selectedTab,setSelectedTab]=useState('Dashboard')
    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
        if (tabName === "Notifications") {
            toggleNotificationModal();
          }else if (tabName === "Logout"){
            toggleConfirmationModal();
          } 
          else{
            onTabClick(tabName);
          }
      };
    return(
        <div className="sidebar">
            <div className="side-logo">
                <img src={secondaryLogo} alt="logo" />
            </div>
            <ul className="tab-list">
                {
                    tabs.map((tab,index)=>(
                        <Tab 
                            key={index}
                            icon={icons[tab.icon]}
                            name={tab.name}
                            size={tab.size}
                            color={tab.color}
                            isSelected={selectedTab === tab.name}
                            onToggle={toggleModal}
                            onTabClick={(tabName) => {
                                handleTabClick(tabName);
                              }}                                    
                        />
                    ))
                }
            </ul>
            {showNotificationModal && (
                <NotificationsModal
                showModal={showNotificationModal}
                onRequestClose={toggleNotificationModal}
                />
            )}
             
            {showConfirmationModal && <ConfirmationModal showConfirmationModal={showConfirmationModal} onRequestClose={toggleConfirmationModal} />}
        </div>
    );
}
export default Sidebar;