// App.js
import React, { useState } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'dashboard' && <p>Dashboard content goes here.</p>}

      {currentPage === 'home' && (
        <button onClick={() => handlePageChange('login')}>Go to Login</button>
      )}
      {currentPage === 'login' && (
        <button onClick={() => handlePageChange('dashboard')}>Go to Dashboard</button>
      )}
    </div>
  );
};

export default App;
