import React, {useState} from 'react';
import './dashboard-overview.css';
import DashboardNavbar from '../../../components/Dashboard Navbar/DashboardNavbar';
import OverviewBalance from './OverviewBalance';
import DashboardRecentTransaction from './DashboardRecentTransaction';
import FundWallet from '../../../components/Fund Wallet/FundWallet';


const DasbhoardContainer = () => {

  const [fundModalOpen, setFundModalOpen] = useState(false);
  const fundModal = () => {
    setFundModalOpen(true);
  };
  return (
    <section className="dashboard-overview-container">
      {fundModalOpen && <FundWallet setFundModalOpen={setFundModalOpen} />}
      <DashboardNavbar />
      <OverviewBalance fundModal={fundModal} />
      <DashboardRecentTransaction />
    </section>
  );
};

export default DasbhoardContainer;
