import { axiosSecure } from ".";

export const getMenu = async () => {
  const { data } = await axiosSecure.get("/menu");

  return data;
};
export const categoryWiseMenu = async (category) => {
  const { data } = await axiosSecure.get(`/menu?category=${category}`);
  return data.result;
};
export const getCategoryWithPagination = async (
  category,
  limit,
  currentPage
) => {
  const { data } = await axiosSecure.get(
    `/menu?category=${category}&limit=${limit}&currentPage=${currentPage}`
  );
  return data;
};
