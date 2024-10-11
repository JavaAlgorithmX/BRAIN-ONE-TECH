import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PropTypes from 'prop-types';
import { format, addDays, isWeekend, isToday, isBefore } from 'date-fns';


const BookingCalendar = ({ onDateChange, onTimeSelect }) => {
    const [date, setDate] = useState(new Date());
    const [showSlots, setShowSlots] = useState(false);
    const [bookedSlots, setBookedSlots] = useState({});
    const timeSlots = ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"];



    useEffect(() => {
        const today = new Date();
        let defaultDate = new Date(today);
        defaultDate.setDate(today.getDate() + 1); // Start with tomorrow's date

        // Adjust for weekend
        if (defaultDate.getDay() === 6) { // If Saturday
            defaultDate.setDate(defaultDate.getDate() + 2); // Move to Monday
        } else if (defaultDate.getDay() === 0) { // If Sunday
            defaultDate.setDate(defaultDate.getDate() + 1); // Move to Monday
        }

        setDate(defaultDate);
        onDateChange(defaultDate); // Update selected date
    }, []);

    const handleSlotBooking = (slot) => {
        const dateString = date.toDateString();
        setBookedSlots((prev) => ({
            ...prev,
            [dateString]: [...(prev[dateString] || []), slot],
        }));
        onTimeSelect(slot); // Update selected time when booked
    };

    const isSlotBooked = (slot) => {
        const dateString = date.toDateString();
        return bookedSlots[dateString]?.includes(slot);
    };

    const handleDateChange = (newDate) => {
        const selectedDay = newDate.getDay(); // Get the day of the week (0 = Sunday, 6 = Saturday)

        if (selectedDay >= 1 && selectedDay <= 5) { // Check if it's Monday (1) to Friday (5)
            setDate(newDate);
            setShowSlots(true); // Show time slots for weekdays
            onDateChange(newDate); // Update selected date
        } else {
            setShowSlots(false); // Hide time slots for weekends
        }
    };

    const getDotColor = (date) => {
        const dateString = date.toDateString();
        const bookedCount = bookedSlots[dateString]?.length || 0;

        if (bookedCount === timeSlots.length) {
            return 'bg-red-500'; // All slots booked
        } else if (bookedCount > 0) {
            return 'bg-orange-500'; // 1 to 3 slots booked
        } else {
            return 'bg-green-500'; // All slots available
        }
    };


    const renderDayContent = (value) => {
        // Skip dots for past dates, today's date, and weekends
        if (isBefore(value, new Date()) || isToday(value) || isWeekend(value)) {
            return null;
        }

        return (
            <div className="flex justify-center mt-1">
                <div
                    className={`inline-block w-2 h-2 rounded-full ${getDotColor(value)}`}
                />
            </div>
        );
    };



    return (
        <div className="w-full flex  items-center space-x-3">
            <div>
                <h3 className="text-xl font-semibold mb-4">Select a Date</h3>
                <Calendar
                    onChange={handleDateChange}

                    value={date}
                    minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                    className="rounded-lg shadow-lg"
                    tileContent={({ date, view }) => {
                        if (view === 'month') {
                            return renderDayContent(date);
                        }
                    }}
                />
                <p className="mt-4 text-center">Selected Date: {date.toDateString()}</p>
            </div>

            {showSlots && (
                <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-2">Available Time Slots:</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {timeSlots.map((slot, index) => (
                            <div key={index} className={`border p-2 rounded shadow-md text-center cursor-pointer ${isSlotBooked(slot) ? 'bg-gray-300' : 'hover:bg-blue-100'
                                }`} onClick={() => !isSlotBooked(slot) && handleSlotBooking(slot)}
                                style={{ opacity: isSlotBooked(slot) ? 0.5 : 1 }}>
                                {slot}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

BookingCalendar.propTypes = {
    onDateChange: PropTypes.func.isRequired,
    onTimeSelect: PropTypes.func.isRequired,
};

export default BookingCalendar;

