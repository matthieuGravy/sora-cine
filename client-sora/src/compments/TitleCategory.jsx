import { motion } from "framer-motion";

function TitleCategory(props) {
  return (
    <section className="pt-6 pl-3 pb-2 ">
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-bold text-slate-200"
        initial={{ x: 10 }}
        animate={{ x: 30 }}
      >
        {props.title}
      </motion.h2>
    </section>
  );
}

const TitleMain = (props) => {
  return (
    <section className="pt-8 pb-4 text-center">
      <h2 className="text-4xl md:text-6xl tracking-tight font-bold text-slate-200">
        {props.title}
      </h2>
    </section>
  );
};

export { TitleCategory, TitleMain };
