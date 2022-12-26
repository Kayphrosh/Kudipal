import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './dashboard-settings.css';
import DashboardNavbar from '../../../components/Dashboard Navbar/DashboardNavbar';
import SettingsPersonalInfo from './SettingsPersonalInfo';
import SettingsPassword from './SettingsPassword';
import SettingsBankInfo from './SettingsBankInfo';

const DashboardSettingsContainer = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="dashboard-overview-container">
      <DashboardNavbar />

      <main className="settings-container">
        <header>
          <h3>Account Settings</h3>

          <span>
            <Link to="/dashboard/create-transaction-link">
              <button className="discard-btn">Discard Changes</button>
            </Link>
            <Link to="/dashboard/create-transaction-link">
              <button className="save-changes-btn">Save Changes</button>
            </Link>
          </span>
        </header>

        <div className="settings-tabs">
          <span
            className={
              toggleState === 1 ? 'settings-tab active-tab' : 'settings-tab'
            }
            onClick={() => toggleTab(1)}
          >
            <p>Personal Info</p>
          </span>
          <span
            className={
              toggleState === 2 ? 'settings-tab active-tab' : 'settings-tab'
            }
            onClick={() => toggleTab(2)}
          >
            <p>User Verification</p>
          </span>
          <span
            className={
              toggleState === 3 ? 'settings-tab active-tab' : 'settings-tab'
            }
            onClick={() => toggleTab(3)}
          >
            <p>Password</p>
          </span>
          <span
            className={
              toggleState === 4 ? 'settings-tab active-tab' : 'settings-tab'
            }
            onClick={() => toggleTab(4)}
          >
            <p>Bank Info</p>
          </span>
          <span
            className={
              toggleState === 5 ? 'settings-tab active-tab' : 'settings-tab'
            }
            onClick={() => toggleTab(5)}
          >
            <p>Terms & Policies</p>
          </span>
        </div>

        {toggleState === 1 && (
          <SettingsPersonalInfo
            className={
              toggleState === 1
                ? 'settings-content  active-settings-content'
                : 'settings-content'
            }
          />
        )}

        {toggleState === 2 && (
          <SettingsPassword
            className={
              toggleState === 2
                ? 'settings-content  active-settings-content'
                : 'settings-content'
            }
          />
        )}

        {toggleState === 3 && (
          <SettingsPassword
            className={
              toggleState === 3
                ? 'settings-content  active-settings-content'
                : 'settings-content'
            }
          />
        )}

        {toggleState === 4 && (
          <SettingsBankInfo
            className={
              toggleState === 4
                ? 'settings-content  active-settings-content'
                : 'settings-content'
            }
          />
        )}

        {toggleState === 5 && (
          <SettingsPassword
            className={
              toggleState === 5
                ? 'settings-content  active-settings-content'
                : 'settings-content'
            }
          />
        )}
      </main>
    </section>
  );
};

export default DashboardSettingsContainer;
