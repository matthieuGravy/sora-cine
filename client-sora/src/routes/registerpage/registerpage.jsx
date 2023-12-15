import SignupComponent from "../../compments/SignupComponent";
import { Footer, Footerlanding } from "../../compments/Footer";

function Registerpage() {
  return (
    <>
      <section className="pt-24 pb-12 grid grid place-items-center lg:pt-0 lg:min-h-[80vh]">
        <SignupComponent />
      </section>
      <Footer>
        <Footerlanding />
      </Footer>
    </>
  );
}

export default Registerpage;
