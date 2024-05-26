// Header.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./nav.css";
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
          <a href="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/Pet-Logo.png`}
              alt="logo"
              className="logo-img"
            />
          </a>
        </div>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <ul>
            <li className="navbar-item">
              <a
                href="/"
                className={`navbar-link ${isActive("/") ? "active" : ""}`}
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="/about"
                className={`navbar-link ${isActive("/about") ? "active" : ""}`}
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="/adopt"
                className={`navbar-link ${isActive("/adopt") ? "active" : ""}`}
                onClick={toggleMenu}
              >
                Adopt
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="/resources"
                className={`navbar-link ${
                  isActive("/resources") ? "active" : ""
                }`}
                onClick={toggleMenu}
              >
                Resources
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="/contacts"
                className={`navbar-link ${
                  isActive("/contacts") ? "active" : ""
                }`}
                onClick={toggleMenu}
              >
                Contacts
              </a>
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
