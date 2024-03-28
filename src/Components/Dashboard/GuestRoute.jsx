import React from "react";
import "./dashboard.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { NavLink } from "react-router-dom";
const GuestRoute = () => {
  return (
    <div
      className=" font-medium   space-y-5 text-center text-[#151515]"
      id="menu"
    >
      <div className="w-full">
        <NavLink to={"/dashboard/user-home"}>
          <div className="cursor-pointer flex justify-center items-center  gap-1 hover:text-white hover:bg-yellow-600 hover:py-2 rounded-lg">
            <FaHome className="text-xl"></FaHome>
            <p>User Home</p>
          </div>
        </NavLink>
      </div>
      <div className="w-full">
        <NavLink to={"/dashboard/reservation"}>
          <div className="cursor-pointer flex justify-center items-center gap-1 hover:text-white hover:bg-yellow-600 hover:py-2 rounded-lg">
            <FaCalendarAlt className="text-xl"></FaCalendarAlt>
            <p>Reservation</p>
          </div>
        </NavLink>
      </div>
      <div className="w-full">
        <NavLink to={"/dashboard/user-cart"}>
          <div className="cursor-pointer flex justify-center items-center gap-1 hover:text-white hover:bg-yellow-600 hover:py-2 rounded-lg">
            <FaShoppingCart className="text-xl"></FaShoppingCart>
            <p>My Cart</p>
          </div>
        </NavLink>
      </div>
      <div className="w-full">
        <NavLink to={"/dashboard/add-review"}>
          <div className="cursor-pointer flex justify-center items-center  gap-1 hover:text-white hover:bg-yellow-600 hover:py-2 rounded-lg">
            <MdOutlineRateReview className="text-xl"></MdOutlineRateReview>
            <p>Add Review</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default GuestRoute;
