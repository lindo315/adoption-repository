// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Adopt from "./Pages/Adopt";
import About from "./Pages/About";
import Resources from "./Pages/Resources";
import Contacts from "./Pages/Contacts";
import DesignSection from "./Pages/DesignSection";
import TheorySection from "./Pages/TheorySection";
import InternetArtSection from "./Pages/InternetArtSection";
import "./Styles/App.css";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import Confirmation from "./Pages/Confirmation";
import ThankYou from "./Pages/ThankYou";
import BlogPost1 from "./Pages/BlogPost1";
import BlogPost2 from "./Pages/BlogPost2";
import BlogPost3 from "./Pages/BlogPost3";
import Essay1 from "./Pages/Essay1";
import Essay2 from "./Pages/Essay2";

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
              <Route path="/contacts" element={<Contacts />} />
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
