import React, { useState } from "react";
import './style.css';
import StreamTab from "../../common/streamtab";
import StreamList from "../../ui/StreamList";
import FeedbackList from "../../ui/FeedbackList";
const Stream = () => {

    const [selectedTab, setSelectedTab] = useState("Stream");
    const [isStreamOpen, setIsStreamOpen] = useState(false);
    const [isFeedOpen, setIsFeedOpen] = useState(false);

    const selectHandler = (value) => {
        setSelectedTab(value);
        if (value === 'Stream') {
            setIsStreamOpen(true);
        }
        else if (value === 'FeedBack') {
            setIsFeedOpen(true);
        }
    };
  return (
            <div className="volunteer-stream-container flex column">
                <div className="flex row stream-tabs spaceBetween">
                <StreamTab
                    name={"Stream"}
                    selected={selectedTab === "Stream"}
                    value={"Stream"}
                    onSelected={(value) => selectHandler(value)}
                />
                <StreamTab
                    name={"Feedback"}
                    selected={selectedTab === "Feedback"}
                    value={"Feedback"}
                    onSelected={(value) => selectHandler(value)}
                    
                />
                      
            </div>
            <div className="volunteer-stream-content flex center wrap">
                <div className="volunteer-stream-main flex column">
                    <div className="stream-container fullwidth scroll flex column gap-40">
                    </div>
                    {selectedTab === 'Stream' && <StreamList/>}
                    {selectedTab === 'Feedback' && <FeedbackList/>}
                </div>
            </div>        
        </div>
    );
}


export default Stream;