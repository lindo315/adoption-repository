import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollTop from "../Components/ScrollTop";
import "../Styles/index.css";

function BlogPost1() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/theory");
  };

  return (
    <div className="blog-post-page">
      <button className="back-button" onClick={handleGoBack}>
        &larr; Back
      </button>
      <h1>Blog Post 1: Adobe Flash</h1>
      <div className="blog-post-content">
        <p>
          Adobe Flash, the multimedia software platform that powered much of the
          creative content on the web in the early 2000s, reached its official
          end-of-life on December 31, 2020. As an aspiring digital artist, I was
          curious to learn more about Flash's impact and legacy, especially
          regarding net art. A recent article on Hyperallergic entitled “RIP
          Adobe Flash: Five Takeaways About the Plug-in's Legacy in Net Art”
          provided some great insights. A key takeaway is that Flash really
          shaped the web's aesthetic in the 2000s. It allowed digital artists to
          experiment with animation, audio, video and interactivity in
          unprecedented ways at the time. Many artists credit Flash with
          providing an accessible toolset and entry point into digital art
          creation.
        </p>
        <p>
          However, the rise of social media, mobile browsing, and open web
          standards ultimately led to Flash's demise. Apple's decision not to
          support Flash on the iPhone was a major blow. While unfortunate for
          the Flash developer community, the shift toward open standards like
          HTML5 was probably inevitable. For those looking to preserve
          Flash-based art, the open-source Conifer tool, developed by Rhizome,
          seems to be the best bet. It can emulate the original Flash experience
          and has been used by several museums and arts organizations in their
          net art preservation efforts.
        </p>
        <p>
          While Flash's time has passed, its legacy and influence on digital art
          is undeniable. It helped a whole generation of artists, some folks I
          know included, get their start in experimenting with the artistic
          possibilities of the web medium. And thankfully, with preservation
          initiatives ramping up, important Flash-based artworks can live on in
          archives for future generations to experience and study. The lessons
          and spirit of Flash-based creativity will surely continue to inspire
          digital artists for years to come.
        </p>
        <p>
          McNamara, R., 2020. RIP Adobe Flash: Five Takeaways About the
          Plug-in's Legacy in Net Art. Hyperallergic. Available at:
          https://hyperallergic.com/609682/rip-adobe-flash-five-takeaways-about-the-plug-ins-legacy-in-net-art/
          [Accessed 17 August 2021].
        </p>
      </div>
      <ScrollTop />
    </div>
  );
}

export default BlogPost1;
