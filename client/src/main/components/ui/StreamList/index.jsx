import React from "react";
import './style.css';
import AvatarCard from "../../common/avatar";
const StreamList=({stream})=>{
    return(
        <div className="volunteer-stream-main flex column">
            {stream.map((s, index) => (
                <div key={index}>
                    <AvatarCard
                    notice={s.header? `${s.admin_name} posted a new ${s.header}`:`${s.admin_name} scheduled a new meeting`}
                    top={s.header? `${s.header}`:'Meeting'}
                    info={s.description}
                    time={s.time}
                    date={s.date} 
                    isWide={true}
                    from={s.from}
                    to={s.to}
                    meet={s.link}
                    dateAt={s.date_at}
                    />
                </div>
            ))}
        </div>
    );
}
export default StreamList;