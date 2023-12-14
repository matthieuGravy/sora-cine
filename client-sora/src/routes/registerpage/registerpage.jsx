import SignupComponent from "../../compments/SignupComponent";
import { Footer, Footerlanding } from "../../compments/Footer";

function Registerpage() {
  return (
    <>
      <section className="pt-24 pb-12 grid place-items-center">
        <SignupComponent />
      </section>
      <Footer>
        <Footerlanding />
      </Footer>
    </>
  );
}

export default Registerpage;
