import React from 'react';
import { Icon } from '@iconify/react';
import './fund-wallet.css';

const FundWallet = ({ setFundModalOpen }) => {
  const handleClose = (e) => {
    e.preventDefault();
    setFundModalOpen(false);
  };

  return (
    <section className="withdrawal-modal-container fund-wallet-container">
      <main>
        <button className="close-btn" onClick={handleClose}>
          <Icon icon="material-symbols:close" />
        </button>

        <header>
          <h3>Fund Your Wallet</h3>
          <p>
            Use the details below to send money to your Kudi Wallet from any
            bank app/internet banking
          </p>
        </header>

        <form>
          <div>
            <label htmlFor="">Bank Name</label>
            <input type="text" value={'Wema Bank PLC'} />
          </div>

          <div>
            <label htmlFor=""> Account Number</label>
            <input type="text" value={'1101540499'} />
          </div>

          <div>
            <label htmlFor="">Account Name</label>
            <input type="text" value={'Olabode Olakunbi Oluwakayode'} />
          </div>
        </form>

        <div className="fund-wallet-cta">
          {/* <button className='close-btn-2'>Close</button> */}
          <button className="copy-btn">
            <Icon id='icon'  icon="ph:copy" />
            <p>Copy Details</p>
          </button>
        </div>
      </main>
    </section>
  );
};

export default FundWallet;
