import React, { useState ,useEffect} from "react";
import './style.css';
import StreamTab from "../../common/streamtab";
import StreamList from "../../ui/StreamList";
import FeedbackList from "../../ui/FeedbackList";
import { sendRequest } from "../../../../config/request";

const Stream = ({orgId}) => {

    const [selectedTab, setSelectedTab] = useState("Stream");
    const [isStreamOpen, setIsStreamOpen] = useState(false);
    const [isFeedOpen, setIsFeedOpen] = useState(false);
    const [stream,setStream]=useState([]);
    const [feed,setFeed]=useState([]);

    const selectHandler = (value) => {
        setSelectedTab(value);
        if (value === 'Stream') {
            setIsStreamOpen(true);
        }
        else if (value === 'FeedBack') {
            setIsFeedOpen(true);
        }
    };
    useEffect(() => {
        const getStream=async()=>{
        try{
            const response=await sendRequest({
                method:"GET",
                route:`stream/${orgId}`,
                body:"",
                includeHeaders:true
            });
            if(response){
                console.log(response);
                setStream(response.stream);
            }
            }catch(error){
                console.log(error)
            }
        }
        getStream();
    }, []);

    useEffect(() => {
        const getFeed=async()=>{
        try{
            const response=await sendRequest({
                method:"GET",
                route:`volunteer/feedback/${orgId}`,
                body:"",
                includeHeaders:true
            });
            if(response){
                console.log(response);
                setFeed(response.feedback);
            }
            }catch(error){
                console.log(error)
            }
        }
        getFeed();
    }, []);
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
                    {selectedTab === 'Stream' && <StreamList stream={stream}/>}
                    {selectedTab === 'Feedback' && <FeedbackList feed={feed}/>}
                </div>
            </div>        
        </div>
    );
}


export default Stream;