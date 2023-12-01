import Card from "../../compments/Card";

import TitleCategory from "../../compments/TitleCategory";

function Homepage() {
  return (
    <>
      <h1>Homepage Hello</h1>

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
