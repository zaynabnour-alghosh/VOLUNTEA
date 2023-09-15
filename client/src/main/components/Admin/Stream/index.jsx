import React, { useState } from "react";
import './style.css';
import AvatarCard from "../../common/avatar";
import StreamTab from "../../common/streamtab";
import AnnouncementModal from "../../ui/AnnouncementModal";
import MeetingModal from "../../ui/MeetingModal";
import CertificationModal from "../../ui/CertificationModal";
const Stream = () => {
  const [selectedTab, setSelectedTab] = useState("Stream");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectHandler = (value) => {
    setSelectedTab(value);
    if (value === 'Announcement') {
        setIsModalOpen(true);
    }
    else if (value === 'Meeting') {
        setIsModalOpen(true);
    }
    else if (value === 'Certification') {
        setIsModalOpen(true);
    }

  };
  const toggleModal=()=>{
    setIsModalOpen(!isModalOpen);
  }
  return (
            <div className="admin-stream-container flex column">
                <div className="flex row stream-tabs spaceBetween">
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
                showModal={isModalOpen}
                onRequestClose={toggleModal}
                />}
               {selectedTab === 'Meeting' && <MeetingModal 
                showModal={isModalOpen}
                onRequestClose={toggleModal}
                />}
                {selectedTab === 'Certification' && <CertificationModal 
                showModal={isModalOpen}
                onRequestClose={toggleModal}
                />}
            </div>        
        </div>
    );
}


export default Stream;