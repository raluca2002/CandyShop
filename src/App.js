// App.js
import React, { useState } from 'react';
import LoginPage from './login/LoginPage';
import SignUp from './signUp/SignUp';
import Navigation from './navigation/Navigation';

export const tabs = { home: 'home', login: 'login', dashboard: 'dashboard', signup: 'signup'};

const App = () => {
  const [currentWindow, setCurrentWindow] = useState(tabs.home);

  const handleWindowChange = (page) => {
    setCurrentWindow(page);
  };

  return (
    <div>
      {currentWindow === tabs.home && <Navigation />}
      {currentWindow === tabs.login && <LoginPage setCurrentWindow={setCurrentWindow} />}
      {currentWindow === tabs.signup && <SignUp />}
      {currentWindow === tabs.dashboard && <p>Dashboard content goes here.</p>}

      {currentWindow === 'home' && (
        <button className='loginButton' onClick={() => handleWindowChange(tabs.login)}>Login</button>
      )}
      {currentWindow === 'login' && (
        <button onClick={() => handleWindowChange(tabs.dashboard)}>Go to Dashboard</button>
      )}
    </div>
  );
};

export default App;
