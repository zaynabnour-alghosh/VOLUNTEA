import React from "react";
import './style.css';
import { useState } from 'react';
import Button from "../button";
import Input from "../input";
import {icons} from "../../../icons.js"
import OpportunityModal from "../../ui/OpportunityModal";
import GroupModal from "../../ui/GroupModal";
const Header=({title,buttons,search,avatar})=>{
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
            <span className="title">
                {title}
            </span>
            {buttons &&
                <div className="opp-buttons flex row gap-20">
                    <Button
                        text={"NEW"}
                        isPrimary={true}
                        onClick={showOppModal}                                      
                    />
                    <Button
                        text={"+GROUP"}
                        isPrimary={true} 
                        onClick={showGroupModal}                                     
                    />
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