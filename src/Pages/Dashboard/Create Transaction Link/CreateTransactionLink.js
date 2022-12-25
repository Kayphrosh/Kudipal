import React from 'react';
import './create-transaction-link.css';
import DashboardNavbar from '../../../components/Dashboard Navbar/DashboardNavbar';
import backArrow from '../../../Images/backIcon.svg';

const CreateTransactionLink = () => {
  return (
    <section className="dashboard-overview-container create-transaction-container">
      <DashboardNavbar />

      <header>
        <div className="back-btn">
          <img src={backArrow} alt="" />

          <p>Transaction List</p>
        </div>

        <span className="create-transaction-cta">
          <button className="save-draft-btn">Save As Draft</button>

          <button className="create-link-btn">Create Link</button>
        </span>
      </header>

      <main>
        <h3>Create New Transaction Link</h3>

        <form action="">
          <label htmlFor="">Transaction Name</label>
          <input type="text" placeholder="Enter Transaction Name" />

          <label htmlFor="">Choose Amount Mode</label>
          <input type="text" />

          <label htmlFor="">Transaction Amount(NGN)</label>
          <input type="number" placeholder="Enter Transaction Amount" />

          <label htmlFor="">Funding Option</label>

          <div className="payment-options">


            <span>
              <input type="radio" />
              <p>Pay With Card</p>
            </span>
            <span>
              <input type="radio" />
              <p>Pay With USSD</p>
            </span>{' '}
            <span>
              <input type="radio" />
              <p>Pay With Bank Transfer</p>
            </span>
          </div>
        </form>
      </main>
    </section>
  );
};

export default CreateTransactionLink;
