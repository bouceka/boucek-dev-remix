import { useState, useEffect } from 'react';

const useScrollWindow = (className: string, value: number = 0) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > value) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [value]);

  return scrolling ? className : '';
};

export default useScrollWindow;
