import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import "./dashboard.css";
import { ImSpoonKnife } from "react-icons/im";
import { MdManageHistory } from "react-icons/md";
const AdminRoute = () => {
  return (
    <div
      className=" font-medium   space-y-5 text-center text-[#151515]"
      id="menu"
    >
      <div className="w-full">
        <NavLink to={"/dashboard/admin-home"}>
          <div className="cursor-pointer flex justify-center items-center  gap-1 hover:text-white hover:bg-yellow-600 hover:py-2 rounded-lg">
            <FaHome className="text-xl"></FaHome>
            <p>Admin Home</p>
          </div>
        </NavLink>
      </div>
      <div className="w-full">
        <NavLink to={"/dashboard/add-item"}>
          <div className="cursor-pointer flex justify-center items-center gap-1 hover:text-white hover:bg-yellow-600 hover:py-2 rounded-lg">
            <ImSpoonKnife className="text-xl"></ImSpoonKnife>
            <p>Add Items</p>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/dashboard/manage-item"}>
          <div className="cursor-pointer flex justify-center items-center gap-1 hover:text-white hover:bg-yellow-600 hover:py-2 rounded-lg">
            <MdManageHistory className="text-xl"></MdManageHistory>
            <p>Manage Items</p>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/dashboard/manage-user"}>
          <div className="cursor-pointer flex justify-center items-center gap-1 hover:text-white hover:bg-yellow-600 hover:py-2 rounded-lg">
            <FaUser className="text-xl"></FaUser>
            <p>Manage User</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminRoute;
