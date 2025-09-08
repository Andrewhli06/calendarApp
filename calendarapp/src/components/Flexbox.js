import React, { useState } from "react";
import "../components/Taskbar.css";
import "../components/calendar.css";
import MonthDropDown from "../components/MonthDropDown/MonthDropDown.js";
import MonthDropDownItem from "../components/MonthDropDown/MonthDropDownItem/MonthDropDownItem.js";
import OpenTaskInput from "../components/Addtask.js";

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
const dayNames = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday"
}

function Taskbar() {
    const [taskPopupDay, setTaskPopupDay] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());

    const today = new Date();

    const handleAddTaskClick = (day) => {
        setTaskPopupDay(day);
    };

    const handleCloseTaskPopup = () => {
        setTaskPopupDay(null);
    };

    const [tasks, setTasks] = useState({});

    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const currentMonthName = monthNames[month];

  // 🔑 days in selected month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const handleSaveTask = (day, month, year, newTask) => {
        const dateKey = `${year}-${month + 1}-${day}`;
        setTasks((prevTasks) => ({
            ...prevTasks,
            [dateKey]: [...(prevTasks[dateKey] || []), newTask],
        }));
    };

    const handleDeleteTask = (day, month, year, deleteWhere) => {
        const dateKey = `${year}-${month + 1}-${day}`;
        setTasks((prevTasks) => {
            const updatedTasks = [...(prevTasks[dateKey] || [])];
            updatedTasks.splice(deleteWhere, 1);
            return {
                ...prevTasks,
                [dateKey]: updatedTasks,
            };
        });
    };

    return (
        <div>
            <div className="taskBody">
                <div className="taskbar"></div>
                <div className="calBody">
                    <div className="whatMonth">
                        <MonthDropDown
                        buttonText= {currentMonthName} content={<>
                        {
                            monthNames && Object.keys(monthNames).map((key) => (
                            <MonthDropDownItem 
                            key={key} 
                            onClick={() => setCurrentDate(new Date(year, key, 1))}
                            >
                            {monthNames[key]}
                            </MonthDropDownItem>
                            ))
                        }
                        </>}
                        />
                        <button type="button" onClick={() => handleAddTaskClick(currentDate.getDate())}>Add A Task</button>
                    </div>
                    {days.map((day) => {
                        const dateKey = `${year}-${month + 1}-${day}`;
                        const tasksForDay = tasks[dateKey] || [];
                        const isToday =
                            day === today.getDate() &&
                            month === today.getMonth() &&
                            year === today.getFullYear();

                        return (
                            <div
                                key={day}
                                id={day}
                                className={isToday ? "calendar currentDay" : "calendar"}
                            >
                                <button onClick={() => handleAddTaskClick(day)}>
                                    <div>{day}</div>
                                    {tasksForDay.map((task, i) => (
                                    <div key={i} className="task-preview">• {task}</div>
                                    ))}
                                </button>
                                </div>
                        );
                    })}
                </div>
            </div>

            {/* Task input popup */}
            {taskPopupDay && (
                <div className="taskPopup task-open-popup">
                    <OpenTaskInput
                        day={taskPopupDay}
                        month={month}
                        year={year}
                        onClose={handleCloseTaskPopup}
                        onSaveTask={handleSaveTask}
                        currentTasks={tasks[`${year}-${month + 1}-${taskPopupDay}`] || []}
                        onDeleteTask={handleDeleteTask}
                    />
                </div>
            )}
        </div>
    );
}


// should refactor these two functions into a clickhandler function due to the fact that they are very similar functions


export default Taskbar;