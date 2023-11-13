// HomePage.js
import React from 'react';

const HomePage = () => {
  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>Apasă pe butonul de go to login.</h2>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default HomePage;

