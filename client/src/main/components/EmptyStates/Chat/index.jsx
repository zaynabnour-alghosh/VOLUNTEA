import React from "react";
import chatState from'../../states/chat-state.svg';
import './style.css';
const EmptyChatState=()=>{
    return(
        <div className="empty-chat-state flex center fullwidth">
            <img src={chatState} alt="empty" />
        </div>
    );
}
export default EmptyChatState;