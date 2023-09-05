import React from "react";
import './style.css';
import EventCard from "../EventCard";
const EventSection=()=>{
    return(
        <div className="page event-page flex column">
            <div className="events-header flex center">
                <h1>Latest Events</h1>
            </div>
            <div className="events flex">
                <div className="events-container flex center">
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                </div>
            </div>
        </div>
    );
}
export default EventSection;