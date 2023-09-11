import React from "react";
import './style.css';

const AvatarCard=({top,info,date,link,image,time})=>{
    return(
<       div className={`avatarcard-container flex ${!info ? 'avatar-card-align':''}`}>
            {image && 
                <div className="base-avatar">
                    <img src={image} alt="avatar" />
                </div>
            }
            <div className="avatarcard-content flex column flex-start">
                <div className="avatarcard-topic">
                    <h4>{top}</h4>
                </div>
                {info && 
                <div className="avatarcard-desc">
                    <p>{info}</p>
                </div>
                }
            </div>
            {link && <div>{link}</div>}
            {time && <div className="flex avatarcard-notice">{time}</div>}
            {date && <div className="flex avatarcard-notice">{date}</div>}

        </div>
    );
}
export default AvatarCard;