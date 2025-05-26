import './styles/App.css';
import Sidebar from './components/Sidebar'
import Header from "./components/Header";
import DashboardMainContent from "./components/DashboardMainContent";
import { mockData } from './data/mockData.js';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar navLinks={mockData.navLinks}/>
        <DashboardMainContent
          healthData={mockData.healthData}
          calendarData={mockData.calendarData}
          upcomingSchedule={mockData.upcomingSchedule}
          activityData={mockData.activityData}
        />
      </div>
    </div>
  );
};

export default App;
