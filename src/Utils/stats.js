import { axiosSecure } from ".";

export const getStatsForAdmin = async () => {
  const { data } = await axiosSecure.get("/admin-stats");
  return data;
};
export const getOrderStats = async () => {
  const { data } = await axiosSecure.get("/order-stats");
  return data;
};
