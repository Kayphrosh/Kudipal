import React from 'react';

const DashboardRecentTransaction = () => {
  return (
    <>
      <div className="recent-transaction-table">
        <header>
          <h4>Recent Transactions</h4>
          <span>
            <p>View All</p>
          </span>
        </header>

        <main></main>
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
                <span>Declined</span>
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
                <span>Declined</span>
              </td>
              <td>10:00am</td>
              <td>14th Jan, 2022</td>
              <td>1111</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardRecentTransaction;
