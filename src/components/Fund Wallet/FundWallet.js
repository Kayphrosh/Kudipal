import React from 'react';
import { Icon } from '@iconify/react';
import './fund-wallet.css'


const FundWallet = ({setFundModalOpen}) => {


  const handleClose = (e) => {
    e.preventDefault();
    setFundModalOpen(false);
  };

  return (
    <section className="withdrawal-modal-container">
      <main>
        <button className="close-btn" onClick={handleClose}>
          <Icon icon="material-symbols:close" />
        </button>

        <h3>Fund Your Wallet</h3>
      </main>
    </section>
  );
};

export default FundWallet;
