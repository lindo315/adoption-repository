// Mission.js
import React from "react";
import "../styles/mission.css";

const Mission = () => {
  const missionItems = [
    {
      title: "Promote Pet Adoption",
      description:
        "Facilitate adoptions by partnering with shelters and providing detailed pet profiles and support.",
      icon: "adoption",
    },
    {
      title: "Support Pet Owners",
      description:
        "Offer resources and post-adoption support to ensure successful pet-family integration.",
      icon: "support",
    },
    {
      title: "Enhance Pet Health and Happiness",
      description:
        "Deliver high-quality grooming services to improve pets' hygiene, health, and appearance.",
      icon: "health",
    },
    {
      title: "Educate and Advocate",
      description:
        "Raise awareness about responsible pet ownership and the benefits of adoption and grooming.",
      icon: "education",
    },
    {
      title: "Build a Compassionate Community",
      description:
        "Foster a supportive network of pet lovers dedicated to animal welfare.",
      icon: "community",
    },
  ];

  const backgroundImageUrl = `${process.env.PUBLIC_URL}/images/wave-haikei.png`;

  return (
    <section
      className="mission-section"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="mission-title">Our Mission</h2>
      <div className="mission-items">
        {missionItems.map((item, index) => (
          <div key={index} className="mission-item">
            <h3 className="mission-item-title">{item.title}</h3>
            <p className="mission-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
