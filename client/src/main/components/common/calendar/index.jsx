import React from "react";
import './style.css';
import { Calendar,momentLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
const localizer = momentLocalizer(moment);
const weekViewHeight = 400;
const CalendarComponent=({schedule})=>{
    // const jsonData = {
    //     weekdays: [
    //       { day: 'Monday', start: '10:00', end: '17:00' },
    //       { day: 'Tuesday', start: '11:00', end: '18:00' }
    //     ]
    // };
      
    // const events = schedule.map(item => ({
    //     title: 'free',
    //     // start: new Date(2023, 9, getDayNumber(item.day), getTimeHour(item.start), getTimeMinute(item.start)),
    //     // end: new Date(2023, 9, getDayNumber(item.day), getTimeHour(item.end), getTimeMinute(item.end)),
    //     start: getEventDate(item.day, item.start),
    //     end: getEventDate(item.day, item.end),
    //     color: '#E9E3FE'
    // }));
      
    // function getDayNumber(day) {
    //     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //     return daysOfWeek.indexOf(day);
    // }
      
    // function getTimeHour(time) {
    //     return parseInt(time.split(':')[0]);
    // }
      
    // function getTimeMinute(time) {
    //     return parseInt(time.split(':')[1]);
    // }
    const generateEventsForDay = (day, startTime, endTime) => {
        const events = [];
        const currentDate = moment().startOf('month').day(day);  // Get the first occurrence of the day in the current month
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
            currentDate.add(7, 'days');  // Jump to the same day next week
        }
        return events;
    };
    const events = [];
    schedule.forEach(scheduleItem => {
        const { day, start, end } = scheduleItem;
        const dayIndex = moment().day(day).day();  // Get the day index (0 for Sunday, 1 for Monday, ...)
        const startTime = moment(start, 'hh:mm A');
        const endTime = moment(end, 'hh:mm A');
        events.push(...generateEventsForDay(dayIndex, startTime, endTime));
    });


    // function getEventDate(day, time) {
    //     const currentDate = new Date();
    //     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //     const dayIndex = daysOfWeek.indexOf(day);
    //     const currentDay = currentDate.getDay();
    //     let diff = dayIndex - currentDay;
    //     if (diff <= 0) diff += 7;
    //     const eventDate = new Date(currentDate);
    //     eventDate.setDate(currentDate.getDate() + diff);
    //     const [hours, minutes] = time.split(':').map(Number);
    //     eventDate.setHours(hours, minutes, 0, 0);
    //     return eventDate;
    // }

    const CustomEvent = ({ event }) => (
        <div className="event-box">
            <p>Free</p>
        </div>
    );


    // const CustomEvent = ({ event }) => (
    //     <div className="event-box">
    //       free
    //     </div>
    //   );

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