import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", backgroundColor: "#333", color: "#fff" }}>
      <h2>Paytm Clone</h2>
      <div>
        <Link to="/" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/register" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Register</Link>
        <Link to="/login" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Login</Link>
        <Link to="/dashboard" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Dashboard</Link>
        <button onClick={handleLogout} style={{ margin: "0 10px", padding: "5px 10px", backgroundColor: "red", color: "#fff", border: "none", cursor: "pointer" }}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
