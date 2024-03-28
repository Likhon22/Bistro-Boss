import { useState } from "react";
import LeftSide from "../../Components/Dashboard/LeftSide";
import { Outlet } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="flex  relative  ">
      <div
        className={`${
          isVisible
            ? "   translate-x-0 transition duration-500 ease-in-out"
            : "  -translate-x-full transition duration-1000 ease-in-out  "
        } bg-[#d1a054] `}
      >
        <LeftSide></LeftSide>
      </div>

      <div className="flex-1 z-30">
        <div
          className={`${
            isVisible
              ? "   translate-x-2  transition duration-500 ease-in-out overflow-hidden"
              : "  -translate-x-48 transition duration-1000 ease-in-out  "
          }`}
        >
          <button
            className=" text-3xl pl-2 pt-12"
            onClick={() => setIsVisible(!isVisible)}
          >
            <IoIosMenu></IoIosMenu>
          </button>
          <div className="pl-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
