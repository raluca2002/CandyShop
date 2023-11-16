// App.js
import React, { useState } from 'react';
import HomePage from './homepage/HomePage';
import LoginPage from './login/LoginPage';
import SignUp from './signUp/SignUp';

export const tabs = { home: 'home', login: 'login', dashboard: 'dashboard', signup: 'signup' };

const App = () => {
  const [currentPage, setCurrentPage] = useState(tabs.home);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === tabs.home && <HomePage />}
      {currentPage === tabs.login && <LoginPage setCurrentPage={setCurrentPage} />}
      {currentPage === tabs.signup && <SignUp />}
      {currentPage === tabs.dashboard && <p>Dashboard content goes here.</p>}

      {currentPage === 'home' && (
        <button className='loginButton' onClick={() => handlePageChange(tabs.login)}>Login</button>
      )}
      {currentPage === 'login' && (
        <button onClick={() => handlePageChange(tabs.dashboard)}>Go to Dashboard</button>
      )}
    </div>
  );
};

export default App;
