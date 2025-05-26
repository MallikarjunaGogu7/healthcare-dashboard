

const ActivityFeed = ({ activityData }) => {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <div>{activityData.appointments}</div>
      <div className="chart">
        {activityData.chart.map((height, index) => (
          <div key={index} className="bar" style={{ height: `${height}px` }}></div>
        ))}
      </div>
      <div className="labels">
        {activityData.labels.map((label, index) => (
          <div key={index}>{label}</div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed