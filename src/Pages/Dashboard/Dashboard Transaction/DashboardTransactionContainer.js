import React, {useState} from 'react';
import DashboardNavbar from '../../../components/Dashboard Navbar/DashboardNavbar';
import TransactionBalance from './TransactionBalance';
import TrasactionList from './TrasactionList';
import FundWallet from '../../../components/Fund Wallet/FundWallet';

const DashboardTransactionContainer = () => {
  const [fundModalOpen, setFundModalOpen] = useState(false);
  const fundModal = () => {
    setFundModalOpen(true);
  };
  return (
    <section className="dashboard-overview-container">
      {fundModalOpen && <FundWallet setFundModalOpen={setFundModalOpen} />}
      <DashboardNavbar />
      <TransactionBalance fundModal={fundModal}  />

      <TrasactionList />
    </section>
  );
};

export default DashboardTransactionContainer;
