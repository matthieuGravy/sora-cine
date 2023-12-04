import Card from "../../compments/Card";
import { Hero } from "../../compments/Hero";
import TitleCategory from "../../compments/TitleCategory";


function Homepage() {
  return (
    <>
      <Hero />
      <TitleCategory title="Test titre de catégorie" />
      <div className="flex flex-row">
        <Card />
        <Card />
        <Card />
      </div>
      <TitleCategory title="Test titre de catégorie" />
      <div className="flex flex-row">
        <Card />
        <Card />
        <Card />
      </div>              
    </>
  );
}

export default Homepage;
