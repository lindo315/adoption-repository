import React from "react";
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

              <a href="/BlogPost1" className="read-more">
                Read More
              </a>
            </div>

            <div className="blog-post">
              <img
                src={`${process.env.PUBLIC_URL}/images/mailloux.png`}
                alt="Blog Post 2"
              />
              <h3>Blog Post 2: Mailloux</h3>

              <a href="/BlogPost2" className="read-more">
                Read More
              </a>
            </div>

            <div className="blog-post">
              <img
                src={`${process.env.PUBLIC_URL}/images/net-art.png`}
                alt="Blog Post 3"
              />
              <h3>Blog Post 3: Net Art</h3>

              <a href="/BlogPost3" className="read-more">
                Read More
              </a>
            </div>
          </div>

          <div className="essay">
            <h3>Essay on Net/Web Art</h3>

            <a href="/Essay1" className="read-essay">
              Read Essay
            </a>
          </div>

          <div className="essay">
            <h3>Artwork Research</h3>
            <a href="/Essay2" className="read-essay">
              Read Essay
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TheorySection;
