import React from "react";
import { Link } from "react-router-dom";
import "../Styles/index.css";

function TheorySection() {
  return (
    <div className="theory">
      <main>
        <section className="theory-section">
          <h2>Theory Section</h2>
          <p>
            Welcome to the Theory Section! Here, you'll find blog posts and an
            essay exploring various theoretical concepts related to our website
            and its mission.
          </p>

          <div className="blog-posts">
            <div className="blog-post">
              <img
                src={`${process.env.PUBLIC_URL}/images/adobe-flash.png`}
                alt="Blog Post 1"
              />
              <h3>Blog Post 1: Adobe Flash</h3>

              <Link to="/BlogPost1" className="read-more">
                Read More
              </Link>
            </div>

            <div className="blog-post">
              <img
                src={`${process.env.PUBLIC_URL}/images/mailloux.png`}
                alt="Blog Post 2"
              />
              <h3>Blog Post 2: Mailloux</h3>

              <Link to="/BlogPost2" className="read-more">
                Read More
              </Link>
            </div>

            <div className="blog-post">
              <img
                src={`${process.env.PUBLIC_URL}/images/net-art.png`}
                alt="Blog Post 3"
              />
              <h3>Blog Post 3: Net Art</h3>

              <Link to="/BlogPost3" className="read-more">
                Read More
              </Link>
            </div>
          </div>

          <div className="essay">
            <h3>Essay on Net/Web Art</h3>

            <Link to="/Essay1" className="read-essay">
              Read Essay
            </Link>
          </div>

          <div className="essay">
            <h3>Artwork Research</h3>
            <Link to="/Essay2" className="read-essay">
              Read Essay
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TheorySection;
