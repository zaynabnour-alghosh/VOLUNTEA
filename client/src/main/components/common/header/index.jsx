import React from "react";
import './style.css';
import { useState } from 'react';
import Button from "../button";
import Input from "../input";
import {icons} from "../../../icons.js"
import OpportunityModal from "../../ui/OpportunityModal";
import GroupModal from "../../ui/GroupModal";
const Header=({title,buttons,search,avatar,profile,name})=>{
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
            {profile && 
                <div className="member-profile-header flex row fullwidth spaceBetween">
                    <div className="member-full-name flex row profile-header">
                        <div className="member-profile-avatar">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU"
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
            {search &&
                <div className="member-icon-search">
                    <Input 
                        placeholder={"Search members..."}
                        className="search"
                        search={true}
                        icon={icons['search']}
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
                />}
            {isGroupModalOpen &&
                <GroupModal
                    showGroupModal={isGroupModalOpen}
                    onRequestClose={toggleGroupModal}
                />}
        </div>
    );
}
export default Header;