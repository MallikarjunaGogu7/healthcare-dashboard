import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = ({ upcomingSchedule }) => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingSchedule.map((day, index) => (
        <div key={index} className="day">
          <h4>{day.day}</h4>
          {day.appointments.map((appt, idx) => (
            <SimpleAppointmentCard key={idx} {...appt} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default UpcomingSchedule