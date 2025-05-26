import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = ({ healthData, calendarData, upcomingSchedule, activityData }) => {
  return (
    <div className="dashboard-content">
      <div className='health-section'>
        <div className='box1'>
          <AnatomySection />
        </div>

        <div className='box2'>
          <HealthStatusCards healthData={healthData} />
        </div>

        <div className='box3'>
          <ActivityFeed activityData={activityData} />
        </div>
      </div>
      <div>
        <CalendarView calendarData={calendarData} />
        <UpcomingSchedule upcomingSchedule={upcomingSchedule} />
      </div>
      
      
    </div>
  );
}

export default DashboardMainContent