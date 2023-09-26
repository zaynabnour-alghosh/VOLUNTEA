import React from "react";
import './style.css';
import { Calendar,momentLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
const localizer = momentLocalizer(moment);
const weekViewHeight = 400;
const CalendarComponent=({schedule})=>{
    const generateEventsForDay = (day, startTime, endTime) => {
        const events = [];
        const currentDate = moment().startOf('month').day(day);
        const lastDate = moment().endOf('month');
        while (currentDate.isSameOrBefore(lastDate)) {
            const startDateTime = moment(currentDate).set('hour', startTime.hour()).set('minute', startTime.minute());
            const endDateTime = moment(currentDate).set('hour', endTime.hour()).set('minute', endTime.minute());
            events.push({
                title: 'free',
                start: startDateTime.toDate(),
                end: endDateTime.toDate(),
                color: '#E9E3FE'
            });
            currentDate.add(7, 'days');
        }
        return events;
    };
    
    const events = [];
    schedule.forEach(scheduleItem => {
        const { day, start, end } = scheduleItem;
        const dayIndex = moment().day(day).day(); 
        const startTime = moment(start, 'hh:mm A');
        const endTime = moment(end, 'hh:mm A');
        events.push(...generateEventsForDay(dayIndex, startTime, endTime));
    });
    
    const CustomEvent = ({ event }) => (
        <div className="event-box">
            <p>Free</p>
        </div>
    );
    return(
        <div className="schedule-calendar-container flex center scroll" style={{ height: `${weekViewHeight}px`, width: '100%' }}>
            <Calendar
                className="scroll"
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                defaultView="agenda"
                components={{
                    event: CustomEvent}}
            />
        </div>
    );
}
export default CalendarComponent;