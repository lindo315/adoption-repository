import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mockData from "../mockData.json";
import "../styles/section-nav.css";
import ScrollTop from "../components/ScrollTop";
import { FaCircleDot } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Home() {
  // Using environment variables to construct background image URLs
  // This makes things easier for me because I don't have to hard code URLs on most of my sections for styling background images
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/images/blob.png`;
  const knowImageURL = `${process.env.PUBLIC_URL}/images/blob-know.png`;
  // const know2ImageURL = `${process.env.PUBLIC_URL}/images/line-haikei.png`;
  const servicesImageURL = `${process.env.PUBLIC_URL}/images/wave-haikei2.png`;
  const expertsImageURL = `${process.env.PUBLIC_URL}/images/wave-haikei.png`;

  // Using 'useRef' to create references to section elements
  // This allows for direct access to the DOM elements without querying the DOM every time
  // Reference: https://reactjs.org/docs/hooks-reference.html#useref
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const adoptionRef = useRef(null);
  const petCareRef = useRef(null);
  const consultsRef = useRef(null);
  const whyUsRef = useRef(null);
  const blogSectionRef = useRef(null);

  // Slider - For me pets you seeeeeeeeeee
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Using 'useState' to manage the state of the active section
  // This state is used to highlight the corresponding navigation item
  // Reference: https://reactjs.org/docs/hooks-state.html
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Setting up an Intersection Observer to detect when sections are in view
    // The Intersection Observer API allows for efficient detection of element visibility
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    const observerOptions = {
      threshold: 0.2, // Trigger the callback when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When a section comes into view, add the 'animate' class to trigger animations
          entry.target.classList.add("animate");
          // Update the active section state to highlight the corresponding navigation item
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observing each section ref using the Intersection Observer
    // This allows for detecting when each section comes into view
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    if (adoptionRef.current) {
      observer.observe(adoptionRef.current);
    }
    if (petCareRef.current) {
      observer.observe(petCareRef.current);
    }
    if (consultsRef.current) {
      observer.observe(consultsRef.current);
    }
    if (whyUsRef.current) {
      observer.observe(whyUsRef.current);
    }
    if (blogSectionRef.current) {
      observer.observe(blogSectionRef.current);
    }

    // Cleaning up the Intersection Observer when the component unmounts
    // This is important to prevent memory leaks and ensure proper cleanup
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
      if (adoptionRef.current) {
        observer.unobserve(adoptionRef.current);
      }
      if (petCareRef.current) {
        observer.unobserve(petCareRef.current);
      }
      if (consultsRef.current) {
        observer.unobserve(consultsRef.current);
      }
      if (whyUsRef.current) {
        observer.unobserve(whyUsRef.current);
      }
      if (blogSectionRef.current) {
        observer.unobserve(blogSectionRef.current);
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  // Function to navigate to the 'Book Service' page
  const navigate = useNavigate();
  const handleBuyClick = () => {
    navigate("/bookservice");
  };

  // Function to scroll to a specific section when clicked in the navigation menu
  // It uses the 'scrollIntoView' method to smoothly scroll to the section
  // Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <nav className="section-nav">
        <ul>
          {/* Mapping over section refs to create navigation items */}
          {/* The 'active' class is added to the item corresponding to the active section */}

          {/* Home - section dot */}
          <li
            className={activeSection === "hero" ? "active" : ""}
            onClick={() => scrollToSection(heroRef)}
          >
            <span className="dot">
              <FaCircleDot />
            </span>
            <span className="text">Home</span>
          </li>

          {/* About - section dot */}
          <li
            className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection(aboutRef)}
          >
            <span className="dot">
              <FaCircleDot />
            </span>
            <span className="text">About</span>
          </li>

          {/* Services - section dot */}
          <li
            className={activeSection === "services" ? "active" : ""}
            onClick={() => scrollToSection(servicesRef)}
          >
            <span className="dot">
              <FaCircleDot />
            </span>
            <span className="text">Services</span>
          </li>

          {/* Featured Services - section dot */}
          <li
            className={activeSection === "featured-services" ? "active" : ""}
            onClick={() => scrollToSection(petCareRef)}
          >
            <span className="dot">
              <FaCircleDot />
            </span>
            <span className="text">Featured</span>
          </li>

          {/* Consults - section dot */}
          <li
            className={activeSection === "consults" ? "active" : ""}
            onClick={() => scrollToSection(consultsRef)}
          >
            <span className="dot">
              <FaCircleDot />
            </span>
            <span className="text">Experts</span>
          </li>

          {/* Blog section - dot section */}
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
        {/* Hero section */}
        {/* Using inline styles to set the background image and cover the entire section */}
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
                <Link to="/adopt" className="start-button pulse">
                  Start Here
                </Link>
              </div>
            </section>
          </section>
        </section>

        {/* Get to know us sections */}
        <section className="know-title fade-in">Get to know us</section>

        {/* First "know" section */}

        <section ref={aboutRef} id="about">
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
                    <Link to="/about" className="know-more-button">
                      Know More
                    </Link>
                  </div>
                </div>
              </section>
            </section>
          </section>

          {/* Second "know" section */}
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
                    <Link to="/about" className="know-more-button">
                      Know More
                    </Link>
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

          {/* Third "know" section */}
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
                    <Link to="/about" className="know-more-button">
                      Know More
                    </Link>
                  </div>
                </div>
              </section>
            </section>
          </section>
        </section>

        {/* Get to know our features section */}
        <section className="services-section" ref={servicesRef} id="services">
          <p className="get-to">Get to</p>
          <h2>What do we offer?</h2>
          <div className="services-container">
            <div className="service-card">
              <div className="service-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/images/expert.png`}
                  alt="Pet Experts"
                />
              </div>
              <h3>Adoption</h3>
              <p>We have a team of pet experts who are ready to help</p>
              <button
                className="read-more-button"
                onClick={() => scrollToSection(adoptionRef)}
              >
                See
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/images/clinic.png`}
                  alt="Vet Services"
                />
              </div>
              <h3>Pet Care</h3>
              <p>Services range from emergency to routine</p>
              <button
                className="read-more-button"
                onClick={() => scrollToSection(petCareRef)}
              >
                See
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/images/chat.png`}
                  alt="Contact Us"
                />
              </div>
              <h3>Consults</h3>
              <p>Get in touch with us for consults or questions</p>
              <button
                className="read-more-button"
                onClick={() => scrollToSection(consultsRef)}
              >
                See
              </button>
            </div>
          </div>
        </section>

        {/* Featured Pets - Slider */}
        {/* Filter and map `mockData` to display only pets with "Available" adoption status */}
        <section className="featured-pets" ref={adoptionRef} id="adoption">
          <p className="get-to">Get to</p>
          <h2>Featured Pets Ready for Adoption</h2>
          <Slider {...sliderSettings}>
            {mockData
              .filter((pet) => pet.adoptionStatus === "Available")
              .map((pet) => (
                <div key={pet.id} className="pet-card">
                  <img
                    src={`${process.env.PUBLIC_URL}${pet.image}`}
                    alt={pet.name}
                  />
                  <h3>{pet.name}</h3>
                  <p>{pet.breed}</p>
                  <Link to="/adopt" className="adopt-button">
                    Adopt Me
                  </Link>
                </div>
              ))}
          </Slider>
        </section>

        {/* Featured Services section */}
        <section
          className="featured-services"
          ref={petCareRef}
          id="featured-services"
          style={{
            backgroundImage: `url(${servicesImageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="get-to">Get to</p>
          <h2 className="know-title fade-in">What we can do for you</h2>
          <div className="services-item-container">
            <div className="service-item fade-in">
              <div className="service-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/images/dog-grooming.png`}
                  alt="Pet Experts"
                />
              </div>
              <h3>Grooming</h3>
            </div>
            <div className="service-item fade-in">
              <div className="service-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/images/trainer.png`}
                  alt="Pet Experts"
                />
              </div>
              <h3>Training</h3>
            </div>

            <div className="service-item fade-in">
              <div className="service-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/images/trimming.png`}
                  alt="Pet Experts"
                />
              </div>
              <h3>Trimming</h3>
            </div>
            <div className="service-item fade-in">
              <div className="service-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/images/spa.png`}
                  alt="Pet Experts"
                />
              </div>
              <h3>Spa Treatment</h3>
            </div>
            {/* <div className="service-item fade-in">
              <div className="service-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/images/expert.png`}
                  alt="Pet Experts"
                />
              </div>
              <h3>Pet Food</h3>
            </div> */}
          </div>

          {/* <Link to="/adopt" className="start-button pulse">
            Search Here
          </Link> */}
        </section>

        {/* Meet our specialists section */}
        <section
          className="why-us"
          ref={consultsRef}
          id="consults"
          style={{
            backgroundImage: `url(${expertsImageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Separator */}
          <div className="separator-div">
            <hr className="separator" />
          </div>
          <p className="get-to">Get to</p>
          <h2>Meet our specialists</h2>
          <div className="specialist-container">
            <div className="specialist-card">
              <img
                src={`${process.env.PUBLIC_URL}/images/dr-simpson.png`}
                alt="Dr. Simpson"
              />
              <div className="specialist-info">
                <h3>Dr. Simpson</h3>
                <p>Pathologist</p>
                <p>
                  Works in animal disease surveillance, prevention, research,
                  diagnosis and treatment.
                </p>
              </div>
            </div>
            <div className="specialist-card">
              <img
                src={`${process.env.PUBLIC_URL}/images/dr-bekwa.png`}
                alt="Dr. Bekwa"
              />
              <div className="specialist-info">
                <h3>Dr. Bekwa</h3>
                <p>Pharmacologists</p>
                <p>
                  Drug administration and drug effects in animals, many of which
                  are sick or injured.
                </p>
              </div>
            </div>
            <div className="specialist-card">
              <img
                src={`${process.env.PUBLIC_URL}/images/dr-bowman.png`}
                alt="Dr. Bowman"
              />
              <div className="specialist-info">
                <h3>Dr. Bowman</h3>
                <p>Dermatologist</p>
                <p>
                  Researches and specializes in conditions that affect animal
                  skin, hair, and nails.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Paid Services Section */}
        <section className="paid-services-section">
          <p className="get-to">Get to</p>
          <h2>Pricing</h2>
          <div className="services-container">
            <div className="service-card">
              <div className="service-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/images/vet-check.png`}
                  alt="Check-up"
                />
              </div>
              <h3>Check-up</h3>
              <p>First check-up is free</p>
              <p>
                Apply for a veterinarian visit with your pet for a closer check
                up on their health, physicals, and well-being.
              </p>
              <div className="price">R350</div>
              <button className="buy-button" onClick={handleBuyClick}>
                Buy
              </button>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/images/grooming.png`}
                  alt="Grooming"
                />
              </div>
              <h3>Grooming</h3>
              <p>Up to 3 sessions</p>
              <p>
                Treat your loving pet to a wide range of pet care services, from
                grooming to training.
              </p>
              <div className="price">R350</div>
              <button className="buy-button" onClick={handleBuyClick}>
                Buy
              </button>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/images/consult.png`}
                  alt="Consult"
                />
              </div>
              <h3>Consult</h3>
              <p>An hour consult</p>
              <p>
                Meet up with our professional specialists for a one-on-one
                consult on your pet's wellbeing, health, and other issues.
              </p>
              <div className="price">R350</div>
              <button className="buy-button" onClick={handleBuyClick}>
                Buy
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <p className="get-to">Get to</p>
          <h2>Frequently asked Questions</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h3>How does the adoption process proceed?</h3>
              <p>
                The process is simple, choose a buddy and then proceed to the
                checkout port, filling in your information.
              </p>
            </div>
            <div className="faq-item">
              <h3>How does the adoption process proceed?</h3>
              <p>
                The process is simple, choose a buddy and then proceed to the
                checkout port, filling in your information.
              </p>
            </div>
            <div className="faq-item">
              <h3>How does the adoption process proceed?</h3>
              <p>
                The process is simple, choose a buddy and then proceed to the
                checkout port, filling in your information.
              </p>
            </div>
            <div className="faq-item">
              <h3>How does the adoption process proceed?</h3>
              <p>
                The process is simple, choose a buddy and then proceed to the
                checkout port, filling in your information.
              </p>
            </div>
            <div className="faq-item">
              <h3>How does the adoption process proceed?</h3>
              <p>
                The process is simple, choose a buddy and then proceed to the
                checkout port, filling in your information.
              </p>
            </div>
            <div className="faq-item">
              <h3>How does the adoption process proceed?</h3>
              <p>
                The process is simple, choose a buddy and then proceed to the
                checkout port, filling in your information.
              </p>
            </div>
          </div>
        </section>

        {/* BLOG SECTION */}
        <section
          className="blog-section"
          ref={blogSectionRef}
          id="blog-section"
        >
          <h2 className="fade-in">Other Stuff</h2>
          <div className="blog-container">
            <div className="blog-item fade-in">
              <Link to="/theory">
                <div className="blog-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/theory-image.png`}
                    alt="Theory"
                  />
                </div>
                <div className="blog-title">Theory Section</div>
              </Link>
            </div>
            <div className="blog-item fade-in">
              <Link to="/design">
                <div className="blog-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/design-image.png`}
                    alt="Design"
                  />
                </div>
                <div className="blog-title">Design Section</div>
              </Link>
            </div>
            <div className="blog-item fade-in">
              <Link to="/internet-art">
                <div className="blog-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/internet-image.png`}
                    alt="Internet"
                  />
                </div>
                <div className="blog-title">Internet Section</div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ScrollTop component */}
      {/* This component provides a button to scroll back to the top of the page */}
      <ScrollTop />
    </div>
  );
}

export default Home;
