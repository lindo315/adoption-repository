import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import "./index.css";

function Essay2() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/theory");
  };

  return (
    <div className="blog-post-page">
      <button className="back-button" onClick={handleGoBack}>
        &larr; Back
      </button>
      <h1>Essay 2:</h1>
      <div className="blog-post-content">
        <p>
          In this blog post, we delve into the significance of pet adoption and
          how it contributes to animal welfare. We explore the benefits of
          adopting a pet and the positive impact it has on both the animal and
          the adopter.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt, metus vel tincidunt luctus, nunc ipsum aliquam mauris, vel
          malesuada purus lectus eget nisi. Sed euismod, leo sit amet
          ullamcorper malesuada, velit nisi convallis velit, id tincidunt magna
          metus eget dui.
        </p>
        {/* Add more content */}
      </div>
      <ScrollTop />
    </div>
  );
}

export default Essay2;
