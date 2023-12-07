import { NavLink } from "react-router-dom";
import { Newsletter } from "./Newsletter.jsx";

const Footerlanding = () => {
  return (
    <>
      <article className="bg-teal-800">
        <section className="grid grid-rows-2 grid-cols-2 gap-y-5 bg-teal-800 text-zinc-300 px-6 md:max-w-4xl m-auto">
          <ul className="pt-6 pb-4 col-1 ">
            <h2 className="pb-2 pt-2 text-2xl">Get started</h2>
            <li>
              <NavLink to="/register">Sign up</NavLink>
            </li>
            <li>
              <NavLink to="/login">Log in</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <figure className="place-self-center pt-6 pb-4 col-1">
            <img src="" alt="logo" />
          </figure>
          <article className="col-span-2 md:place-self-end pb-6 ">
            <Newsletter />
          </article>
        </section>
      </article>
    </>
  );
};

const Footer = (props) => {
  return (
    <section className="bg-gray-950 text-slate-200">
      {props.children}

      <p className="py-4 text-center">© 2023 Sora. All rights reserved.</p>
    </section>
  );
};

export { Footer, Footerlanding };
