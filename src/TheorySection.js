import React from "react";
import "./index.css";

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
                src={`${process.env.PUBLIC_URL}/images/blog-post1.jpg`}
                alt="Blog Post 1"
              />
              <h3>The Importance of Pet Adoption</h3>
              <p>
                In this blog post, we delve into the significance of pet
                adoption and how it contributes to animal welfare. We explore
                the benefits of adopting a pet and the positive impact it has on
                both the animal and the adopter.
              </p>
              <a href="/blog-post1" className="read-more">
                Read More
              </a>
            </div>

            <div className="blog-post">
              <img
                src={`${process.env.PUBLIC_URL}/images/blog-post2.jpg`}
                alt="Blog Post 2"
              />
              <h3>Understanding Pet Behavior</h3>
              <p>
                This blog post focuses on understanding pet behavior and
                providing insights into how to create a strong bond with your
                pet. We explore common behavioral issues and offer tips and
                techniques for positive reinforcement and training.
              </p>
              <a href="/blog-post2" className="read-more">
                Read More
              </a>
            </div>

            <div className="blog-post">
              <img
                src={`${process.env.PUBLIC_URL}/images/blog-post3.jpg`}
                alt="Blog Post 3"
              />
              <h3>The Role of Animal Shelters</h3>
              <p>
                In this blog post, we discuss the crucial role that animal
                shelters play in protecting and caring for animals in need. We
                highlight the challenges faced by shelters and the ways in which
                the community can support their efforts.
              </p>
              <a href="/blog-post3" className="read-more">
                Read More
              </a>
            </div>
          </div>

          <div className="essay">
            <h3>The Ethics of Animal Welfare</h3>
            <p>
              In this thought-provoking essay, we explore the ethical
              considerations surrounding animal welfare. We examine the moral
              obligations we have towards animals and discuss the philosophical
              arguments for their protection and well-being.
            </p>
            <a href="/essay" className="read-essay">
              Read Essay
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TheorySection;
