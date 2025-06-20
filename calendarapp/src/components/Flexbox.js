import "../components/Taskbar.css";
import "../components/Calendar.css";

function Taskbar() {
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

    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the current month

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const currentMonthName = monthNames[month];

    return (
        <div>
            <div className="taskBody">
                <div className="taskbar"></div>
                <div className="calBody">
                    <div className="whatMonth">{currentMonthName}</div>
                    {days.map((day) => (
                        <div key={day} className="calendar">
                            {/* {day} */}
                            <button>{day}</button>
                        </div>

                    ))}
                    {days.map((day) => (
                        <div class="popup" id={day}>
                            <p>{day}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Taskbar;