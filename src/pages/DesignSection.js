import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import ScrollTop from "../components/ScrollTop";

function DesignSection() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="design">
      <main>
        <section className="design-section">
          <button className="back-button" onClick={handleGoBack}>
            Back
          </button>
          <h2>Design Section</h2>
          <p>
            Welcome to the Design Section! Here, we showcase the design
            principles and elements used in creating this website.
          </p>

          <div className="design-content">
            <div className="design-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/framework1.png`}
                alt="Color Palette"
              />
              <h3>Home Section</h3>
              <p>
                The color palette used throughout the website consists of soft
                and inviting colors, including shades of purple, pink, and blue.
                These colors create a friendly and welcoming atmosphere.
              </p>
            </div>

            <div className="design-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/framework2.png`}
                alt="Typography"
              />
              <h3>Know Us Section</h3>
              <p>
                The typography on this website uses a combination of clean and
                readable fonts. The main font used is "Exo 2", which provides a
                modern and friendly feel to the text.
              </p>
            </div>

            <div className="design-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/framework3.png`}
                alt="Layout"
              />
              <h3>Featured Pets</h3>
              <p>
                The website follows a responsive layout design, ensuring that
                the content is easily accessible and readable on various devices
                and screen sizes. The layout adapts to provide an optimal
                viewing experience.
              </p>
            </div>

            <div className="design-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/framework4.png`}
                alt="Layout"
              />
              <h3>Why Section</h3>
              <p>
                The website follows a responsive layout design, ensuring that
                the content is easily accessible and readable on various devices
                and screen sizes. The layout adapts to provide an optimal
                viewing experience.
              </p>
            </div>

            <div className="design-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/framework5.png`}
                alt="Layout"
              />
              <h3>Blogs Section</h3>
              <p>
                The website follows a responsive layout design, ensuring that
                the content is easily accessible and readable on various devices
                and screen sizes. The layout adapts to provide an optimal
                viewing experience.
              </p>
            </div>

            <div className="design-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/framework6.png`}
                alt="Layout"
              />
              <h3>Social Media</h3>
              <p>
                The website follows a responsive layout design, ensuring that
                the content is easily accessible and readable on various devices
                and screen sizes. The layout adapts to provide an optimal
                viewing experience.
              </p>
            </div>

            <div className="design-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/framework7.png`}
                alt="Animations"
              />
              <h3>Animations</h3>
              <p>
                Subtle animations are used throughout the website to enhance the
                user experience and add visual interest. These animations
                include fade-ins, slide-ins, and hover effects on interactive
                elements.
              </p>
            </div>

            <div className="design-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/framework8.png`}
                alt="Animations"
              />
              <h3>Animations</h3>
              <p>
                Subtle animations are used throughout the website to enhance the
                user experience and add visual interest. These animations
                include fade-ins, slide-ins, and hover effects on interactive
                elements.
              </p>
            </div>
          </div>
        </section>

        <section className="design-details-section">
          <div className="design-details-container">
            {/* Typography */}
            <section className="design-typography-section">
              <h2>Typography</h2>
              <p>
                The website uses a carefully selected typography system to
                ensure readability and visual appeal. The primary font used is
                "Exo 2", a modern and friendly sans-serif font. This font is
                used for headings and body text, creating a consistent and
                cohesive look throughout the website.
              </p>
              <p>
                The typography hierarchy is well-defined, with different font
                sizes and weights used for headings, subheadings, and body text.
                This hierarchy helps guide the user's attention and improves the
                overall user experience.
              </p>
            </section>

            {/* Text Content */}
            <section className="design-text-section">
              <h2>Text Content</h2>
              <p>
                The text content used throughout the website is carefully
                crafted to be engaging, informative, and persuasive. It employs
                a friendly and approachable tone to connect with the target
                audience and effectively convey the key messages.
              </p>
              <p>
                The headlines are attention-grabbing and concise, while the body
                text provides detailed information and calls to action. The text
                hierarchy is well-structured, using appropriate heading levels
                and paragraph spacing to enhance readability.
              </p>
            </section>

            {/* Color Scheme */}
            <section className="design-color-section">
              <h2>Color Scheme</h2>
              <p>
                The color scheme used in the website consists of a harmonious
                combination of colors that create a warm and inviting
                atmosphere. The primary colors used are:
              </p>
              <div className="color-palette">
                <div className="color-item">
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#7766c6" }}
                  ></div>
                  <p>#7766c6</p>
                </div>
                <div className="color-item">
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#ff899d" }}
                  ></div>
                  <p>#ff899d</p>
                </div>
                <div className="color-item">
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#ffc0cb" }}
                  ></div>
                  <p>#ffc0cb</p>
                </div>
                <div className="color-item">
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#46467a" }}
                  ></div>
                  <p>#46467a</p>
                </div>
              </div>
              <p>
                These colors are carefully selected to evoke feelings of warmth,
                compassion, and trust, aligning with the overall theme of pet
                adoption and care.
              </p>
            </section>

            {/* Iconography */}
            <section className="design-iconography-section">
              <h2>Iconography</h2>
              <p>
                The website incorporates a set of custom-designed icons to
                enhance the visual communication and user experience. These
                icons are used consistently throughout the website to represent
                key actions, features, and categories.
              </p>
              <p>
                The icons are designed to be simple, intuitive, and easily
                recognizable. They follow a cohesive style that aligns with the
                overall design aesthetic of the website. The use of iconography
                helps guide users and provides visual cues for navigation and
                interaction.
              </p>
            </section>
          </div>
        </section>
      </main>
      <ScrollTop />
    </div>
  );
}

export default DesignSection;
