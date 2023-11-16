// LoginPage.js
import React, { useState } from 'react';
import { tabs } from '../App';
import './LoginPage.css';

const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Implementează logica de autentificare aici
    // După autentificare, poți redirecționa către o altă pagină
    window.location.href = '/dashboard';
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
          <p>Don't have an account? <button onClick={() => props.setCurrentPage(tabs.signup)}>Sign Up</button></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
