import ContactComponent from "../../compments/ContactComponent";
import { Footer, Footerlanding } from "../../compments/Footer";

function Contactpage() {
  return (
    <>
      <section className="pt-24 pb-12 grid grid place-items-center">
        <ContactComponent />
      </section>
      <Footer>
        <Footerlanding />
      </Footer>
    </>
  );
}

export default Contactpage;
