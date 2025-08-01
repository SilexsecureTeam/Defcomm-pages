// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top after a slight delay to ensure the new page has mounted
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
