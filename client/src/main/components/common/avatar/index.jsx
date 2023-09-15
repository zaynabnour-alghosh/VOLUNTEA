import React from "react";
import './style.css';

const AvatarCard=({top,info,date,link,image,time,isWide, notice,accept,reject})=>{
    return(
        <div className={`avatarcard-container flex ${isWide? 'fullwidth':''} ${!info ? 'avatar-card-align':''}`}>
            {image && 
                <div className="base-avatar">
                    <img src={image} alt="avatar" />
                </div>
            }
            <div className="avatarcard-content flex column flex-start">
                {notice && <div className="avatarcard-notice notice">{notice}</div> }
                {top && <div className="avatarcard-topic"><h4>{top}</h4></div>}                
                {info &&<div className="avatarcard-desc"><p>{info}</p></div>
                }
            </div>
            {link && <div>{link}</div>}
            {accept && <div>{accept}</div>}
            {reject && <div>{reject}</div>}
            <div className="flex column gap-15">
                {date && <div className="flex avatarcard-notice">{date}</div>}
                {time && <div className="flex avatarcard-notice">{time}</div>}
            </div>

        </div>
    );
}
export default AvatarCard;