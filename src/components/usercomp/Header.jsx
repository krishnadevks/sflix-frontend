import React from "react";
import "./Header.css"; // Include CSS file for header styling

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="path/to/logo.png" alt="Logo" />
      <div className="header__nav">
        <a href="/" className="header__link">
          Home
        </a>
        <a href="/login" className="header__link">
          Login
        </a>
      </div>
    </div>
  );
}

export default Header;
