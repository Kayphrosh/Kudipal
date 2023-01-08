import React from 'react';
import './withdrawal.css';
import { Icon } from '@iconify/react';

const WithdrawalConfirmation = () => {
  return (
    <main className="withdrawal-form-container">
      <header>
        <span>
          <h4>Withdrawal Confirmation</h4>
          <p>Set your account details below</p>
        </span>

        <span className="circle">3/3</span>
      </header>

      <form action="" className="withdrawal-confirmation">
        <main className="withdrawal-confirmation-details">
          <span>
            <p>Amount</p>
            <h6>N100,000</h6>
          </span>

          <span>
            <p>From</p>
            <h6>Hiyalo HQ</h6>
          </span>

          <span>
            <p>To</p>
            <h6>Olakunbi Oluwakayode Olabode</h6>
          </span>

          <span>
            <p>Bank</p>
            <h6>Guarantee Trust Bank</h6>
          </span>
        </main>

        <div className="">
            <p>Enter Your Pin</p>


          <input
            id="withdrawal-amount"
            type="text"
            placeholder="Enter withdrawal amount"
          />
        </div>
      </form>
    </main>
  );
};

export default WithdrawalConfirmation;
