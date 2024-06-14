import { Link } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import Mission from "../components/Mission";
import "../styles/about.css";
import Consults from "../components/Consults";

function About() {
  // Background image URLs
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/images/wave-haikei.png`;

  // const backgroundImageUrl2 = `${process.env.PUBLIC_URL}/images/wave-haikei3.png`;

  return (
    <div className="about">
      <main className="about-main">
        {/* About section */}
        <section
          className="about-section"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section className="about-content">
            {/* About image */}
            <section className="about-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/male-vet.png`}
                alt="Pet"
              />
            </section>

            {/* About text */}
            <section className="about-text">
              <div className="about-text-row">
                <p className="welcome">About Us</p>
                <h1>Who are Pet Adoption?</h1>
                <h2>"Carers" of pets and such!</h2>
                <p>
                  We're a small company in search of heroes to adopt and save
                  lives.
                </p>
              </div>
              <div className="hero-text-row">
                {/* Link to the adoption page */}
                <Link to="/adopt" className="start-button">
                  Start Here
                </Link>
              </div>
            </section>
          </section>
        </section>

        <p className="get-to">Get to</p>
        <h2 className="more-know">Know us</h2>

        {/* What we do section */}
        <section className="what-we-do-section">
          <div className="what-we-do-content">
            <div className="what-we-do-text">
              <h2>What we do</h2>
              <p>
                We connect loving families with pets in need of homes and
                provide top-notch grooming services to keep pets healthy and
                happy. Our platform simplifies the adoption process and offers
                comprehensive grooming care tailored to each pet's needs.
              </p>
            </div>
            <div className="what-we-do-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/close-up.png`}
                alt="What we do"
              />
            </div>
          </div>

          <div className="what-we-do-content">
            <div className="what-we-do-text">
              <h2>Our Intention</h2>
              <p>
                Our goal is to create a compassionate community where every pet
                finds a forever home and receives the care they deserve. We
                believe in the transformative power of adoption and the
                importance of regular grooming in maintaining pet well-being.
              </p>
            </div>
            <div className="what-we-do-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/taking-care.png`}
                alt="What we do"
              />
            </div>
          </div>
        </section>

        <Mission />

        {/* Features section */}
        <section className="features-section">
          <h2>Our Features</h2>
          <div className="features-div">
            <div className="features-container">
              {/* Comprehensive Care */}
              <div className="feature-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/daycare.png`}
                  alt="Feature 1"
                />
                <h3>Comprehensive Care</h3>
              </div>

              {/* Adoption Counseling */}
              <div className="feature-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/chat.png`}
                  alt="Feature 2"
                />
                <h3>Adoption Counseling</h3>
              </div>

              {/* Foster Program */}
              <div className="feature-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/love.png`}
                  alt="Feature 3"
                />
                <h3>Foster Program</h3>
              </div>

              {/* Volunteer Opportunities */}
              <div className="feature-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/volunteer.png`}
                  alt="Feature 4"
                />
                <h3>Volunteer Opportunities</h3>
              </div>

              {/* Community Outreach */}
              <div className="feature-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/speaker.png`}
                  alt="Feature 5"
                />
                <h3>Community Outreach</h3>
              </div>

              {/* Donation Support */}
              <div className="feature-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/donation.png`}
                  alt="Feature 6"
                />
                <h3>Donation Support</h3>
              </div>
            </div>
          </div>
        </section>
        <Consults />
      </main>
      <ScrollTop />
    </div>
  );
}

export default About;
