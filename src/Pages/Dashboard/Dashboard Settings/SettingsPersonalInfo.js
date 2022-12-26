import React from 'react';
import './dashboard-settings.css';

const SettingsPersonalInfo = () => {
  return (
    <main className='settings'>
      <header>
        <h4>Personal Information</h4>
        <p>Set your account details below</p>
      </header>

      <form action="">
        <div>
          <span>
            <label htmlFor="">First Name</label>
            <input type="text" placeholder="" value={'Olakunbi'} />
          </span>

          <span>
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder="" value={'Olabode'} />
          </span>
        </div>

        <span>
            <label htmlFor="" >Email</label>
            <input type="text" value={"olakunbiolabode01@gmail.com"}/>
        </span>
        <span>
            <label htmlFor="">Phone Number</label>
            <input type="text" value={"+2348111226837"} />
        </span>
      </form>
    </main>
  );
};

export default SettingsPersonalInfo;
