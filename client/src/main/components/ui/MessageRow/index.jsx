import React from "react";
import './style.css';
const MessageRow=({sender,text})=>{
    return(
        <div className={`fullWidth flex message-row  ${sender? 'sender':'reciever'}`}>
            <div className="message-time-card flex column">
                <div className={`message-card ${sender? 'sender-box':'reciever-box'}`}>
                    <span className="message">{text}</span>                
                </div>
                <span className="message-time">10:54</span>

            </div>
           
        </div>
    );
}
export default MessageRow;