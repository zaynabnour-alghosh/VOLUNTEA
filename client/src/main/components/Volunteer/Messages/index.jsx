import React, { useState,useEffect } from "react";
import StreamTab from "../../common/streamtab";
import './style.css';
import AvatarCard from "../../common/avatar";
import Input from "../../common/input";
import Header from "../../common/header";
import MessageRow from "../../ui/MessageRow";
import {icons} from '../../../../icons.js';
import SingleChatBox from "../../common/single";
import GroupChatBox from "../../common/group";
import EmptyChatState from "../../EmptyStates/Chat";
import { sendRequest } from "../../../../config/request";

const Messages=()=>{
    const [selectedTab, setSelectedTab] = useState("Single");
    const [isSingleChatboxOpen, setSingleChatboxOpen] = useState(false);
    const [isGroupChatboxOpen, setGroupChatboxOpen] = useState(false);
    const [singleChats, setSingleChats] = useState([]);
    const [groupChats, setGroupChats] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);
    const [selectedGroup, setSelectedGroup] = useState(null);
    
    const selectHandler = (value) => {
      setSelectedTab(value);
    };

    const openSingleChat = (volunteerName, avatar) => {
        setSingleChatboxOpen(true);
        setGroupChatboxOpen(false);
        setSelectedVolunteer({ volunteerName, avatar });
    };
    const openGroupChat = (groupName) => {
        setSingleChatboxOpen(false);
        setGroupChatboxOpen(true)
        setSelectedGroup({ groupName});
    };
    useEffect(() => {
        const id=localStorage.getItem("organizationId");
        const getChatrooms = async () => {
			try {
				const response = await sendRequest({
                method:"GET",
                route: `chatrooms/${id}`,
                body:" ",
                })
                
            if (response && response.status === "success") {
                console.log(response.single);
                console.log(response.group);
                setSingleChats(response.single || []);
                setGroupChats(response.group || []);
			}
			} catch (error) {
				console.log(error);
			}
		} 
        getChatrooms();
    }, []);
    const filteredChats = (selectedTab === "Single" ? singleChats : groupChats)
    .filter((chat) => chat.other.toLowerCase().includes(searchValue.toLowerCase()));


    return(
        <div className="messages-base-container flex row">
            <div className="members-messages-container flex column">
                <div className="single-group-top flex row spaceBetween">
                    <StreamTab
                        name={"Single"}
                        value={"Single"}
                        onSelected={(value) => selectHandler(value)}
                        chosen={selectedTab==="Single"}
                    />
                    <StreamTab
                        name={"Group"}
                        value={"Group"}
                        onSelected={(value) => selectHandler(value)}
                        chosen={selectedTab==="Group"}
                    />
                </div>
                <div className="member-chat-search flex">
                <div className="member-search">
                    <Input 
                       value={searchValue}
                       onChange={(e)=>setSearchValue(e.target.value)}
                       placeholder={"Search members..."}
                       className="search"
                       memberSearch={true}
                       noBorder={true}
                       icon={icons['search']
                    }
                    />
                </div>
                </div>
                <div className="box flex center fullwidth">
                    <div className="member-messagebox-container flex  fullwidth p-10 column">
                    {filteredChats.map((chat, index) => (
                        <div key={index} onClick={() => selectedTab === 'Single' ? openSingleChat(chat.other, `http://localhost:8000/storage/images/profiles/${chat.avatar}`) : openGroupChat(chat.other)}>
                        {selectedTab === 'Single' ? (
                            <AvatarCard
                                image={`http://localhost:8000/storage/images/profiles/${chat?.avatar}`}
                                top={chat.other}
                                info={chat.info}
                                isWide={true}
                            />
                            ) : (
                            <AvatarCard
                                top={chat.other}
                                info={chat.info}
                                isWide={true}
                            />
                            )}
                    </div>
                ))}
                </div>

                </div>
                
            </div>
            {!isSingleChatboxOpen && !isGroupChatboxOpen && <EmptyChatState/>}
            {isSingleChatboxOpen && selectedVolunteer && (
                    <SingleChatBox
                    volunteerName={selectedVolunteer.volunteerName}
                    avatar={selectedVolunteer.avatar}
                    
                    />
                )}
            {isGroupChatboxOpen && (
                <GroupChatBox
                groupName={selectedGroup.groupName}
                />
            )}
        </div>
    );
}
export default Messages;