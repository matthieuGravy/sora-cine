import { Hero } from "../../compments/Hero";
import { Connexion } from "../../compments/Connexion";
import Carousel from "../../compments/Carousel";
function Homepage() {

  const carouselItems = [
    { imageSrc: '../src/assets/images/background01.jpg', altText: 'Image 1' },
    { imageSrc: '../src/assets/images/background02.jpg', altText: 'Image 2' },
    { imageSrc: '../src/assets/images/background03.jpg', altText: 'Image 3' },
    // Add more items as needed
  ];
  return (
    <>
      <h1>Homepage Hello</h1>
      <Hero />
      <Carousel items={carouselItems}/>
      <Connexion />
    </>
  );
}

export { Homepage };
