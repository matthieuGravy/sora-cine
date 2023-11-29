import React, { useState, useEffect } from 'react';
import WatchNowButton from './WatchNowButton';
import HeroH1 from './HeroH1';

const apiUrl = 'https://webdis-t9ot.onrender.com/recent-release?type=1'; // Replace with your API endpoint

function Hero({ description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...' }) {
  const [animeData, setAnimeData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch anime data from the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Assuming your API returns an array of objects with anime information
        setAnimeData(data || []);
      })
      .catch(error => {
        console.error('Error fetching anime data:', error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % animeData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [animeData]);

  const style = {
    backgroundImage: `url(${animeData[currentImageIndex]?.animeImg || ''})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <section className="h-screen w-screen" style={style}>
      <div className="h-full w-3/12 flex flex-col justify-center px-[5rem]">
        <HeroH1 text={animeData[currentImageIndex]?.animeTitle} />
        <p className="text-base text-[#E5E1EE] mb-6">
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