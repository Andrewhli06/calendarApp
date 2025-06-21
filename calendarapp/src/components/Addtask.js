import React, {useState} from "react";
import "../components/calendar.css";


function OpenTaskInput({day,month,year,onClose}) {
    const [task, setTask] = useState("");

    const handleSubmit = () => {
        if (task.trim()) {
            console.log(`Task for ${day}/${month + 1}/${year}: ${task}`);
            setTask("");
            onClose();
        }
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
        </div>
    );
}

export default OpenTaskInput;