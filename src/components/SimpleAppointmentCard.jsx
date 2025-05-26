

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card">
      <div className="title">
        <i className={icon}></i>
        {title}
      </div>
      <div>{time}</div>
    </div>
  )
}

export default SimpleAppointmentCard