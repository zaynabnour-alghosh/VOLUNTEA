import React, { useState,useEffect } from "react";
import './style.css';
import AvatarCard from "../../common/avatar";
import StreamTab from "../../common/streamtab";
import AnnouncementModal from "../../ui/AnnouncementModal";
import MeetingModal from "../../ui/MeetingModal";
import CertificationModal from "../../ui/CertificationModal";
import { sendRequest } from "../../../../config/request";
const Stream = ({orgId,members}) => {
  const [selectedTab, setSelectedTab] = useState("Stream");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stream,setStream]=useState([]);

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
  const fetchAndUpdateStream = async () => {
    try {
        const response = await sendRequest({
            method: "GET",
            route: `stream/${orgId}`,
            body: "",
            includeHeaders: true
        });
        if (response) {
            console.log(response);
            setStream(response.stream);
        }
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    fetchAndUpdateStream();
}, []);
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




                    
                    {/* <AvatarCard
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
                    /> */}
                </div>
                {selectedTab === 'Announcement' && <AnnouncementModal 
                showModal={isModalOpen}
                onRequestClose={toggleModal}
                onUpdateStream={fetchAndUpdateStream}
                />}
               {selectedTab === 'Meeting' && <MeetingModal 
                showModal={isModalOpen}
                onRequestClose={toggleModal}
                />}
                {selectedTab === 'Certification' && <CertificationModal 
                showModal={isModalOpen}
                onRequestClose={toggleModal}
                members={members}
                />}
            </div>        
        </div>
    );
}


export default Stream;