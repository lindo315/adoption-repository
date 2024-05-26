import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./confirmation.css";

function Confirmation() {
  const location = useLocation();
  const { pet } = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., sending data to the server)
    // After successful submission, navigate to the "Thank You" page
    navigate("/thankyou", { state: { pet } });
  };

  return (
    <div className="confirmation">
      <h2>Adoption Confirmation</h2>
      <div className="pet-info">
        <img src={pet.image} alt={pet.name} />
        <h3>{pet.name}</h3>
        <p>Age: {pet.age}</p>
        <p>Species: {pet.species}</p>
        <p>Breed: {pet.breed}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Your Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

        <button type="submit">Confirm Adoption</button>
      </form>
    </div>
  );
}

export default Confirmation;
