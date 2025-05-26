export const mockData = {
  navLinks: [
    { name: 'Dashboard', icon: 'fas fa-th' },
    { name: 'History', icon: 'fas fa-history' },
    { name: 'Calendar', icon: 'fas fa-calendar-alt' },
    { name: 'Appointments', icon: 'fas fa-stethoscope' },
    { name: 'Statistics', icon: 'fas fa-chart-bar' },
    { name: 'Tests', icon: 'fas fa-vial' },
    { name: 'Chat', icon: 'fas fa-comment' },
    { name: 'Support', icon: 'fas fa-headset' },
    { name: 'Setting', icon: 'fas fa-cog' },
  ],
  healthData: [
    { title: 'Lungs', date: 'Date: 26 Oct 2021', progress: 60, color: 'lungs' },
    { title: 'Teeth', date: 'Date: 26 Oct 2021', progress: 70, color: 'teeth' },
    { title: 'Bone', date: 'Date: 26 Oct 2021', progress: 75, color: 'bone' },
  ],
  calendarData: {
    days: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    dates: [
      { day: 25, time: '10:00' },
      { day: 26, time: '09:00' },
      { day: 27 },
      { day: 28, time: '11:00' },
      { day: 29 },
      { day: 30, time: '14:00' },
      { day: 31, time: '10:00' },
    ],
    appointments: [
      { title: 'Dentist', time: '09:00 - 11:00', doctor: 'Dr. Cameron Willis', color: '#1e90ff' },
      { title: 'Physiotherapy Appointment', time: '11:00 - 12:00', doctor: 'Dr. Kevin Jones', color: '#1e90ff' },
    ],
  },
  upcomingSchedule: [
    {
      day: 'On Thursday',
      appointments: [
        { title: 'Health checkup complete', time: '11:00 AM', icon: 'fas fa-check-circle' },
        { title: 'Ophthalmologist', time: '14:00 PM', icon: 'fas fa-eye' },
      ],
    },
    {
      day: 'On Saturday',
      appointments: [
        { title: 'Cardiologist', time: '12:00 AM', icon: 'fas fa-heart' },
        { title: 'Neurologist', time: '16:00 PM', icon: 'fas fa-brain' },
      ],
    },
  ],
  activityData: {
    appointments: '3 appointments on this week',
    chart: [40, 60, 30, 80, 50, 20, 70],
    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  },
};