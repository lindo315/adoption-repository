// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Adopt from "./Adopt";
import About from "./About";
import Resources from "./Resources";
import DesignSection from "./DesignSection";
import TheorySection from "./TheorySection";
import InternetArtSection from "./InternetArtSection";
import "./App.css";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
// import { Link } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading screen
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/adopt" element={<Adopt />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/design" element={<DesignSection />} />
              <Route path="/theory" element={<TheorySection />} />
              <Route path="/internet-art" element={<InternetArtSection />} />
            </Routes>
            <Footer />
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
