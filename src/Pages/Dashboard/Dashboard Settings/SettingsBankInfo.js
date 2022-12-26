import React from 'react';
import './dashboard-settings.css';
import banks from '../../../components/banks';
const SettingsBankInfo = () => {
  return (
    <main className="settings">
      <header>
        <h4>Bank Information</h4>
        <p>Set your bank account details for withdrawal</p>
      </header>

      <form action="">
        <span>
          <label htmlFor="">Bank Account Number</label>
          <input type="number" placeholder='00000000000'/>
        </span>
        <span>
          <label htmlFor="">Choose Bank</label>
          <select>
            <option>Choose Bank</option>
            {banks.map((ban) => (
              <option value={JSON.stringify(ban)}>{ban.Name}</option>
            ))}
          </select>{' '}
        </span>

        <span>
          <label htmlFor="">Account Name</label>
          <input type="text" placeholder="" value={'AutoFill'} />
        </span>
      </form>
    </main>
  );
};

export default SettingsBankInfo;
