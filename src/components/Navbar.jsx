import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <h2 style={{ display: 'inline', marginRight: '20px' }}>Paytm Clone</h2>
      <Link to="/" style={{ color: '#fff', marginRight: '10px' }}>Home</Link>
      <Link to="/register" style={{ color: '#fff', marginRight: '10px' }}>Register</Link>
      <Link to="/login" style={{ color: '#fff' }}>Login</Link>
    </nav>
  );
};

export default Navbar;
