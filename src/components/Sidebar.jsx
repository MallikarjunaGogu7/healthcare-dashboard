

const Sidebar = ({ navLinks }) => {
  return (
    <div className="sidebar">
      <h3>General</h3>
      {navLinks.map((link, index) => (
        <div key={index} className={`nav-item ${link.name === 'Dashboard' ? 'active' : ''}`}>
          <i className={link.icon}></i>
          <span>{link.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Sidebar