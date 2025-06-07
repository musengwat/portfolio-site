// portfolio-frontend/src/hooks/useScrollPosition.js
import { useState, useEffect } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition(); // Initial call

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};
