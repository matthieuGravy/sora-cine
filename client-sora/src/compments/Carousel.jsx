import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/* <Carousel slides={slides} /> 
function Carousel({ slides }) {
  const [slide, setSlide] = useState(0);

  return (
    <div className="flex flex-row">
      <button onClick={() => setSlide(Math.max(0, slide - 2))}>
        Précédent
      </button>
      <div style={{ overflow: "hidden", width: "80%" }}>
        <motion.div
          style={{
            display: "flex",
            width: `${slides.length * 100}%`,
          }}
          animate={{ x: `-${slide * 300}px` }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
        >
          {slides}
        </motion.div>
      </div>
      <button onClick={() => setSlide(Math.min(slide + 2, slides.length - 4))}>
        Suivant
      </button>
    </div>
  );
}
*/

function Carousel({ slides }) {
  return (
    <motion.div
      className=" scroll-x-auto max-w-md flex flex-row"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
    >
      {slides}
    </motion.div>
  );
}

export default Carousel;
