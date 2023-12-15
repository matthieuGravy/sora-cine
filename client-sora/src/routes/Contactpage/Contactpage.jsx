import ContactComponent from "../../compments/ContactComponent";
import { Footer, Footerlanding } from "../../compments/Footer";

function Contactpage() {
  return (
    <>
      <section className="pt-24 pb-12 grid grid place-items-center lg:pt-0 lg:min-h-[80vh] px-4">
        <ContactComponent />
      </section>
      <Footer>
        <Footerlanding />
      </Footer>
    </>
  );
}

export default Contactpage;
