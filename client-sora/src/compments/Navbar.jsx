import { NavLink, useMatch } from "react-router-dom";
import { useState, Fragment } from "react";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const links = [
    { id: 0, to: "/", text: "Home" },
    { id: 1, to: "/about", text: "About" },
    { id: 2, to: "/contact", text: "Contact" },
    { id: 3, to: "/login", text: "Login" },
  ];

  function Maplinks() {
    return links.map((link) => (
      <Fragment key={link.id}>
        <NavLinkComponent to={link.to} text={link.text} />
      </Fragment>
    ));
  }

  return (
    <header className="navbar flex flex-row justify-between flex justify-around">
      <button
        onClick={toggleNav}
        className="lg:hidden xl:hidden flex-initial w-10  grid place-items-center "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <button className="flex-initial w-36">logo</button>
      <nav
        className={` flex-1 lg:block xl:block h-full w-full lg:h-auto backdrop-blur left-0 top:-1 lg:grid lg:place-items-center ${
          isNavVisible ? "absolute" : "hidden"
        }`}
      >
        <ul className="lg:min-w-full lg:flex-1 flex justify-center text-center flex-col lg:flex-row gap-y-5 text-slate-50 lg:text-black min-h-screen lg:min-h-0 w-full md:w-1/2 bg-indigo-950 lg:bg-transparent relative ">
          <button
            onClick={toggleNav}
            className="lg:hidden xl:hidden absolute right-5 top-5 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Maplinks />
        </ul>
      </nav>
      <section className="flex-1 flex justify-end ">
        <button className="mx-2 grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <button className="mx-2 ">Connection</button>
      </section>
    </header>
  );
}

const NavLinkComponent = (props) => {
  const match = useMatch(props.to);

  return (
    <li className="px-3">
      <NavLink
        to={props.to}
        className={`px-2 hover:underline hover:underline-offset-8 hover:decoration-yellow-500 ${
          match ? "bg-pink-600" : ""
        }`}
      >
        {props.text}
      </NavLink>
    </li>
  );
};

export { Navbar };
