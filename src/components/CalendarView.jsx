const CalendarView = ({ calendarData }) => {
  return (
    <div className="calendar-view">
      <div className="header">
        <h3>This Week</h3>
        <span>October 2021</span>
      </div>
      <div className="days">
        {calendarData.days.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
      <div className="dates">
        {calendarData.dates.map((date, index) => (
          <div key={index} className={`date ${date.time ? "appointment" : ""}`}>
            {date.day}
            {date.time && <div>{date.time}</div>}
          </div>
        ))}
      </div>
      <div className="appointments">
        {calendarData.appointments.map((appt, index) => (
          <div key={index} className="appointment-card">
            <div className="appt-title">{appt.title}</div>
            <div className="appt-time">{appt.time}</div>
            <div className="appt-doc">{appt.doctor}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
