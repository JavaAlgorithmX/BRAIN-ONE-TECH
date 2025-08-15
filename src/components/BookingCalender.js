import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PropTypes from 'prop-types';
// import { format, addDays, isWeekend, isToday, isBefore } from 'date-fns';


const BookingCalendar = ({ onDateChange }) => {
    const [date, setDate] = useState(new Date());
   
    useEffect(() => {
        const today = new Date();
        let defaultDate = new Date(today);
        defaultDate.setDate(today.getDate() + 1); // Start with tomorrow's date
        setDate(defaultDate);
        onDateChange(defaultDate); // Update selected date
    }, [onDateChange]);

    const handleDateChange = (newDate) => {
        //const selectedDay = newDate.getDay(); // Get the day of the week (0 = Sunday, 6 = Saturday)
        setDate(newDate);
        onDateChange(newDate); // Update selected date
    };

    return (
        <div className="w-full flex flex-col md:flex-row items-center space-x-3 ">
            <div>
                <h3 className="text-xl font-semibold mb-4">Select a Date</h3>
                <Calendar
                    onChange={handleDateChange}
                    value={date}
                    minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                    className="rounded-lg shadow-lg"
                />
                <p className="mt-4 text-center">Selected Date: {date.toDateString()}</p>
            </div>
        </div>
    );
};

BookingCalendar.propTypes = {
    onDateChange: PropTypes.func.isRequired,
    //onTimeSelect: PropTypes.func.isRequired,
};

export default BookingCalendar;

