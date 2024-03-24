import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-bold" : " text-white"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-bold" : "text-white"
          }
          to={"/contact"}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-bold" : "text-white"
          }
          to={"dashboard"}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-bold" : "text-white"
          }
          to={"/our-menu"}
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-bold" : "text-white"
          }
          to={"/our-shop/salad"}
        >
          Our Shop
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed w-full bg-black bg-opacity-60 z-30 ">
      <Container>
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <NavLink to={"/"}>
              <button className="text-yellow-400 font-bold  text-xl">
                Bistro Boss
              </button>
            </NavLink>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
