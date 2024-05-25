import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import ScrollTop from "./ScrollTop";
import { FaCircleDot } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Home() {
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/images/blob.png`;
  const knowImageURL = `${process.env.PUBLIC_URL}/images/blob-know.png`;
  const know2ImageURL = `${process.env.PUBLIC_URL}/images/line-haikei.png`;

  const heroRef = useRef(null);
  const featuredBuddiesRef = useRef(null);
  const whyUsRef = useRef(null);
  const blogSectionRef = useRef(null);

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    if (featuredBuddiesRef.current) {
      observer.observe(featuredBuddiesRef.current);
    }
    if (whyUsRef.current) {
      observer.observe(whyUsRef.current);
    }
    if (blogSectionRef.current) {
      observer.observe(blogSectionRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      if (featuredBuddiesRef.current) {
        observer.unobserve(featuredBuddiesRef.current);
      }
      if (whyUsRef.current) {
        observer.unobserve(whyUsRef.current);
      }
      if (blogSectionRef.current) {
        observer.unobserve(blogSectionRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <nav className="section-nav">
        <ul>
          <li
            className={activeSection === "hero" ? "active" : ""}
            onClick={() => scrollToSection(heroRef)}
          >
            <span className="dot">
              <FaCircleDot />
            </span>
            <span className="text">Home</span>
          </li>
          <li
            className={activeSection === "featured-buddies" ? "active" : ""}
            onClick={() => scrollToSection(featuredBuddiesRef)}
          >
            <span className="dot">
              <FaCircleDot />
            </span>
            <span className="text">Featured</span>
          </li>
          <li
            className={activeSection === "why-us" ? "active" : ""}
            onClick={() => scrollToSection(whyUsRef)}
          >
            <span className="dot">
              <FaCircleDot />
            </span>
            <span className="text">Why Us</span>
          </li>
          <li
            className={activeSection === "blog-section" ? "active" : ""}
            onClick={() => scrollToSection(blogSectionRef)}
          >
            <span className="dot">
              <FaCircleDot />
            </span>
            <span className="text">Blogs</span>
          </li>
        </ul>
      </nav>
      <main>
        <section
          className="hero"
          ref={heroRef}
          id="hero"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section className="hero-content">
            <section className="hero-image">
              <LazyLoadImage
                src={`${process.env.PUBLIC_URL}/images/dogo.png`}
                alt="Pet"
                className="fade-in"
                effect="blur"
              />
            </section>
            <section className="hero-text">
              <div className="hero-text-row">
                <p className="welcome fade-in">Welcome!</p>
                <h1 className="fade-in">Find Your Forever Friend!</h1>
                <h2 className="fade-in">Adopt Love, Save Lives!</h2>
                <p className="fade-in">
                  We're a small company in search of heroes to adopt and save
                  lives.
                </p>
              </div>
              <div className="hero-text-row">
                <a href="/adopt" className="start-button pulse">
                  Start Here
                </a>
              </div>
            </section>
          </section>
        </section>

        <section className="know-title fade-in">Get to know us</section>

        {/* First */}
        <section
          className="know"
          style={{
            backgroundImage: `url(${knowImageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section className="know-content">
            <section className="know-text fade-in">
              <h2>What we do</h2>
              <p>
                Our focus is to help displaced animals in search of homes find
                you, caring folks with big enough hearts to care!
              </p>
            </section>

            <section className="know-image fade-in">
              <div className="image-overlay">
                <img
                  src={`${process.env.PUBLIC_URL}/images/chiwawa.png`}
                  alt="Pet"
                  className="img"
                />
                <div className="overlay-content">
                  <a href="/about" className="know-more-button">
                    Know More
                  </a>
                </div>
              </div>
            </section>
          </section>
        </section>

        {/* Second */}
        <section
          className="know"
          style={{
            backgroundImage: `url(${knowImageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section className="know-content">
            <section className="know-image fade-in">
              <div className="image-overlay">
                <img
                  src={`${process.env.PUBLIC_URL}/images/checking.png`}
                  alt="Pet"
                  className="img"
                />
                <div className="overlay-content">
                  <a href="/about" className="know-more-button">
                    Know More
                  </a>
                </div>
              </div>
            </section>
            <section className="know-text fade-in">
              <h2>Services?</h2>
              <p>
                Yes! We also offer services to current pet owners ranging from
                food, medicine, and grooming!
              </p>
            </section>
          </section>
        </section>

        {/* Third */}
        <section
          className="know"
          style={{
            backgroundImage: `url(${knowImageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section className="know-content">
            <section className="know-text fade-in">
              <h2>Animal Care</h2>
              <p>
                We take in animals that are either displaced, sick, or have
                owners who reconsider their options...
              </p>
            </section>

            <section className="know-image fade-in">
              <div className="image-overlay">
                <img
                  src={`${process.env.PUBLIC_URL}/images/close-up.png`}
                  alt="Pet"
                  className="img"
                />
                <div className="overlay-content">
                  <a href="/about" className="know-more-button">
                    Know More
                  </a>
                </div>
              </div>
            </section>
          </section>
        </section>

        {/* Featured Buds */}
        <section
          className="featured-buddies"
          ref={featuredBuddiesRef}
          id="featured-buddies"
        >
          <h2 className="know-title fade-in">Featured Buddies!</h2>
          <div className="buddy-container">
            <div className="buddy-card fade-in">
              <img
                src={`${process.env.PUBLIC_URL}/images/dog-image.png`}
                alt="Buddy 1"
              />
              <div className="buddy-info">
                <h3>Max</h3>
                <p>Age: 2 years</p>
                <p>Species: Dog</p>
              </div>
              <a href="/adopt" className="adopt-button">
                Adopt
              </a>
            </div>
            <div className="buddy-card fade-in">
              <img
                src={`${process.env.PUBLIC_URL}/images/cat-image.png`}
                alt="Buddy 2"
              />
              <div className="buddy-info">
                <h3>Prince</h3>
                <p>Age: 1 year</p>
                <p>Species: Cat</p>
              </div>
              <a href="/adopt" className="adopt-button">
                Adopt
              </a>
            </div>
            <div className="buddy-card fade-in">
              <img
                src={`${process.env.PUBLIC_URL}/images/bird-image.png`}
                alt="Buddy 3"
              />
              <div className="buddy-info">
                <h3>Levi</h3>
                <p>Age: 6 months</p>
                <p>Species: Bird</p>
              </div>
              <a href="/adopt" className="adopt-button">
                Adopt
              </a>
            </div>
          </div>
          <h3 className="theres-more fade-in">
            There's more waiting for your attention!
          </h3>
          <a href="/adopt" className="start-button pulse">
            Search Here
          </a>
        </section>

        {/* WHY US */}
        <section
          className="why-us"
          ref={whyUsRef}
          id="why-us"
          style={{
            backgroundImage: `url(${know2ImageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="why-us-content">
            <div className="why-us-image fade-in">
              <img
                src={`${process.env.PUBLIC_URL}/images/dog-image.png`}
                alt="Why Us"
              />
            </div>
            <div className="why-us-text fade-in">
              <h2>Why Us?</h2>
              <p>
                Yes! We also offer services to current pet owners ranging from
                food, medicine, and grooming!
              </p>
            </div>
          </div>
        </section>
        <section
          className="blog-section"
          ref={blogSectionRef}
          id="blog-section"
        >
          <h2 className="fade-in">Other Stuff</h2>
          <div className="blog-container">
            <div className="blog-item fade-in">
              <a href="/theory">
                <div className="blog-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/theory-image.png`}
                    alt="Theory"
                  />
                </div>
                <div className="blog-title">Theory Section</div>
              </a>
            </div>
            <div className="blog-item fade-in">
              <a href="/design">
                <div className="blog-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/design-image.png`}
                    alt="Design"
                  />
                </div>
                <div className="blog-title">Design Section</div>
              </a>
            </div>
            <div className="blog-item fade-in">
              <a href="/internet">
                <div className="blog-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/internet-image.png`}
                    alt="Internet"
                  />
                </div>
                <div className="blog-title">Internet Section</div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <ScrollTop />
    </div>
  );
}

export default Home;
