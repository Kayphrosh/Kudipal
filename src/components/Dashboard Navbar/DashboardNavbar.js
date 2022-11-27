import React from 'react';
import './dashboard-navbar.css';

import userAvatar from '../../Images/user-avatar.svg';

const DashboardNavbar = () => {
  return (
    <nav className="dashboard-navbar">
      <div className="logo">
        <h3>Kudipal</h3>
      </div>

      <ul className="dashboard-nav-links">
        <li className="active-link">Overview</li>
        <li>Transactions</li>
        <li>Api Keys</li>
        <li>Settings</li>
      </ul>

      <div className="user-avatar">
        <img src={userAvatar} alt="" />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
