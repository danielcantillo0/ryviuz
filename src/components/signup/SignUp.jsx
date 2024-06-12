import React, { useState } from 'react';
import './SignUp.css'; // Import SignUp.css for styling
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'; // Import Firebase Auth methods
import { firebaseApp } from '../../firebaseConfig';

const auth = getAuth(firebaseApp); // Get Firebase Auth instance



const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State variable for error message
    const [successMessage, setSuccessMessage] = useState(''); // State variable for success message
    const [passwordStrength, setPasswordStrength] = useState(''); // State variable for password strength
  
    const handlePasswordChange = (e) => {
      const newPassword = e.target.value;
      setPassword(newPassword);
      calculatePasswordStrength(newPassword);
    };
  
    const calculatePasswordStrength = (password) => {
      // Basic criteria: At least 8 characters
      if (password.length >= 8) {
        setPasswordStrength('Strong');
      } else if (password.length >= 6) {
        setPasswordStrength('Moderate');
      } else {
        setPasswordStrength('Weak');
      }
    };
  
    const validateEmail = (email) => {
      // Regular expression to validate email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };
  
    const validatePassword = (password) => {
      // Add your password validation logic here (e.g., minimum length, containing special characters)
      // For example, we'll just check if the password length is at least 8 characters
      return password.length >= 8;
    };
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      if (!validateEmail(email)) {
        setError('Invalid email format');
        return;
      }
      if (!validatePassword(password)) {
        setError('Password must be at least 8 characters long');
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password); // Use createUserWithEmailAndPassword method
        // User created successfully
        sendVerificationEmail(userCredential.user); // Send verification email to the user
        setSuccessMessage('Account created successfully! Check your email for verification.'); // Set success message
      } catch (error) {
        // Handle errors
        console.error('Error signing up:', error);
        setError(error.message); // Set error message in state
      }
    };
  
    const sendVerificationEmail = (user) => {
      sendEmailVerification(user)
        .then(() => {
          console.log('Verification email sent successfully');
          // You can redirect the user to a confirmation page or display a message
        })
        .catch((error) => {
          console.error('Error sending verification email:', error);
          // Handle error
        });
    };
  
    return (
      <div className="signup-container">
        <h1>Create an Account</h1>
        {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message if success exists */}
        <form className="signup-form" onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="email">Email (Username):</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <div className="password-strength">
            {passwordStrength && <span>Password Strength: {passwordStrength}</span>}
          </div>
          <button type="submit" className="signup-button">Sign up</button>
        </form>
        {error && <p className="error-message">{error}</p>} {/* Display error message if error exists */}
      </div>
    );
  }
  
  export default SignUp;




