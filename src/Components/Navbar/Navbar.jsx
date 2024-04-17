import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import useAuth from "../../hooks/useAuth";
import { BsCart4 } from "react-icons/bs";
import useCart from "../../hooks/useCart";
import useRole from "../../hooks/useRole";
const Navbar = () => {
  const { user, logout } = useAuth();
  const [cartItem, refetch] = useCart();
  const [role] = useRole();

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
        {user && role === "Admin" && (
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-yellow-500 font-bold" : "text-white"
            }
            to={"/dashboard/admin-home"}
          >
            Dashboard
          </NavLink>
        )}
        {user && role !== "Admin" && (
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-yellow-500 font-bold" : "text-white"
            }
            to={"/dashboard/user-home"}
          >
            Dashboard
          </NavLink>
        )}
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
      <li className="flex justify-center items-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-bold" : "text-white"
          }
          to={"/our-shop/salad"}
        >
          Our Shop
        </NavLink>
        {user && role !== "Admin" ? (
          <Link to={"/dashboard/user-cart"}>
            {" "}
            <button className="btn bg-black text-white border-0 bg-opacity-0 hover:bg-opacity-0 relative mr-5 ml-2">
              <BsCart4 className="text-3xl  text-green-600"></BsCart4>
              <div className="badge absolute text-xs mt-9 ml-6 bg-yellow-500 border-none text-white ">
                {cartItem?.length}
              </div>
            </button>
          </Link>
        ) : (
          ""
        )}
      </li>

      <li>
        {user ? (
          <button
            onClick={() => logout()}
            className=" text-white btn btn-outline  "
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <button className=" text-white btn  btn-outline">Login</button>
          </Link>
        )}
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
            <ul className=" menu-horizontal px-1 justify-center items-center gap-4 py-3">
              {links}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
