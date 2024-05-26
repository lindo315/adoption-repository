import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "../Styles/index.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top-btn ${isVisible ? "show" : "hide"}`}
      onClick={scrollToTop}
    >
      <i className="arrow-up">
        <IoIosArrowUp />
      </i>
    </button>
  );
};

export default ScrollToTopButton;
