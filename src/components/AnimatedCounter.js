import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ target, duration }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(countRef.current); // Corrected line
          }
        });
      },
      {
        threshold: 0,
      }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const step = target / (duration / 50);

    const intervalId = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(intervalId);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
  }, [isInView, target, duration]);
  return <div ref={countRef}>{count}</div>;
};

export default AnimatedCounter;
