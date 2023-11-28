import React, { useState, useEffect } from 'react';

const Hero = () => {
  {/*const [backgroundImages, setBackgroundImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchBackgroundImages = async () => {
      try {
        const response = await fetch('./src/assets/HeroBackground.json'); // Adjust the path to API
        const data = await response.json();
        setBackgroundImages(data.backgroundImages);
      } catch (error) {
        console.error('Error fetching background images:', error);
      }
    };

    fetchBackgroundImages();
  }, []); // Run the effect only once when the component mounts

  const getNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };*/}

  fetch 
  const async

  const heroStyle = {
    backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Adjust the height as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Adjust text color based on your image
    cursor: 'pointer', // Make the Hero clickable to change the background
  };

  return (
    <div style={heroStyle} onClick={getNextImage}>
      {/* Your hero content goes here */}
    </div>
  );
};

export { Hero };
