// SignUp.js

import React from 'react';
import './SignUp.css'; // Import SignUp.css for styling

const SignUp = () => {
  return (
    <div className="signup-container">
      <h1>Create an Account</h1>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="email">Email (Username):</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="signup-button">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;

