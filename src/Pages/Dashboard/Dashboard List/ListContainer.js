import React from 'react';
import './list.css';
import DashboardNavbar from '../../../components/Dashboard Navbar/DashboardNavbar';
import TransactionList from './List';

const ListContainer = () => {
  return (
    <section className="dashboard-overview-container">
      <DashboardNavbar />


        <TransactionList></TransactionList>
    </section>
  );
};

export default ListContainer;
