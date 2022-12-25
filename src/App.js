import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpContainer from './Pages/Sign-up/SignUpContainer';
import SignInContainer from './Pages/Sign-In/SignInContainer';
import DasbhoardContainer from './Pages/Dashboard/Dashboard Overview/DasbhoardContainer';
import DashboardTransactionContainer from './Pages/Dashboard/Dashboard Transaction/DashboardTransactionContainer';
import CreateTransactionLink from './Pages/Dashboard/Create Transaction Link/CreateTransactionLink';
import TransactionListContainer from './Pages/Dashboard/Dashboard List/ListContainer';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/sign-up" element={<SignUpContainer />}></Route>
          <Route path="/sign-in" element={<SignInContainer />}></Route>
          <Route path="/dashboard" element={<DasbhoardContainer />}></Route>

          <Route path="/dashboard/transactions" element={<DashboardTransactionContainer />}></Route>

          <Route path="/dashboard/create-transaction-link" element={<CreateTransactionLink />}></Route>

          <Route path="/dashboard/transaction-links" element={<TransactionListContainer />}></Route>


        </Routes>
        
      </Router>
    </>
  );
}

export default App;
