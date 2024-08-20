import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Fitness Equipment Rental</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/equipment">Equipment</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
