import React from 'react'
import DashboardNavbar from '../../../components/Dashboard Navbar/DashboardNavbar'
import TransactionBalance from './TransactionBalance'
import TrasactionList from './TrasactionList'
const DashboardTransactionContainer = () => {
  return (
    <section className='dashboard-overview-container'>
      
      <DashboardNavbar />
      <TransactionBalance />

      <TrasactionList />
    </section>
  )
}

export default DashboardTransactionContainer
