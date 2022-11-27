import React from 'react';
import './dashboard-overview.css';
import userAvatar from '../../../Images/user-avatar.svg';
import wavingHand from '../../../Images/waving-hand.svg';
import moreIcon from '../../../Images/more.svg';
const OverviewBalance = () => {
  return (
    <section className="overview-details-container">
      <main>
        <div className="user-overview-details">
          <img className="user-avatar-img" src={userAvatar} alt="" />
          <span>
            <h3>
              Welcome back, John! <img src={wavingHand} alt="" />{' '}
            </h3>
            <p>Go through your account and explore the features</p>
          </span>
        </div>

        <div className="balance-cards">
          <div className="balance-card">
            <div className="card-title">
              <p>Total Balance</p>
              <img src={moreIcon} alt="" />
            </div>

            <div className="card-amount">
              <h3>NGN12,000,000:00</h3>
            </div>
            <div className="balance-card-cta">
              <button>Fund Wallet</button>

              <button>Withdraw</button>
            </div>
          </div>

          <div className="balance-card">
            <div className="card-title">
              <p>Total Active Links</p>
              <img src={moreIcon} alt="" />
            </div>

            <div className="card-amount">
              <h3>012</h3>
            </div>

            <div className="balance-card-cta create-payment-link-btn">
              <button>Create Payment Link</button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default OverviewBalance;
