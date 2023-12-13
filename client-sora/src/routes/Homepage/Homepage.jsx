import { TitleCategory } from "../../compments/TitleCategory";
import Card from "../../compments/Card";
import { Hero, Herojumbo } from "../../compments/Hero";
import { Footer } from "../../compments/Footer";

import goku from "../../assets/images/goku.svg";
import gto from "../../assets/images/gto.png";
import bleach from "../../assets/images/bleach.png";
import onep from "../../assets/images/onep.png";
import {
  motion,
  useTransform,
  useScroll,
  useViewportScroll,
} from "framer-motion";
import { useRef } from "react";

function Homepage() {
  const slides1 = [
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
    <Card title="Titre de la carte" image={goku} />,
  ];
  const slides2 = [<Card />, <Card />, <Card />];

  const targetRef = (useRef < HTMLDivElement) | (null > null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%%"]);

  const images = [goku, gto, bleach, onep];

  return (
    <>
      <Hero>
        <Herojumbo />
      </Hero>
      <article className="">
        <TitleCategory title="Titre category 1" />
      </article>
      <article className="h-[50vh] w-screen">
        <TitleCategory title="Titre category 2" />

        <motion.section
          className="relative h-64 ps-36"
          initial={{ y: 0 }}
          animate={{ y: 50 }}
        >
          <article
            className=" flex items-right justify-end"
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="overflow-x-auto max-w-xl2 flex flex-row gap-x-4"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              {slides1}
            </motion.div>
          </article>
        </motion.section>
      </article>
      <Footer />
    </>
  );
}
export default Homepage;
