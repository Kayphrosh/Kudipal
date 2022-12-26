import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard-transaction.css';
import { Icon } from '@iconify/react';
const TransactionBalance = () => {
  return (
    <div className="transaction-balance">
      <header className="">
        <h3>Transaction</h3>

        <span className="transaction-cta">
          <button className="widthrawal-btn">Withdraw</button>
          <button className="fund-btn">Fund Wallet</button>
        </span>
      </header>

      <main>
        <div className="total-available-balance">
          <header>
            <p>Total Available Balance</p>

            <span>
              <Icon className="trend-up-icon" icon="icon-park-solid:trend" />
              +20%
            </span>
          </header>

          <h3>NGN12,000,000</h3>
        </div>

        <div className="total-available-balance">
          <header>
            <p>Total Pending Balance</p>

            <span>
              <Icon icon="icon-park-solid:trend" />
              +20%
            </span>
          </header>

          <h3>NGN2000,000.00</h3>
        </div>

        <div className="create-new-link-div">
          <h4>Create A New transaction Link</h4>

          <Link to="/dashboard/create-transaction-link">
            <span>
              proceed
              <Icon icon="mdi:arrow-top-right" />
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default TransactionBalance;
