import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BookService.css";

function BookService() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., send data to server)
    console.log(formData);
    // Navigate to a confirmation page
    navigate("/confirmation");
  };

  return (
    <div className="book-service">
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Service:</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a service</option>
            <option value="checkup">Check-up</option>
            <option value="grooming">Grooming</option>
            <option value="consult">Consult</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Additional Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="book-button">
          Book Now
        </button>
      </form>
    </div>
  );
}

export default BookService;
