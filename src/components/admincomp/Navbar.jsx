import React from "react";
import "./Navbar.css"; // Navbar specific styles
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h2>Admin Panel</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/movies">Movies</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
        <li>
          <Link to="/admin/upload">Upload Video</Link>
        </li>
        <li>
          <Link to="/admin/player">Video Player</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
