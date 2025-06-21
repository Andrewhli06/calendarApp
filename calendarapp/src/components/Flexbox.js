import React, { useState } from "react";
import "../components/Taskbar.css";
import "../components/calendar.css";
import OpenTaskInput from "../components/Addtask.js";

const date = new Date();
const month = date.getMonth(); // 0-11 (0 = January, 11 = December)
const year = date.getFullYear();
const monthNames = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}
const dayOfWeek = date.getDay();
const dayNames = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday"
}

const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the current month

const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

const currentMonthName = monthNames[month];

function Taskbar() {
    const [taskPopupDay, setTaskPopupDay] = useState(null);

    const handleAddTaskClick = (day) => {
        setTaskPopupDay(day);
    };

    const handleCloseTaskPopup = () => {
        setTaskPopupDay(null);
    };
    return (
        <div>
            <div className="taskBody">
                <div className="taskbar"></div>
                <div className="calBody">
                <div className="whatMonth">
                    {currentMonthName}
                    <button type="button" onClick={() => handleAddTaskClick(date.getDate())}>Add A Task</button>
                </div>
                    {days.map((day) => (
                        <div key={day} className="calendar">
                            {/* {day} */}
                            <button key={day} onClick={() => openPopup(day)}>{day}</button>
                        </div>

                    ))}
                    {days.map((day) => (
                        <div class="popup" id={day}>
                            <p>To Do List: {dayNames[dayOfWeek]}, {currentMonthName} {day}</p>
                            <button key={day} onClick={() => closePopup(day)}>close</button>
                        </div>
                    ))}
                </div>
            </div>
            {/*I kind of got it to work but i still need to figue out how to set which day to have the tassk on */}
            {taskPopupDay && (
                <div className="taskPopup task-open-popup">
                    <OpenTaskInput
                        day={taskPopupDay}
                        month={month}
                        year={year}
                        onClose={handleCloseTaskPopup}
                    />
                </div>
            )}
        </div>
    )
}


// should refactor these two functions into a clickhandler function due to the fact that they are very similar functions
function openPopup(id) {
    let popup = document.getElementById(id);
    // we need to fix this for loop but it does the function i need (close a popup when another one is opened)
    for (let i = 1; i <= days.length; i++) {
        closePopup(i);
    }
    popup.classList.add("open-popup");
}

function closePopup(id) {
    let popup = document.getElementById(id);
    popup.classList.remove("open-popup");
}

export default Taskbar;