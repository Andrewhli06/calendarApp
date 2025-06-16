import "../components/Taskbar.css";
import "../components/Calendar.css";

function Taskbar() {
    const date = new Date();
    const month = date.getMonth(); // 0-11 (0 = January, 11 = December)
    const year = date.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the current mont

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

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