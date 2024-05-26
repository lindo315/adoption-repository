import React from "react";
import "./index.css";

function Contacts() {
  return (
    <div className="contacts-page">
      <div className="contacts-header">
        <h1>Contact Us</h1>
        <p>I'm here to help! Get in touch with me.</p>
      </div>
      <div className="contacts-content">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Address</h3>
              <p>1 Jan Smuts Ave, Braamfontein, Johannesburg, 2017</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>0677821649</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>2500080@students.wits.ac.za</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <h2>Send Us a Message</h2>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
