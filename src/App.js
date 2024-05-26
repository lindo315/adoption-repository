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
import Confirmation from "./Confirmation";
import ThankYou from "./ThankYou";
import BlogPost1 from "./BlogPost1";
import BlogPost2 from "./BlogPost2";
import BlogPost3 from "./BlogPost3";
import Essay1 from "./Essay1";
import Essay2 from "./Essay2";

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
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="/BlogPost1" element={<BlogPost1 />} />
              <Route path="/BlogPost2" element={<BlogPost2 />} />
              <Route path="/BlogPost3" element={<BlogPost3 />} />
              <Route path="/Essay1" element={<Essay1 />} />
              <Route path="/Essay2" element={<Essay2 />} />
            </Routes>
            <Footer />
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
