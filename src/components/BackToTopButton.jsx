import React, { useState, useEffect, useRef } from "react";
import top from "../assets/top.png";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollableContainerRef = useRef(null);

  useEffect(() => {
    // Try to find the scrollable container
    scrollableContainerRef.current =
      document.querySelector("#scrollable-container") || window;

    const handleScroll = () => {
      const scrollTop =
        scrollableContainerRef.current === window
          ? window.scrollY
          : scrollableContainerRef.current.scrollTop;

      setIsVisible(scrollTop > 300);
    };

    const currentContainer = scrollableContainerRef.current;
    currentContainer.addEventListener("scroll", handleScroll);

    return () => currentContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <p
      onClick={scrollToTop}
      className="fixed bottom-[10%] right-[10%]  cursor-pointer z-[100000000]"
    >
      <img
        src={top}
        alt="Back_to_top"
        className={`w-16 rounded-full transition-transform duration-500 hue-rotate-100 hover:scale-110`}
      />
    </p>
  );
};

export default BackToTopButton;
