import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Paytm Clone</h1>
      <p>Secure Payments Made Easy</p>
      <div>
        <Link to="/register" style={{ marginRight: '10px' }}>Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default LandingPage;
