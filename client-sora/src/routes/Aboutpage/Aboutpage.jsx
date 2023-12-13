import { Footer } from "../../compments/Footer";
import Card from "../../compments/Card";
import goku from "../../assets/images/goku.svg";
function Aboutpage() {
  return (
    <>
      <h1>About</h1>
      <Card image={goku} />
      <Footer />
    </>
  );
}

export default Aboutpage;
