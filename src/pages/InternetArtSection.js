import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import "../index.css";

function InternetArtSection() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="internt blog-post-page">
      <button className="back-button" onClick={handleGoBack}>
        Back
      </button>
      <h1>Internet Art:</h1>
      <div className="blog-post-content">
        <p>
          The "Cute Cat Internet Artsy Experience" is an interactive web-based
          artwork that celebrates the internet's love for cats while
          incorporating elements of 90s web design aesthetics. Inspired by the
          enduring popularity of cat content online, this artwork invites users
          to immerse themselves in a playful and imaginative digital
          environment.
        </p>
        <p>
          The artwork leverages the Cat API to generate random cat images,
          ensuring a unique experience for each user. The interface's vibrant
          colors, pixelated graphics, and quirky design elements evoke a sense
          of nostalgia, transporting users back to the early days of the
          internet. Interactivity is key, with users encouraged to explore and
          engage with the artwork. Clicking anywhere on the screen generates new
          cat images, each with its own name and fun fact.
        </p>
        <p>
          The "Cat Painter" mode allows users to unleash their creativity by
          drawing on top of the cat images, personalizing them with various
          colors and brush sizes. Throughout the experience, the artwork
          surprises users with random background color changes and a whimsical
          fact box. The inclusion of the "Back" button, linking to an external
          website, adds an element of exploration and mystery. In essence, the
          "Cute Cat Internet Artsy Experience" celebrates the joy and creativity
          inspired by cats on the internet, combining nostalgic design elements,
          randomness, and user participation to create a unique and immersive
          experience that captures the internet's love affair with cats.
        </p>

        <p>
          Internet Art GitHub Link: https://github.com/lindo315/internet-cat-art
        </p>
      </div>
      <a
        href="https://lindo315.github.io/internet-cat-art/"
        className="back-button"
      >
        Art
      </a>
      <ScrollTop />
    </div>
  );
}

export default InternetArtSection;
