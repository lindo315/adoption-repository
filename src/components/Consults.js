import React, { useState } from "react";
import "../styles/consults.css";

// We make component that shows a list of consult services and their details - DONE?
// It's to allow users to peep open a modal (each one) to view more details about the selected service - WORKING
const Consults = () => {
  const [selectedService, setSelectedService] = useState(null);

  // An array of consult services [as objects] with their names, doctors, and descriptions.
  const consultServices = [
    {
      name: "Routine Health Check-Ups",
      doctor: "Dr. Anele Mzaza",
      description: "Regular check-ups to ensure your pet stays healthy.",
    },
    {
      name: "Diagnostic Services",
      doctor: "Dr. Sarah Johnson",
      description: "Advanced diagnostic tools to identify health issues.",
    },
    {
      name: "Preventive Care",
      doctor: "Dr. Justin Brown",
      description: "Regular check-ups to ensure your pet stays healthy.",
    },
    {
      name: "Chronic Disease Management",
      doctor: "Dr. Emily Wilson",
      description: "Guidance and support for managing chronic diseases.",
    },
    {
      name: "Reproductive Services",
      doctor: "Dr. Lutho Mapolisa",
      description: "Guidance and support for managing reproductive health.",
    },
    {
      name: "Emergency and Urgent Care",
      doctor: "Dr. Mawethu Nala",
      description: "Emergency and urgent care services for pets.",
    },
    {
      name: "Client Education and Support",
      doctor: "Dr. Erin Harper",
      description: "Education and support for pet clients.",
    },
    {
      name: "Vaccinations and Surgeries",
      doctor: "Dr. Lucien Zhang",
      description: "Vaccinations and surgeries for pets.",
    },
  ];

  // Now a function to handle the click event of each consult service - DONE
  // What it does is open a modal to view more details about the selected consult service - WORKING

  const openModal = (service) => {
    setSelectedService(service);
  };

  // Something to close, a function that handles the click event of the close button in the modal - easy to manage?
  // Closes the modal by setting the selected consult service to null - WORKING
  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="consults-section">
      <h2 className="consults-title">Consults and What They Offer</h2>

      <p className="consults-subtitle">Detailed Consults</p>

      <ul className="consults-list">
        {consultServices.map((service, index) => (
          <li
            key={index}
            className="consult-item"
            onClick={() => openModal(service)}
          >
            <span className="consult-number">{index + 1}</span>
            <span className="consult-service">{service.name}</span>
          </li>
        ))}
      </ul>

      {/* GOAL - A modal that shows more details about the selected consult service (lazy but it kinda works cause it's a modal - and I don't wanna put too much information even if it's not necessary) - also good practice on using prop types */}
      {selectedService && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedService.name}</h3>
            <p>Doctor: {selectedService.doctor}</p>
            <p>{selectedService.description}</p>
            <button className="modal-close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Consults;
