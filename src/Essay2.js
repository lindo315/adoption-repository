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
      <h1>Research Paper:</h1>
      <h2>Digital Art and Virtual Pets: “Metaverse Petshop” by 'exonemo'</h2>
      <div className="blog-post-content">
        <p>
          In the ever-evolving landscape of digital art, artists continue to
          push the boundaries of creativity and interactivity. One perfect
          example of this is a unit called exonemo (by a Japanese team by Sembo
          Kensuke and Aikawa), whose work “Metaverse Petshop” from the
          “ANIMAL()CITY: Unleashed!” exhibition showcases the fascinating
          intersection of net art, virtual worlds, and the concept of digital
          pets. This essay will delve into the significance of “Metaverse
          Petshop” and its relevance to my web app, which aims to explore the
          relationship between humans and actual companions (because it's a Pet
          Adoption site).
        </p>
        <p>
          Before incorporating “Metaverse Petshop” into the web app, it was
          essential to conduct thorough research and preparation. I had some
          trouble finding the right net art that works well with my chosen theme
          and intention. But after a deep thorough dive (a week of searching), I
          came across exonemo's portfolio and their involvement in the
          “ANIMAL()CITY: Unleashed!” exhibition. According to the exhibition's
          description, it “presents a series of works that imagine a
          post-anthropocentric world where the boundaries between the virtual
          and the real, the human and the non-human, are blurred” (ANIMAL()CITY,
          2021). This context provided a deeper understanding of the themes and
          concepts behind “Metaverse Petshop.” This then tied to my intent,
          finding an artwork that blurs the line between the real and the
          virtual, human and 'pet' (animal) - a good contrast I believe. And
          that contrast acting as an art form on its own blends well with my
          theme - I believe.
        </p>
        <p>
          “Metaverse Petshop” is an interactive net art piece that invites
          viewers to engage with virtual pets within a metaverse setting (but
          can be viewed on other mobile devices). The artwork combines vibrant
          visuals, animated elements from the virtual pets, and user
          interactivity to create an immersive experience. Each pet is uniquely
          painted, bringing a sense of personality and originality to how they
          look. And as users navigate through the digital pet shop, they
          encounter several of these virtual animals (pets), each with their own
          unique characteristics and behaviours as mentioned. The artwork
          challenges traditional notions of pet ownership and raises questions
          about the emotional connections we form with digital entities. And so,
          exonemo's use of bold colors, glitch aesthetics, and dynamic
          animations in “Metaverse Petshop” creates a captivating visual
          experience. The artist's choice of a metaverse setting highlights the
          blurring lines between reality and virtuality, a theme that resonates
          with our web app's exploration of digital companionship. The artwork
          prompts us to consider the potential for virtual pets to evoke genuine
          emotions and attachments, just as real-life pets do. Which then, could
          prompt one to adopt a pet instead, something good and provides my
          website purpose.
        </p>
        <p>
          The inclusion of “Metaverse Petshop” in my web app serves several
          purposes. Firstly, it aligns with our theme of exploring the
          relationship between humans and digital companions. The artwork
          provides a thought-provoking and visually engaging example of how
          virtual pets can be integrated into a digital space. It encourages
          users to reflect on the nature of their interactions with digital
          entities and the potential emotional bonds that can form. Moreover,
          featuring “Metaverse Petshop” in my web app showcases the innovative
          possibilities of net art and its ability to create immersive and
          interactive experiences. It demonstrates how artists like exonemo are
          pushing the boundaries of traditional art forms and embracing the
          digital medium to explore new concepts and narratives.
        </p>
        <p>
          Incorporating “Metaverse Petshop” into the web app can certain
          technical challenges. For example, I might need to ensure that the
          artwork's interactive elements and animations are seamlessly
          integrated into the app's interface. This will surely require careful
          consideration of compatibility, performance, and user experience
          across various devices and browsers. By leveraging web technologies
          such as HTML5, CSS3, and JavaScript (and React), I'm sure I'll be able
          to create a responsive and optimized layout that showcases the artwork
          effectively.
        </p>
        <p>
          provoking exploration of the relationship between humans and digital
          companions. The artwork's visually striking aesthetics, interactive
          elements, and metaverse setting align perfectly with our app's theme
          and objectives. By featuring “Metaverse Petshop,” the web app invites
          users to contemplate the emotional connections we form with virtual
          entities and the potential for net art to create immersive and
          meaningful experiences. As we navigate the ever-evolving landscape of
          digital art and virtual worlds, works like “Metaverse Petshop” remind
          us of the boundless possibilities for creativity and storytelling in
          the digital realm.
        </p>
        <p>
          ANIMAL()CITY: Unleashed! (2021). Retrieved from [
          <a href="https://openar.art/u/73">https://openar.art/u/73 </a>
          ].
        </p>
      </div>
      <ScrollTop />
    </div>
  );
}

export default Essay2;
