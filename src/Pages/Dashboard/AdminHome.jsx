import { TypeAnimation } from "react-type-animation";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getOrderStats, getStatsForAdmin } from "../../Utils/stats";
import { FaMoneyCheck, FaUsers, FaShippingFast } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import QuantityBarChart from "../../Components/Dashboard/QuantityBarChart";
import AdminPieChart from "./AdminPieChart";

const AdminHome = () => {
  const { user } = useAuth();
  const name = user?.displayName ? user?.displayName : "Back";

  const { data } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      return await getStatsForAdmin();
    },
  });
  const { data: orderStats = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      return await getOrderStats();
    },
  });
  console.log(orderStats);
  const pieData = orderStats.map((data) => {
    return {
      name: data.category,
      value: data.revenue,
    };
  });
  return (
    <div>
      <div>
        <div className="flex justify-center items-center">
          <TypeAnimation
            sequence={[
              `Hi! Welcome ${name}`, // Welcoming message for the site owner
              1000, // Wait 1 second
              "You're now viewing your product sales data.", // Message indicating product sales data
              1000, // Wait 1 second
              "Explore the insights to optimize your business.", // Encouragement to explore data
              1000, // Wait 1 second
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={3}
          />
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <div className="stats shadow ">
          <div className="stat bg-purple-500 text-white">
            <div className="stat-figure ">
              <FaMoneyCheck className="text-3xl" />
            </div>
            <div className="stat-title font-medium text-white text-center">
              Revenue
            </div>
            <div className="stat-value text-center">${data?.revenue}</div>
          </div>

          <div className="stat text-white bg-[#d1a054]">
            <div className="stat-figure ">
              <FaUsers className="text-3xl"></FaUsers>
            </div>
            <div className="stat-title font-medium text-white text-center">
              Customers
            </div>
            <div className="stat-value text-center">{data?.customer}</div>
          </div>
          <div className="stat text-white bg-red-500">
            <div className="stat-figure ">
              <MdOutlineRestaurantMenu className="text-3xl"></MdOutlineRestaurantMenu>
            </div>
            <div className="stat-title font-medium text-white text-center">
              Menu Items
            </div>
            <div className="stat-value text-center">{data?.products}</div>
          </div>

          <div className="stat text-white bg-blue-500">
            <div className="stat-figure ">
              <FaShippingFast className="text-3xl"></FaShippingFast>
            </div>
            <div className="stat-title font-medium text-white text-center">
              Orders
            </div>
            <div className="stat-value text-center">{data?.order}</div>
          </div>
        </div>
      </div>
      <div className="flex w-4/5 mx-auto items-center justify-center gap-12 mt-12">
        <div className="w-1/2 ">
          <QuantityBarChart orderStats={orderStats}></QuantityBarChart>
        </div>
        <div className="w-1/2 ">
          <AdminPieChart pieData={pieData}></AdminPieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
