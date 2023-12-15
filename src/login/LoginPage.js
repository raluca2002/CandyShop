import React, { useState } from 'react';
import axios from 'axios';
import {tabs} from "../App";

const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/users/login', {
        email: email,
        password: password,
      });

      if (response.data) {

        localStorage.setItem('token', response.data);
        console.log('Login successful');


        window.location.href = '/dashboard';

      } else {

        console.log('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
      <div className="login-container">
        <div className="login-box">
          <h2>Sign in to ByteMe</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="signup-link">
            <p>Don't have an account? <button onClick={() => props.setCurrentWindow(tabs.signup)}>Sign Up</button></p>
          </div>
        </div>
      </div>
  );
};

export default LoginPage;
