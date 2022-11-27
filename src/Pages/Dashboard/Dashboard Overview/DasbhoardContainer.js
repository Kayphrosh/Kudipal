import React from 'react';
import './dashboard-overview.css';
import DashboardNavbar from '../../../components/Dashboard Navbar/DashboardNavbar';
import OverviewBalance from './OverviewBalance';
import DashboardRecentTransaction from './DashboardRecentTransaction';
const DasbhoardContainer = () => {
  return (
    <section className="dashboard-overview-container">
      <DashboardNavbar />
      <OverviewBalance />
      <DashboardRecentTransaction />
    </section>
  );
};

export default DasbhoardContainer;
