// NotFoundPage.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/PageNotFound.css";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="home-button">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
