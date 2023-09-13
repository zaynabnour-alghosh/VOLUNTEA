import React, { useState } from "react";
import './style.css';
import Tab from "../tab";
import {icons} from '../../../icons.js';
import secondaryLogo from '../../../../assets/secondary-white.svg';
const Sidebar=({tabs,onTabClick, toggleModal})=>{
    const [selectedTab,setSelectedTab]=useState('Dashboard')
    // const handleTabClick = (tabName) => {
    //     setSelectedTab(tabName);
    //     onTabClick(tabName);
    //   };
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
                                setSelectedTab(tabName);
                                onTabClick(tabName);
                              }}                                    
                        />
                    ))
                }
            </ul>
        </div>
    );
}
export default Sidebar;