import React from "react";
import './style.css';
import MessageRow from "../../ui/MessageRow";
import {icons} from '../../../../icons.js';
import Input from "../input";
const GroupChatBox=({groupName})=>{
    return(
        <div className="groupbox members-chatbox-container flex column fullWidth">
            <div className="chatbox-header flex row">
                <div className="avatarcard-content flex column flex-start">
                    <div className="avatarcard-topic">
                        <h4>{groupName}</h4>
                    </div>               
                </div>
            </div>
            <hr />
            <div className="chatbox-content flex column">
                <MessageRow sender={true} text={"hi"} />
                <MessageRow  text={"hi there!"}/>
            </div>
            <hr />
            <div className="chatbox-message-input flex row">
                <div className="send-input fullWidth">
                    <Input
                        placeholder={"Type your message here ..."}
                        type={"textarea"}
                        className="fullwidth"
                        fill={true}
                        noBorder={true}
                    />
                </div>
                <span style={{ fontSize: '25px',paddingLeft:'10px',paddingRight:'10px'}}>{icons['emoji']}</span>
                <span style={{ fontSize: '25px' }}>{icons['send']}</span>
            </div>
        </div>
    );
}
export default GroupChatBox;