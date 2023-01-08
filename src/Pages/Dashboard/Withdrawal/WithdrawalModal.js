import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './withdrawal.css';


const WithdrawalModal = ({ setModalOpen}) => {


  const handleClose = (e) => {
    e.preventDefault();
    setModalOpen(false);
  };
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/dashboard');
  };
  return (
    <section className="withdrawal-modal-container">
      <main>
        <button className="close-btn" onClick={handleClose}>
          <Icon icon="material-symbols:close" />
        </button>
        <span>
          <Icon icon="uil:money-withdrawal" />
        </span>

        <article>
            <h3>Withdrawal In Progress</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Vivamus egestas ipsum pharetra eu. Pulvinar ut ut ullamcorper.</p>
        </article>

        <button onClick={navigateToDashboard} className='withdrawal-modal-cta'>Got To Dashboard</button>
      </main>
    </section>
  );
};
export default WithdrawalModal;
