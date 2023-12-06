import { NavLink } from "react-router-dom";

const Footerlanding = () => {
  return (
    <>
      <section>
        <article>
          <h2>Get started</h2>
          <NavLink to="/register">Sign up</NavLink>
          <NavLink to="/login">Log in</NavLink>
        </article>
        <article>
          <h2>Features</h2>
          <p>Contact</p>
        </article>
        <form>
          <input type="text" placeholder="Email"></input>
          <input type="submit" value="Subscribe"></input>
        </form>
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
