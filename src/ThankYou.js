import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./thankyou.css";

function ThankYou() {
  const location = useLocation();
  const { pet } = location.state;

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="thank-you">
      <h2>Thank You for Adopting!</h2>
      <div className="pet-info">
        <img src={`${process.env.PUBLIC_URL}${pet.image}`} alt={pet.name} />
        <h3>Congratulations on adopting {pet.name}!</h3>
        <p>
          We are thrilled that you have chosen to give {pet.name} a loving
          forever home. Your decision to adopt is a compassionate and
          life-changing act that will bring joy and companionship to both you
          and your new pet.
        </p>
      </div>
      <div className="next-steps">
        <h3>Next Steps:</h3>
        <ul>
          <li>
            Our adoption team will review your application and contact you
            within 24-48 hours.
          </li>
          <li>
            Once your application is approved, we will schedule a meet and greet
            with {pet.name}.
          </li>
          <li>
            After a successful meet and greet, you can take {pet.name} home and
            start your new life together!
          </li>
        </ul>
      </div>
      {/* <div className="resources">
        <h3>Helpful Resources:</h3>
        <ul>
          <li>
            <a href="/pet-care">Pet Care Tips</a>
          </li>
          <li>
            <a href="/training">Training and Behavior Advice</a>
          </li>
          <li>
            <a href="/support">Post-Adoption Support</a>
          </li>
        </ul>
      </div> */}
      <p className="contact-info">
        If you have any questions or concerns, please don't hesitate to contact
        me at{" "}
        <a href="mailto:lindodlamini315@gmail.com">lindodlamini315@gmail.com</a>{" "}
        or call me at <a href="tel:123-456-7890">0677821649</a>.
      </p>
    </div>
  );
}

export default ThankYou;
