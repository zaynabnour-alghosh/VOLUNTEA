import React, { useState } from "react";
import './style.css';
import Tab from "../tab";
import {icons} from '../../../icons.js';
import secondaryLogo from '../../../../assets/secondary-white.svg';
const Sidebar=({tabs})=>{
    const [selectedTab,setSelectedTab]=useState(null)
    const handleTabClick = (index) => {
        setSelectedTab(index);
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
                            isSelected={selectedTab === index}
                            onToggle={() => handleTabClick(index)}
                                    
                        />
                    ))
                }
            </ul>
        </div>
    );
}
export default Sidebar;