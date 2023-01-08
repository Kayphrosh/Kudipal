import React from 'react';
import { Icon } from '@iconify/react';
import './withdrawal.css';

const BankAccount = () => {
  return (
    <main className="withdrawal-form-container">
      <header>
        <span>
          <h4>Bank Account</h4>
          <p>Set your account details below</p>
        </span>

        <span className="circle">1/3</span>
      </header>

      <form action="">
        <div className="">
          <span className="icon-container">
            <Icon className="icon" icon="mdi:bank" />
          </span>

          <span className="account-details">
            <h5>0477317790 - Gaurantee Trust Bank</h5>
            <p>Olakunbi Olabode Oluwakayode</p>
          </span>

          <input type="radio" name="" id="" />
        </div>

        <div className="">
          <span className="icon-container">
            <Icon icon="mdi:bank-plus" />
          </span>

          <span className="account-details">
            <h5>Enter a new account details </h5>
          </span>

          <input type="radio" name="" id="" />
        </div>
      </form>
    </main>
  );
};

export default BankAccount;
