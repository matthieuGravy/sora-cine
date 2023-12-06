function TitleCategory(props) {
  return (
    <section className="pt-6 pl-3 pb-2 ">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-bold text-slate-200">
        {props.title}
      </h2>
    </section>
  );
}

const TitleDetail = (props) => {
  return (
    <section className="pt-6 pl-3 pb-2 ">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-bold text-slate-200">
        {props.title}
      </h2>
    </section>
  );
};

export { TitleCategory, TitleDetail };
