import React from "react";
import 'style.css';
const MeesageRow=({sender})=>{
    return(
        <div className={`fullWidth message-row flex column ${sender? 'sender':'reciever'}`}>
            <div className="message-card flex column">
                <span className="message">Hello There</span>                
            </div>
            <span className="message-time">10:54</span>
        </div>
    );
}
export default MessageRow;