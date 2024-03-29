import React from "react";
import "./dashboard.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import useCart from "../../hooks/useCart";
const GuestRoute = () => {
  const [cart] = useCart();
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
        <NavLink to={"/dashboard/payment"}>
          <div className="cursor-pointer flex justify-center items-center  gap-1 hover:text-white hover:bg-yellow-600 hover:py-2 rounded-lg">
            <MdOutlinePayment className="text-xl"></MdOutlinePayment>
            <p>Payment</p>
          </div>
        </NavLink>
      </div>
      <div className="w-full">
        <NavLink to={"/dashboard/payment-history"}>
          <div className="cursor-pointer flex justify-center items-center  gap-1 hover:text-white hover:bg-yellow-600 hover:py-2 rounded-lg">
            <TbMoneybag className="text-xl"></TbMoneybag>
            <p>Payment History</p>
          </div>
        </NavLink>
      </div>
      {/* <div className="w-full">
        <NavLink to={"/dashboard/reservation"}>
          <div className="cursor-pointer flex justify-center items-center gap-1 hover:text-white hover:bg-yellow-600 hover:py-2 rounded-lg">
            <FaCalendarAlt className="text-xl"></FaCalendarAlt>
            <p>Reservation</p>
          </div>
        </NavLink>
      </div> */}
      <div className="w-full">
        <NavLink to={"/dashboard/user-cart"}>
          <div className="cursor-pointer flex justify-center items-center gap-1 hover:text-white hover:bg-yellow-600 hover:py-2 rounded-lg">
            <FaShoppingCart className="text-xl"></FaShoppingCart>
            <p>My Cart({cart?.length})</p>
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
