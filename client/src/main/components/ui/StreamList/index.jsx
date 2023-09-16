import React from "react";
import './style.css';
import AvatarCard from "../../common/avatar";
const StreamList=()=>{
    return(
        <div className="volunteer-stream-main flex column">
                <AvatarCard
                notice={"Admin posted a new announcement"}
                top={"Reminder"}
                info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                time={"12:45"}
                date={"April 22.2023"} 
                isWide={true}
                />
                <AvatarCard
                notice={"Admin posted a new announcement"}
                top={"Reminder"}
                info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                time={"12:45"}
                date={"April 22.2023"} 
                isWide={true}
                />
                <AvatarCard
                notice={"Admin posted a new announcement"}
                top={"Reminder"}
                info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                time={"12:45"}
                date={"April 22.2023"} 
                isWide={true}
                    />
        </div>
    );
}
export default StreamList;