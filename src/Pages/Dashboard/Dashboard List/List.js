import React from 'react';
import { Link } from 'react-router-dom';
import './list.css';
const List = () => {
  return (
    <main className='transaction-list-container'>
      <header>
        <h3>Transaction List</h3>
        <Link to="/dashboard/create-transaction-link">
          <button>Create New Link</button>
        </Link>
      </header>


      <table className="recent-transactions">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Time</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#11100</td>
              <td>Car Rental</td>
              <td>&#8358;120,000:00</td>
              <td className="status">
                <span>Completed</span>
              </td>
              <td>12:00pm</td>
              <td>14th Jan, 2022</td>
              <td>1111</td>
            </tr>

            <tr>
              <td>#11100</td>
              <td>Car Rental</td>
              <td>&#8358;120,000:00</td>
              <td className="status">
                <span>Pending</span>
              </td>
              <td>10:00am</td>
              <td>14th Jan, 2022</td>
              <td>1111</td>
            </tr>
            
            <tr>
              <td>#11100</td>
              <td>Car Rental</td>
              <td>&#8358;120,000:00</td>
              <td className="status">
                <span>Pending</span>
              </td>
              <td>10:00am</td>
              <td>14th Jan, 2022</td>
              <td>1111</td>
            </tr>
          </tbody>
        </table>
    </main>
  );
};

export default List;
