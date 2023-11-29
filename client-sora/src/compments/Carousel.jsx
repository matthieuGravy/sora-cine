import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.fromTo(
      carouselRef.current.children,
      { opacity: 0, x: '100%' },
      { opacity: 1, x: '0%', stagger: 0.3, ease: 'power3.inOut' }
    );

    // Reset the animation
    tl.set(carouselRef.current.children, { clearProps: 'all' });

    const intervalId = setInterval(() => {
      tl.to(carouselRef.current.children, { opacity: 0, x: '-100%', stagger: 0.3, ease: 'power3.inOut' });
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      tl.fromTo(
        carouselRef.current.children,
        { opacity: 0, x: '100%' },
        { opacity: 1, x: '0%', stagger: 0.3, ease: 'power3.inOut' }
      );
      // Reset the animation
      tl.set(carouselRef.current.children, { clearProps: 'all' });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, items]);

  return (
    <div ref={carouselRef} style={{ display: 'flex' }}>
      {items.map((item, index) => (
        <div key={index} style={{ flex: '0 0 100%', width: '100%' }}>
          {/* Your carousel item content goes here, use the 'item' object */}
          <img src={item.imageSrc} alt={item.altText} style={{ width: '100%', height: 'auto' }} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
