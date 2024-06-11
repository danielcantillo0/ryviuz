// Login.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Welcome back to <span className='logo'>Ryviuz</span></h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button">Log in</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p> {/* Link to the sign-up page */}
    </div>
  );
}

export default Login;
