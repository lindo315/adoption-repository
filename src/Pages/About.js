import { Link } from "react-router-dom";
import "../Styles/about.css";

function About() {
  // Using environment variables to construct the background image URL
  // This approach allows for easy configuration and avoids hardcoding URLs
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/images/wave-haikei.png`;
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

        {/* Know Three */}
        <p className="get-to">Get to</p>
        <h2 className="more-know">Know us</h2>

        {/* Services container */}
        <div className="services-container">
          {/* Adoption Services */}
          <section className="service">
            <section className="service-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/chiwawa.png`}
                alt="Adoption"
                className="img"
              />
            </section>
            <section className="service-content">
              <h2>Adoption Services</h2>
              <p>
                We help displaced animals in search of loving homes find caring
                individuals like you who have big hearts and are ready to
                provide them with a forever home.
              </p>
            </section>
          </section>

          {/* Veterinary Care */}
          <section className="service">
            <section className="service-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/checking.png`}
                alt="Veterinary Care"
                className="img"
              />
            </section>
            <section className="service-content">
              <h2>Veterinary Care</h2>
              <p>
                We offer comprehensive veterinary services to ensure the health
                and well-being of your pets. Our experienced veterinarians
                provide routine check-ups, vaccinations, and medical treatments.
              </p>
            </section>
          </section>

          {/* Grooming Services */}
          <section className="service">
            <section className="service-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/close-up.png`}
                alt="Grooming"
                className="img"
              />
            </section>
            <section className="service-content">
              <h2>Grooming Services</h2>
              <p>
                Keep your pets looking and feeling their best with our
                professional grooming services. Our skilled groomers offer
                baths, haircuts, nail trims, and more to pamper your furry
                friends.
              </p>
            </section>
          </section>
        </div>

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
                {/* <p>
                We provide comprehensive care for all our animals, including
                veterinary check-ups, vaccinations, and any necessary medical
                treatments.
              </p> */}
              </div>

              {/* Adoption Counseling */}
              <div className="feature-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/chat.png`}
                  alt="Feature 2"
                />
                <h3>Adoption Counseling</h3>
                {/* <p>
                Our experienced adoption counselors work closely with potential
                adopters to find the perfect match based on lifestyle,
                personality, and preferences.
              </p> */}
              </div>

              {/* Foster Program */}
              <div className="feature-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/love.png`}
                  alt="Feature 3"
                />
                <h3>Foster Program</h3>
                {/* <p>
                We have a foster program that allows caring individuals to
                temporarily provide a loving home for pets until they find their
                permanent families.
              </p> */}
              </div>

              {/* Volunteer Opportunities */}
              <div className="feature-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/volunteer.png`}
                  alt="Feature 4"
                />
                <h3>Volunteer Opportunities</h3>
                {/* <p>
                We offer various volunteer opportunities for animal lovers to
                contribute their time and skills, making a difference in the
                lives of our pets.
              </p> */}
              </div>

              {/* Community Outreach */}
              <div className="feature-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/speaker.png`}
                  alt="Feature 5"
                />
                <h3>Community Outreach</h3>
                {/* <p>
                We actively engage with the community through educational
                programs, events, and partnerships to promote responsible pet
                ownership and animal welfare.
              </p> */}
              </div>

              {/* Donation Support */}
              <div className="feature-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/donation.png`}
                  alt="Feature 6"
                />
                <h3>Donation Support</h3>
                {/* <p>
                We rely on the generous support of donors to fund our programs,
                provide essential supplies, and maintain our facility. Every
                contribution makes a difference.
              </p> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
