import React from "react";
import "./Dashboard.css"; // Dashboard specific styles
import "./Analytics.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-content">
        <div className="card">
          <h3>Total Users</h3>
          <p>500</p> {/* Replace this with dynamic data */}
        </div>
        <div className="card">
          <h3>Videos Uploaded</h3>
          <p>120</p> {/* Replace this with dynamic data */}
        </div>
        <div className="card">
          <h3>Active Sessions</h3>
          <p>75</p> {/* Replace this with dynamic data */}
        </div>
      </div>
     <div className="analytics">
      <h1>Analytics</h1>
      <div className="analytics-container">
        <div className="analytics-card">
          <h3>New Users</h3>
          <p>20</p>
        </div>
        <div className="analytics-card">
          <h3>Videos Uploaded</h3>
          <p>10</p>
        </div>
        <div className="analytics-card">
          <h3>Streams Today</h3>
          <p>150</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
