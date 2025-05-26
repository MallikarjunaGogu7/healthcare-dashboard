import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">HealthCare.</div>
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search" />        
      </div>
      <i className="fas fa-bell"></i>
      <div className="icons">        
        <div className="avatar"></div>
        <i className="fas fa-plus"></i>
      </div>
    </div>
  );
};

export default Header;
