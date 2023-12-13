import { TitleCategory } from "../../compments/TitleCategory";

import Card from "../../compments/Card";
import { Hero } from "../../compments/Hero";
import { Footer } from "../../compments/Footer";
import { motion } from "framer-motion";
import goku from "../../assets/images/goku.svg";

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
  ];
  const slides2 = [<Card />, <Card />, <Card />];

  return (
    <>
      <Hero />
      <article className="">
        <TitleCategory title="Titre category 1" />
      </article>
      <article className="h-[500vh]">
        <TitleCategory title="Titre category 2" />
        <section className="relative top-50 h-64 bg-red-400">
          <article
            className="sticky top-60"
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="overflow-x-auto max-w-xl2 flex flex-row"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              {slides1}
            </motion.div>
          </article>
        </section>
      </article>
      <Footer />
    </>
  );
}
export default Homepage;
