

const HealthStatusCards = ({ healthData }) => {
  return (
    <div className="health-status-cards">
      {healthData.map((data, index) => (
        <div key={index} className="health-status-card">
          <div className={`title ${data.color}`}>
            <i
              className={`fas fa-${
                data.title.toLowerCase() === 'lungs'
                  ? 'lungs'
                  : data.title.toLowerCase() === 'teeth'
                  ? 'tooth'
                  : 'bone'
              }`}
            ></i>
            {data.title}
          </div>
          <div className="date">{data.date}</div>
          <div className="progress">
            <div className={`progress ${data.color}`} style={{ width: `${data.progress}%` }}></div>
          </div>          
        </div>
      ))}
    </div>
  )
}

export default HealthStatusCards