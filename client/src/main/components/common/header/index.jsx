import React from "react";
import './style.css';
import { useState } from 'react';
import Button from "../button";
import Input from "../input";
import {icons} from "../../../../icons.js"
import OpportunityModal from "../../ui/OpportunityModal";
import GroupModal from "../../ui/GroupModal";
const Header=({title,avatar,buttons,search,profile,volunteer_pov,name, joined,admin_pov,setOpportunities,onSearchChange})=>{
    const [isOppModalOpen, setIsOppModalOpen] = useState(false);
    const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
    const showOppModal = () => {
        setIsOppModalOpen(true);
      };
    const toggleOppModal=()=>{
        setIsOppModalOpen(!isOppModalOpen);
    }

    const showGroupModal = () => {
        setIsGroupModalOpen(true);
      };
    const toggleGroupModal=()=>{
        setIsGroupModalOpen(!isGroupModalOpen);
    }
    return(
    <div className="flex column fullwidth">
        <div className="head-content flex spaceBetween">
            {title && <span className="title">{title}</span>}            
            {buttons &&
                <div className="opp-buttons flex row gap-20">
                    <Button
                        text={"NEW"}
                        isPrimary={true}
                        onClick={showOppModal}  
                        medium={true}

                    />
                    <Button
                        text={"+GROUP"}
                        isPrimary={true} 
                        onClick={showGroupModal}
                        medium={true}
                    />
                </div>
            }
            {admin_pov && profile &&
                <div className="member-profile-header flex row fullwidth spaceBetween">
                    <div className="member-full-name flex row profile-header">
                        <div className="member-profile-avatar">
                            <img
                                src={profile}
                                alt="member"
                            />
                        </div>
                        <span>{name}</span>
                    </div>
                    <div className="opp-buttons flex row gap-20">
                        <Button
                            text={"MESSAGE"}
                            isLink={true}
                        />
                        <Button
                            text={"REMOVE"}
                            inactive={true}                                    
                        />
                    </div>
                
                </div>     
            }
            {volunteer_pov && profile &&
                <div className="member-profile-header flex row fullwidth spaceBetween">
                    <div className="member-full-name flex row profile-header">
                        <div className="member-profile-avatar">
                            <img
                                src={profile}
                                alt="member"
                            />
                        </div>
                        <span>{name}</span>
                    </div>
                    <div className="opp-buttons flex row gap-20">
                        <Button
                            text={"MESSAGE"}
                            isLink={true}
                        />
                    </div>
                
                </div>     

            }











            {search &&
                <div className="member-icon-search">
                    <Input 
                        placeholder={"Search members..."}
                        className="search"
                        search={true}
                        icon={icons['search']}
                        onChange={(e)=>{
                            const searchTerm=e.target.value;
                            onSearchChange(searchTerm);
                        }}
                       
                    />
                </div>
                
            }      
            {avatar &&
            <div className="member-full-name flex row stream-header">
                 <span>Jane Doe</span>
                <div className="member-avatar">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU"
                        alt="member"
                    />
                </div>
            </div>

            }
            {isOppModalOpen && 
                <OpportunityModal 
                    showOppModal={isOppModalOpen}
                    onRequestClose={toggleOppModal}
                    setOpportunities={setOpportunities}
                />}
            {isGroupModalOpen &&
                <GroupModal
                    showGroupModal={isGroupModalOpen}
                    onRequestClose={toggleGroupModal}
                />}
        </div>
        {joined && <div className="joined-at-notice  fullwidth flex pt-10 ">joined at: {joined}</div>}
    </div>
    );
}
export default Header;