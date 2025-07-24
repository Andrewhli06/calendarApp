import React, { useState } from "react";
import "../components/calendar.css";


function OpenTaskInput({ day, month, year, onClose, onSaveTask, currentTasks,onDeleteTask }) {
    const [task, setTask] = useState("");

    const handleSubmit = () => {
        if (task.trim()) {
            onSaveTask(day, month, year, task); // ← save to parent
            setTask("");
        }
    };

    const handleDelete = (index) => {
        onDeleteTask(day, month, year, index);
    };

    return (
        <div>
            <h3>Add Task for {day}/{month + 1}/{year}</h3>
            <input
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Save Task</button>
            <button onClick={onClose}>Cancel</button>
            {currentTasks.length > 0 ? (
                <div className="existing-tasks">
                    <h4>Current Tasks:</h4>
                    <ul>
                        {currentTasks.map((t, i) => (
                            <li key={i} className="task-item">
                                {t}
                                <button className="delete-btn" onClick={() => handleDelete(i)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No tasks yet for this day.</p>
            )}
        </div>
    );
}

export default OpenTaskInput;