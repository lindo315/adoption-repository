import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>123 Main Street</p>
          <p>City, State 12345</p>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-media">
            <li>
              <i className="fab fa-facebook-f">
                <FaFacebookF />
              </i>
            </li>
            <li>
              <i className="fab fa-twitter">
                <FaXTwitter />
              </i>
            </li>
            <li>
              <i className="fab fa-instagram">
                <AiFillInstagram />
              </i>
            </li>
            <li>
              <i className="fab fa-linkedin-in">
                <FaLinkedin />
              </i>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/resources">Resources</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
