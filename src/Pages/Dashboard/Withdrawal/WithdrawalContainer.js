import React, { useEffect, useState } from 'react';
import './withdrawal.css';
import DashboardNavbar from '../../../components/Dashboard Navbar/DashboardNavbar';
import backArrow from '../../../Images/backIcon.svg';
import WithdrawalAmount from './WithdrawalAmount';
import WithdrawalConfirmation from './WithdrawalConfirmation';
import BankAccount from './BankAccount';
import WithdrawalModal from './WithdrawalModal';


const WithdrawalContainer = () => {
  const [currentStep, setCurrentStep] = React.useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const withdrawalModal = () => {
    setModalOpen(true);

    console.log('hello world')
  };

  return (
    <section className="dashboard-overview-container create-transaction-container withdrawal-container">
      {modalOpen && <WithdrawalModal setModalOpen={setModalOpen} />}
      <DashboardNavbar />

      <header>
        <div className="back-btn">
          <img src={backArrow} alt="" />

          <p>Transaction List</p>
        </div>

        <h3>Withdrawal</h3>
      </header>

      {currentStep === 1 && <BankAccount />}
      {currentStep === 2 && <WithdrawalAmount />}
      {currentStep === 3 && <WithdrawalConfirmation />}

      <div className="withdrawal-cta">
        {currentStep > 1 && (
          <button id="previous" type="button" onClick={handlePrev}>
            Previous
          </button>
        )}
        {currentStep < 3 && (
          <button id="next" type="button" onClick={handleNext}>
            Next
          </button>
        )}

        {currentStep === 3 && (
          <button onClick={withdrawalModal} id="next" type="submit">
            Submit
          </button>
        )}
      </div>
    </section>
  );
};

export default WithdrawalContainer;
