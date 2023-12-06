import { NavLink } from "react-router-dom";
import { Newsletter } from "./Newsletter.jsx";

const Footerlanding = () => {
  return (
    <>
      <section className="grid grid-cols-2 gap-y-5 bg-teal-800 text-zinc-300">
        <ul className="pt-6 pb-4 flex flex-col items-center text-left bg-teal-600">
          <h2 className="pb-2 pt-2 text-xl">Get started</h2>
          <li>
            <NavLink to="/register">Sign up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
        </ul>
        <ul className="pt-6 pb-4 flex flex-col items-center text-left bg-teal-600">
          <h2 className="pb-2 pt-2 text-xl">Features</h2>
          <li>
            <p>Contact</p>
          </li>
        </ul>
        <Newsletter />
      </section>
    </>
  );
};

const Footer = (props) => {
  return (
    <section className="footer">
      {props.children}
      <p>© 2021 Sora. All rights reserved.</p>
    </section>
  );
};

export { Footer, Footerlanding };
