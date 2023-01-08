import React from 'react';
import './withdrawal.css';

const WithdrawalAmount = () => {
  return (
    <main className="withdrawal-form-container">
      <header>
        <span>
          <h4>Withdrawal Amount</h4>
          <p>Set your account details below</p>
        </span>

        <span className="circle">2/3</span>
      </header>

      <form action="" className="withdrawal-amount">
        <div className="available-amount">
          <h5>Available Balance: NGN 1,200,000</h5>
        </div>

        <div className="">
          <span className="withdraw-portion">
            <input type="radio" name="" id="" />
            <p>Withdraw a portion from the available balance</p>
          </span>

          <input id='withdrawal-amount' type="text" placeholder='Enter withdrawal amount' />
        </div>

        <div className="">
          <span className="withdraw-portion">
            <input type="radio" name="" id="" />
            <p>Withdraw the entire amount</p>
          </span>
        </div>
      </form>
    </main>
  );
};

export default WithdrawalAmount;
