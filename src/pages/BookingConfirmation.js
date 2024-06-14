import React from "react";
import { Link } from "react-router-dom";
import "../styles/BookingConfirmation.css";

function BookingConfirmation() {
  return (
    <div className="booking-confirmation">
      <h2>Booking Confirmed!</h2>
      <p>Thank you for booking a service with us.</p>
      <p>
        We have received your booking request and will get back to you soon to
        confirm the details.
      </p>
      <Link to="/" className="home-button">
        Back to Home
      </Link>
    </div>
  );
}

export default BookingConfirmation;
