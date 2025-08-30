import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const container = document.querySelector("#scrollable-container"); // give your div an id
    if (container) {
      container.scrollTo({ top: 0, behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
