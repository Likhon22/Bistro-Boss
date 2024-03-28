import React from "react";

import { NavLink } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import GuestRoute from "./GuestRoute";
import useRole from "../../hooks/useRole";
import useAuth from "../../hooks/useAuth";
import { IoMdHome } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const LeftSide = () => {
  const [role] = useRole();
  const { logout } = useAuth();
  return (
    <div className="w-[220px] md:w-[280px]  min-h-screen py-16 flex flex-col items-center justify-between">
      <div>
        <div className="text-center space-y-2 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#151515]">
            BISTRO BOSS
          </h2>
          <p className="uppercase text-lg md:text-xl lg:text-2xl font-medium">
            Restaurant
          </p>
        </div>
        <div className="border-b border-white mt-20 pb-6">
          {role === "Admin" && <AdminRoute></AdminRoute>}
          {role == "Guest" && <GuestRoute></GuestRoute>}
        </div>
        <div className="font-semibold space-y-5 text-center text-[#151515] mt-6">
          <div>
            <NavLink to={"/"}>
              <div className="cursor-pointer flex justify-center items-center gap-1 hover:text-white hover:bg-yellow-600 hover:py-2 rounded-lg">
                <IoMdHome className="text-xl"></IoMdHome>
                <p>Home</p>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to={"/our-menu"}>
              <div className="cursor-pointer flex justify-center items-center gap-1 hover:text-white hover:bg-yellow-600 hover:py-2 rounded-lg">
                <FiMenu className="text-xl"></FiMenu>
                <p>Menu</p>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to={"/our-shop/salad"}>
              <div className="cursor-pointer flex justify-center items-center gap-1  hover:text-white hover:bg-yellow-600 hover:py-2 rounded-lg">
                <FaBasketShopping className="text-xl"></FaBasketShopping>
                <p>Shop</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="font-semibold  mt-8 w-full space-y-6 text-center text-[#151515]  px-5">
        <div className="w-full " id="menu">
          <NavLink to={"/dashboard/profile"}>
            <div className="cursor-pointer w-full flex justify-center items-center gap-1 hover:text-white hover:bg-yellow-600 hover:py-2  rounded-lg ">
              <CgProfile className="text-xl"></CgProfile>
              <p>Profile</p>
            </div>
          </NavLink>
        </div>
        <button
          onClick={logout}
          className="btn  bg-black text-white hover:text-black border-none"
        >
          {" "}
          Logout
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
