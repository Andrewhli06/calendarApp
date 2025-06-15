import "../components/Taskbar.css";
import "../components/Calendar.css";

function Taskbar() {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className= "taskBody">
            <div className= "taskbar"></div>
         <div className="calBody">
            {days.map((day) => (
                <div key={day} className="calendar">
                    {day}
                </div>
            ))}
         </div>
        </div>
    )
}

export default Taskbar;