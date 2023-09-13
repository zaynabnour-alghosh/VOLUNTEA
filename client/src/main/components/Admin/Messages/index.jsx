import React, { useState } from "react";
import StreamTab from "../../common/streamtab";
import './style.css';
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
                <div className="member-messagebox-xontainer flex column">
                    {selectedTab==="Single" && <div>Single chats are here</div>}
                    {selectedTab==="Group" && <div>Group chats are here</div>}

                </div>

            </div>
            <div className="members-chatbox-container flex column">

            </div>
        </div>
    );
}
export default Messages;