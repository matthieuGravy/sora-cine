import React, { useState, useEffect } from 'react';
import WatchNowButton from './WatchNowButton';
import HeroH1 from './HeroH1';

// Import images outside the component
import bg1 from '../assets/images/Background01.jpg';
import bg2 from '../assets/images/Background02.jpg';
import bg3 from '../assets/images/Background03.jpg';

const imagePaths = [bg1, bg2, bg3];

function Hero({ description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt error id vitae consequuntur fugit repudiandae quaerat, dolores provident, aliquid, non quis et pariatur velit neque molestias? Harum asperiores at totam.' }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const style = {
    backgroundImage: `url(${imagePaths[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <section className="h-screen w-screen" style={style}>
      <div className="text-[#0D0630] h-full w-3/12 flex flex-col justify-center px-[5rem]">
        <HeroH1 text="Anime Title H1" />
        <p className="text-base mb-6">
          <h2 className="font-bold">Synopsis</h2> {description}
        </p>
        <p>
          <WatchNowButton />
        </p>
      </div>
    </section>
  );
}

export { Hero };