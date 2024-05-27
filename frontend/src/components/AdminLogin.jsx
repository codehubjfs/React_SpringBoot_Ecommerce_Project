import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here (e.g., send request to backend)
    if (username === 'admin' && password === 'password') {
      // If authenticated, redirect to admin dashboard or perform other actions
      console.log('Logged in successfully');
    } else {
      // If authentication fails, display error message
      setError('Invalid username or password');
    }
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleSubmit} className="admin-login-form">
        <h2>Admin Login</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/dashboard">
        <button type="submit" className="btn">Login</button>
        </Link>
      </form>
    </div>
  );
};

export default AdminLogin;
