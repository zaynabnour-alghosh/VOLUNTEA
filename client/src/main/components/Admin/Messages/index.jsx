import React, { useState ,useEffect} from "react";
import StreamTab from "../../common/streamtab";
import './style.css';
import AvatarCard from "../../common/avatar";
import Input from "../../common/input";
import Header from "../../common/header";
import MessageRow from "../../ui/MessageRow";
import {icons} from '../../../../icons.js';
import SingleChatBox from "../../common/single";
import GroupChatBox from "../../common/group";
import { sendRequest } from "../../../../config/request";
import EmptyChatState from "../../EmptyStates/Chat";
const Messages=()=>{
    const [selectedTab, setSelectedTab] = useState("Single");
    const [isSingleChatboxOpen, setSingleChatboxOpen] = useState(false);
    const [isGroupChatboxOpen, setGroupChatboxOpen] = useState(false);
    const [singleChats, setSingleChats] = useState([]);
    const [groupChats, setGroupChats] = useState([]);
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);
    const selectHandler = (value) => {
      setSelectedTab(value);
    };

    const openSingleChat = (volunteerName, avatar) => {
        setSingleChatboxOpen(true);
        setGroupChatboxOpen(false);
        setSelectedVolunteer({ volunteerName, avatar });
    };
    const openGroupChat = () => {
        setSingleChatboxOpen(false);
        setGroupChatboxOpen(true)
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
                  
                // setOrgInfo(response.data);

                // console.log(response.impacts);
                // setImpacts(response.impacts);

                // console.log(response.missions);
                // setMissions(response.missions);

                // console.log(response.events);
                // setEvents(response.events);
			}
			} catch (error) {
				console.log(error);
			}
		} 
        getChatrooms();
    }, []);

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
                        placeholder={"Search members..."}
                        className="search"
                        memberSearch={true}
                        noBorder={true}
                        icon={icons['search']
                    }
                    />
                </div>
                </div>
                <div className="member-messagebox-container flex column">
                    {(selectedTab === "Single" ? singleChats : groupChats).map((chat, index) => (
                        <div key={index} onClick={() => openSingleChat(selectedTab === "Single" ? chat.other : chat.top, `http://localhost:8000/storage/images/profiles/${chat.avatar}`)}>
                        <AvatarCard
                            image={`http://localhost:8000/storage/images/profiles/${chat.avatar}`}
                            top={selectedTab === "Single" ? chat.other : chat.top}
                            info={chat.info}
                            isWide={true}
                        />
                        </div>
                    ))}

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
                <GroupChatBox/>
            )}
        </div>
    );
}
export default Messages;