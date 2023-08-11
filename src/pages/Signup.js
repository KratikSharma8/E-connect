import React, { useState } from 'react';
import './CSS/signup.css';
import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification
} from '../firebase-config.js';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('user');

  const handleSignup = async () => {
    try {
                  // Basic validation checks
                  if (!name || !email || !password || !confirmPassword || !phoneNumber) {
                    console.error('Please fill in all fields.');
                    return;
                  }
            
                  if (password !== confirmPassword) {
                    console.error('Passwords do not match.');
                    return;
                  }
            
                  // Perform signup
                  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                  const user = userCredential.user;
            
                  // Send verification email
                  await sendEmailVerification(auth.currentUser);
                  console.log('Verification email sent.');
            
                  console.log('User created:', user);
            
                  // TODO: Save additional user data (name, phoneNumber, role) to your database
                } catch (error) {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.error('Error creating user:', errorCode, errorMessage);
                }
  };

  return (
    <div className="signup-container">
      <div className="description-card">
        <div className="card-content">
          <h1>Signup</h1>
          <input
            className="form-input"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <select
            className="role-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="collector">Collector</option>
            <option value="ngo">NGO</option>
          </select>
          <button className="signup-button" onClick={handleSignup}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
