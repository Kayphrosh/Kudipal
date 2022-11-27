import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpContainer from './Pages/Sign-up/SignUpContainer';
import SignInContainer from './Pages/Sign-In/SignInContainer';
import DasbhoardContainer from './Pages/Dashboard/Dashboard Overview/DasbhoardContainer';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/sign-up" element={<SignUpContainer />}></Route>
          <Route path="/sign-in" element={<SignInContainer />}></Route>
          <Route path="/dashboard" element={<DasbhoardContainer />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
