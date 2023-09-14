import React, { useState } from "react";
import StreamTab from "../../common/streamtab";
import './style.css';
import AvatarCard from "../../common/avatar";
import Header from "../../common/header";
const Messages=()=>{
    const [selectedTab, setSelectedTab] = useState("Single");

    const selectHandler = (value) => {
      setSelectedTab(value);
    };
    return(
        <div className="messages-base-container flex row">
            <div className="members-messages-container flex column">
                <div className="single-group-top flex row spaceBetween">
                    <StreamTab
                        name={"Single"}
                        // selected={selectedTab === "Stream"}
                        value={"Single"}
                        onSelected={(value) => selectHandler(value)}
                        chosen={selectedTab==="Single"}
                    />
                    <StreamTab
                        name={"Group"}
                        // selected={selectedTab === "Stream"}
                        value={"Group"}
                        onSelected={(value) => selectHandler(value)}
                        chosen={selectedTab==="Group"}
                    />
                </div>
                <div className="member-chat-search flex">
                    <Header search={true}/>
                </div>
                <div className="member-messagebox-container flex column">
                    {selectedTab==="Single" && 
                    <div>
                        <AvatarCard
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU"}
                        top={"Mary Doe"}
                        info={"Lorem ipsum dolor."}
                        date={"April 22.2023"}
                        isWide={true}                        
                        />
                    </div>}
                    {selectedTab==="Group" && 
                    <div>
                        <AvatarCard
                        top={"Group Name"}
                        info={"Lorem ipsum dolor sit amet."}
                        date={"April 22.2023"}
                        isWide={true}                        

                        />
                    </div>}

                </div>

            </div>
            <div className="members-chatbox-container flex column fullWidth">
                <div className="chatbox-header flex row">
                    <div className="base-avatar">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU" alt="avatar" />
                    </div>
                    <div className="avatarcard-content flex column flex-start">
                        <div className="avatarcard-topic">
                            <h4>Volunteer Name</h4>
                        </div>               
                        <div className="avatarcard-desc">
                            <p>online</p>
                        </div>
                
                    </div>
                </div>
                <hr />
                <div className="chatbox-content flex column">
                   {/* message component */}
                </div>
                <div className="chatbox-message-input flex row">
                    here goes imput and emoji tab
                </div>

            </div>
        </div>
    );
}
export default Messages;