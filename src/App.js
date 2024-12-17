import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/adminpage/AdminPage";
import Home from "./components/usercomp/Home";

const App = () => {
  return (
    <BrowserRouter>
      {/* Main Routes Configuration */}
      <Routes>
        {/* Login Page Route */}
        <Route path="/" element={<LoginPage />} />

        {/* User Home Page Route */}
        <Route path="/home/*" element={<Home />} />

        {/* Admin Page Route */}
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
