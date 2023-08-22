import { useEffect, useState, useRef } from 'react';

function useScrollToElement() {
  const elementRef = useRef<HTMLDivElement | null>(null); // Specify the correct element type
  const [isElementVisible, setIsElementVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsElementVisible(entry.isIntersecting);
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return { elementRef, isElementVisible };
}

export default useScrollToElement;
