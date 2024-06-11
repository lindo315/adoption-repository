// Header.js
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../index.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/Pet-Logo.png`}
              alt="logo"
              className="logo-img"
            />
          </Link>
        </div>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <ul>
            <li className="navbar-item">
              <Link
                to="/"
                className={`navbar-link ${isActive("/") ? "active" : ""}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/about"
                className={`navbar-link ${isActive("/about") ? "active" : ""}`}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/adopt"
                className={`navbar-link ${isActive("/adopt") ? "active" : ""}`}
                onClick={toggleMenu}
              >
                Adopt
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/resources"
                className={`navbar-link ${
                  isActive("/resources") ? "active" : ""
                }`}
                onClick={toggleMenu}
              >
                Resources
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/contacts"
                className={`navbar-link ${
                  isActive("/contacts") ? "active" : ""
                }`}
                onClick={toggleMenu}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Header;
