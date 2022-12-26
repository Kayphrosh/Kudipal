import React from 'react';
import './dashboard-navbar.css';
import { Link, NavLink } from 'react-router-dom';
import userAvatar from '../../Images/user-avatar.svg';

const DashboardNavbar = () => {
  return (
    <nav className="dashboard-navbar">
      <div className="logo">
        <h3>Kudipal</h3>
      </div>

      <ul className="dashboard-nav-links">
        <NavLink
          className="link"
          to="/dashboard"
          id={window.location.pathname === '/dashboard' ? 'active' : ''}
        >
          Overview
        </NavLink>
        <NavLink
          className="link"
          to="/dashboard/transactions"
          id={window.location.pathname === "/dashboard/transactions" ? 'active' : ''}
        >
          Transactions
        </NavLink>

        <NavLink
          className="link"
          to="/dashboard/transaction-links"
          id={window.location.pathname === "/dashboard/transaction-links" ? 'active' : ''}
        >
          Links
        </NavLink>

        <NavLink
          className="link"
          to="/dashboard/settings"
          id={window.location.pathname === "/dashboard/settings" ? 'active' : ''}
        >
          Settings
        </NavLink>

      </ul>

      <div className="user-avatar">
        <img src={userAvatar} alt="" />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
