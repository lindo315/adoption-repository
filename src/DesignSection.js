import React from "react";
import "./index.css";

function DesignSection() {
  return (
    <div className="design">
      <main>
        <section className="design-section">
          <h2>Design Section</h2>
          <p>
            Welcome to the Design Section! Here, we showcase the design
            principles and elements used in creating this website.
          </p>

          <div className="design-content">
            <div className="design-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/color-palette.png`}
                alt="Color Palette"
              />
              <h3>Color Palette</h3>
              <p>
                The color palette used throughout the website consists of soft
                and inviting colors, including shades of purple, pink, and blue.
                These colors create a friendly and welcoming atmosphere.
              </p>
            </div>

            <div className="design-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/typography.png`}
                alt="Typography"
              />
              <h3>Typography</h3>
              <p>
                The typography on this website uses a combination of clean and
                readable fonts. The main font used is "Exo 2", which provides a
                modern and friendly feel to the text.
              </p>
            </div>

            <div className="design-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/layout.png`}
                alt="Layout"
              />
              <h3>Layout</h3>
              <p>
                The website follows a responsive layout design, ensuring that
                the content is easily accessible and readable on various devices
                and screen sizes. The layout adapts to provide an optimal
                viewing experience.
              </p>
            </div>

            <div className="design-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/animations.png`}
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
      </main>
    </div>
  );
}

export default DesignSection;