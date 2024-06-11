// App.js
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contacts from "./pages/Contacts";
import DesignSection from "./pages/DesignSection";
import TheorySection from "./pages/TheorySection";
import InternetArtSection from "./pages/InternetArtSection";
import "./styles/App.css";
import Top from "./components/Top.js";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Confirmation from "./pages/Confirmation";
import ThankYou from "./pages/ThankYou";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import Essay1 from "./pages/Essay1";
import Essay2 from "./pages/Essay2";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading screen
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <HashRouter basename="/">
        <Top />
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
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
