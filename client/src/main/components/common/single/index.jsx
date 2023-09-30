import React from "react";
import './style.css';
import MessageRow from "../../ui/MessageRow";
import {icons} from '../../../../icons.js';
import Input from "../input";
import { useState } from "react";
import { sendMessage } from "../../../../firebase";
const SingleChatBox=({ volunteerName, avatar,sender,receiver,org,chatroomId})=>{
    const [messageContent, setMessageContent] = useState("");
    const handleSendMessage = () => {
        const sentMessage = sendMessage(messageContent, chatroomId, sender,org);
        setMessageContent("");
        console.log (sentMessage);
      };
    console.log(sender,receiver,org,chatroomId);
    return(
        <div className="singlebox members-chatbox-container flex column fullWidth">
            <div className="chatbox-header flex row">
                <div className="base-avatar">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="avatarcard-content flex column flex-start">
                    <div className="avatarcard-topic">
                        <h4>{volunteerName}</h4>
                    </div>               
                    <div className="avatarcard-desc">
                        <p>online</p>
                    </div>
            
                </div>
            </div>
            <hr />
            <div className="chatbox-content flex column">
                {/* message */}
                <MessageRow sender={true} text={"hi"} />
                <MessageRow  text={"hi there!"}/>
                <MessageRow sender={true} text={"Lorem ipsum dolor sit amet"} />
                <MessageRow sender={true} text={"lorem ipsum ..."} />
                <MessageRow text={"lorem ipsum ..."} />
                <MessageRow sender={true} text={"Lorem ipsum dolor sit amet"} />
                <MessageRow sender={true} text={"lorem ipsum ..."} />
                <MessageRow text={"lorem ipsum ..."} />
            </div>
            <hr />
            <div className="chatbox-message-input flex row">
                <div className="send-input fullWidth">
                    <Input
                        placeholder={"Type your message here ..."}
                        type={"text"}
                        className="fullwidth"
                        fill={true}
                        noBorder={true}
                        value={messageContent}
                        onChange={(e) => setMessageContent(e.target.value)}
                    />
                </div>
                <span style={{ fontSize: '25px',paddingLeft:'10px',paddingRight:'10px'}}>{icons['emoji']}</span>
                <span style={{ fontSize: '25px' }} onClick={handleSendMessage}>{icons['send']}</span>
            </div>
        </div>
    );
}
export default SingleChatBox