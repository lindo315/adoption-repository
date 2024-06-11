// LoadingScreen.js
import React from "react";
import "../styles/LoadingScreen.css";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="logo-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/White-Pet-Logo.png`}
          alt="Logo"
          className="logo"
        />
      </div>
      {/* <div className="loading-spinner"></div>
      <p>Loading...</p> */}
    </div>
  );
}

export default LoadingScreen;
