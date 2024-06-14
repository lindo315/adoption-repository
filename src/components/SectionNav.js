import React from "react";
import { FaCircleDot } from "react-icons/fa6";

function SectionNav({ activeSection, scrollToSection, sectionRefs }) {
  return (
    <nav className="section-nav">
      <ul>
        {sectionRefs.map((sectionRef, index) => (
          <li
            key={index}
            className={activeSection === sectionRef.id ? "active" : ""}
            onClick={() => scrollToSection(sectionRef)}
          >
            <span className="dot">
              <FaCircleDot />
            </span>
            <span className="text">{sectionRef.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SectionNav;
