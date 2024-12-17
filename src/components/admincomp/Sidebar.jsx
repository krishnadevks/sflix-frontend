import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Menu</h2>
      <ul>
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
          <Link to="/admin/upload">Upload</Link>
        </li>
        <li>
          <Link to="/admin/player">Video Player</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
