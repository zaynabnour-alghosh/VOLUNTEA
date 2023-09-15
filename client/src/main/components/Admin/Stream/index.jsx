import React, { useState } from "react";
import './style.css';
import AvatarCard from "../../common/avatar";
import StreamTab from "../../common/streamtab";
import AnnouncementModal from "../../ui/AnnouncementModal";
const Stream = () => {
  const [selectedTab, setSelectedTab] = useState("Stream");
  const [isAnnouncementModalOpen, setIsAnnouncementModalOpen] = useState(false);

  const selectHandler = (value) => {
    setSelectedTab(value);
    if (value === 'Announcement') {
        setIsAnnouncementModalOpen(true);
    }
  };

  const toggleAnnouncementModal=()=>{
    setIsAnnouncementModalOpen(!isAnnouncementModalOpen);
  }

  return (
            <div className="admin-stream-container flex column">
                <div className="flex row fullWidth stream-tabs spaceBetween">
                <StreamTab
                    name={"Stream"}
                    selected={selectedTab === "Stream"}
                    value={"Stream"}
                    onSelected={(value) => selectHandler(value)}
                />
                <StreamTab
                    name={"Announcement"}
                    selected={selectedTab === "Announcement"}
                    value={"Announcement"}
                    onSelected={(value) => selectHandler(value)}
                    
                />
                <StreamTab
                    name={"Meeting"}
                    selected={selectedTab === "Meeting"}
                    value={"Meeting"}
                    onSelected={(value) => selectHandler(value)}
                />
                <StreamTab
                    name={"Certification"}
                    selected={selectedTab === "Certification"}
                    value={"Certification"}
                    onSelected={(value) => selectHandler(value)}
                />        
            </div>
            <div className="admin-stream-content flex center wrap">
                <div className="admin-stream-main flex column">
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
                {selectedTab === 'Announcement' && <AnnouncementModal 
                showAnnouncementModal={isAnnouncementModalOpen}
                onRequestClose={toggleAnnouncementModal}
                />}
               
                
                {selectedTab === 'Meeting' && <div>meet</div>}
                {selectedTab === 'Certification' && <div>certify</div>}
            </div>        
        </div>
    );
}


export default Stream;