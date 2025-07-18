// portfolio-frontend/src/hooks/useIntersectionObserver.js
import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const intersecting = entry.isIntersecting;
        setIsIntersecting(intersecting);

        if (intersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: [0.1, 0.2],
        rootMargin: '0px 0px -24px 0px',
        delay: 100,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [hasIntersected, options]);

  return [elementRef, isIntersecting, hasIntersected];
};
