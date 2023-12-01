import Card from "../../compments/Card";
import { Hero } from "../../compments/Hero";
import TitleCategory from "../../compments/TitleCategory";

function Homepage() {
  return (
    <>
      <h1>Homepage Hello</h1>
      <Hero/>
      <TitleCategory title="Test titre de catégorie"/>
      <div className="flex flex-row"><Card/><Card/><Card/></div>
      <TitleCategory title="Test titre de catégorie"/>
      <div className="flex flex-row"><Card/><Card/><Card/></div>
      
    </>
  );
}

export default Homepage;
