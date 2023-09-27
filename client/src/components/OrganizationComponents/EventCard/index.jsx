import React from "react";
import './style.css';
const EventCard=({event})=>{
    console.log("event:",event);
    // const {image_url,location,event_date,topic,description}=event;
    return(
        <div className="event-card-container flex column">
            <div className="event-header">
                <img src={`http://localhost:8000/storage/images/events/${event?.image_url}`} alt="event" />
            </div>
            <div className="event-content flex column center">
                <div className="event-topic">
                    <h4>{event?.topic}</h4>
                </div>
                <div className="event-desc">
                    <p>
                    {event?.description}
                    </p>
                    <div className="flex">Date:{event?.event_date}</div>
                </div>
            </div>
        </div>
    );
}
export default EventCard;