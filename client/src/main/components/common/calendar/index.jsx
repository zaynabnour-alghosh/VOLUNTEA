import React from "react";
import './style.css';
import { Calendar,momentLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
const localizer = momentLocalizer(moment);
const weekViewHeight = 400;
const CalendarComponent=()=>{
    const jsonData = {
        weekdays: [
          { day: 'Monday', start: '10:00', end: '17:00' },
          { day: 'Tuesday', start: '11:00', end: '18:00' }
        ]
    };
      
    const events = jsonData.weekdays.map(item => ({
        title: 'free',
        start: new Date(2023, 8, getDayNumber(item.day), getTimeHour(item.start), getTimeMinute(item.start)),
        end: new Date(2023, 8, getDayNumber(item.day), getTimeHour(item.end), getTimeMinute(item.end)),
        color: '#E9E3FE'
    }));
      
    function getDayNumber(day) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek.indexOf(day);
    }
      
    function getTimeHour(time) {
        return parseInt(time.split(':')[0]);
    }
      
    function getTimeMinute(time) {
        return parseInt(time.split(':')[1]);
    }
    const CustomEvent = ({ event }) => (
        <div className="event-box">
          free
        </div>
      );

    return(
        <div className="schedule-calendar-container flex center" style={{ height: `${weekViewHeight}px`, width: '100%' }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                defaultView="week"
                components={{
                    event: CustomEvent}}
            />
        </div>
    );
}
export default CalendarComponent;