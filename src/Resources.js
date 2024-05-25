import React from "react";
import "./resources.css";

function Resources() {
  return (
    <div className="resources">
      <main>
        <section className="resources-section">
          <section className="resources-title">
            <h2>Resources</h2>
            <p>
              The following resources were used in the development of this
              website:
            </p>
          </section>

          <div className="resource-list">
            <div className="resource-item">
              <h3>React</h3>
              <p>
                React is a JavaScript library for building user interfaces. It
                was used as the main framework for creating the components and
                managing the application state.
              </p>
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit React
              </a>
            </div>

            <div className="resource-item">
              <h3>React Router</h3>
              <p>
                React Router is a popular routing library for React
                applications. It was used to handle navigation and route
                management within the website.
              </p>
              <a
                href="https://reactrouter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit React Router
              </a>
            </div>

            <div className="resource-item">
              <h3>CSS Animations</h3>
              <p>
                CSS animations were used to add visual effects and transitions
                to various elements on the website, enhancing the user
                experience.
              </p>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn about CSS Animations
              </a>
            </div>

            <div className="resource-item">
              <h3>Font Awesome</h3>
              <p>
                Font Awesome is a popular icon library that provides a wide
                range of scalable vector icons. It was used to add icons
                throughout the website.
              </p>
              <a
                href="https://fontawesome.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Font Awesome
              </a>
            </div>

            <div className="resource-item">
              <h3>Unsplash</h3>
              <p>
                Unsplash is a platform that offers a vast collection of
                high-quality, freely usable images. The images used on this
                website were sourced from Unsplash.
              </p>
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Unsplash
              </a>
            </div>
            <div className="resource-item">
              <h3>Flaticon</h3>
              <p>
                Flaticon is a website that offers a wide variety of vector
                icons. Some of the icons used on this website were obtained from
                Flaticon.
              </p>
              <a
                href="https://www.flaticon.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Flaticon
              </a>
            </div>

            <div className="resource-item">
              <h3>Freepik</h3>
              <p>
                Freepik is a platform that provides a large collection of free
                vector art, illustrations, and images. Some of the graphical
                elements used on this website were sourced from Freepik.
              </p>
              <a
                href="https://www.freepik.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Freepik
              </a>
            </div>

            <div className="resource-item">
              <h3>React Icons</h3>
              <p>
                React Icons is a popular library that provides a collection of
                popular icon packs as React components. It was used to easily
                integrate icons into the website.
              </p>
              <a
                href="https://react-icons.github.io/react-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit React Icons
              </a>
            </div>

            <div className="resource-item">
              <h3>Haikei</h3>
              <p>
                Haikei is a web app that allows you to generate unique SVG
                shapes and backgrounds. Some of the SVG elements used on this
                website were created using Haikei.
              </p>
              <a
                href="https://haikei.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Haikei
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Resources;
