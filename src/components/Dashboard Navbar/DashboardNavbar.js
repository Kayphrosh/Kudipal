import React from 'react';
import './dashboard-navbar.css';
import { Link } from 'react-router-dom';
import userAvatar from '../../Images/user-avatar.svg';

const DashboardNavbar = () => {
  return (
    <nav className="dashboard-navbar">
      <div className="logo">
        <h3>Kudipal</h3>
      </div>

      <ul className="dashboard-nav-links">
        <li className="active-link">
          <Link to="/dashboard">Overview</Link>
        </li>
        <li>
          <Link to="/dashboard/transactions">Transactions</Link>
        </li>

        <li>
          <Link to="/dashboard/transaction-links">Links</Link>
        </li>

        <li>
          <Link to="/dashboard/settings">Settings</Link>
        </li>
      </ul>

      <div className="user-avatar">
        <img src={userAvatar} alt="" />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
