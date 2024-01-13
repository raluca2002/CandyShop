// App.js
import React, { useState, useEffect } from 'react';
import LoginPage from './login/LoginPage';
import SignUp from './signUp/SignUp';
import Navigation from './navigation/Navigation';

export const tabs = { home: 'home', login: 'login', signup: 'signup' };

const App = () => {
  const [currentWindow, setCurrentWindow] = useState(tabs.home);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token is present in local storage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLoginLogout = () => {
    // Clear the token from local storage on logout
    if (isLoggedIn) {
      localStorage.removeItem('token');
    }

    setIsLoggedIn(!isLoggedIn);
    setCurrentWindow(isLoggedIn ? tabs.home : tabs.login);
  };

  return (
      <div>
        {currentWindow === tabs.home && <Navigation isLoggedIn={isLoggedIn}/>}
        {currentWindow === tabs.login && <LoginPage setCurrentWindow={setCurrentWindow} />}
        {currentWindow === tabs.signup && <SignUp />}

        {currentWindow === 'home' && (
            <button className='loginButton' onClick={handleLoginLogout}>
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        )}

      </div>
  );
};

export default App;
