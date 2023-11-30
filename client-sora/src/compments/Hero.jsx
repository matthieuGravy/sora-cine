import React, { useState, useEffect } from 'react';
import WatchNowButton from './WatchNowButton';
import HeroH1 from './HeroH1';

const apiUrl = 'https://webdis-t9ot.onrender.com/recent-release?type=1'; // Replace with your API endpoint

function Hero({ defaultDescription = '' }) {
  const [animeData, setAnimeData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animeDetails, setAnimeDetails] = useState(null);

  useEffect(() => {
    // Fetch anime data from the first API
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
    // Check if there is valid animeData and the currentImageIndex is within bounds
    if (animeData.length > 0 && currentImageIndex >= 0 && currentImageIndex < animeData.length) {
      const animeId = animeData[currentImageIndex]?.animeId;
      
      // Fetch anime details from the second API based on the animeId
      fetch(`https://webdis-t9ot.onrender.com/anime-details/${animeId}`)
        .then(response => response.json())
        .then(data => {
          setAnimeDetails(data || null);
        })
        .catch(error => {
          console.error('Error fetching anime details:', error);
        });
    }
  }, [animeData, currentImageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % animeData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [animeData]);

  const style = {
    backgroundImage: `url(${animeData[currentImageIndex]?.animeImg || ''})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const synopsis = animeDetails?.synopsis || defaultDescription;

  return (
    <section className="h-screen w-screen" style={style}>
      <section className="h-full max-w-50 flex flex-col justify-center px-[5rem]">
        <card className="ps-40 pe-40">
          <HeroH1 text={animeDetails?.animeTitle || ''} />
          <p className="max-h-28 text-2xl text-[#ffff66] mb-6 truncate">
            <h2 className="font-bold">Synopsis</h2> {synopsis}
          </p>
          <p>
            <WatchNowButton />
          </p>
        </card>
      </section>
    </section>
  );
}

export { Hero };