import { axiosSecure } from ".";

export const getMenu = async () => {
  const { data } = await axiosSecure.get("/menu");

  return data.result;
};
export const categoryWiseMenu = async (category) => {
  const { data } = await axiosSecure.get(`/menu?category=${category}`);
  return data.result;
};
export const getCategoryWithPagination = async (
  category,
  limit,
  currentPage,
  sortField,
  sortType
) => {
  console.log(sortField, sortType);
  const { data } = await axiosSecure.get(
    `/menu?category=${category}&sortField=${sortField}&sortType=${sortType}&limit=${limit}&currentPage=${currentPage}`
  );
  return data;
};
// adding menu
export const addMenu = async (itemInfo) => {
  const { data } = await axiosSecure.post("/menu", itemInfo);
  return data;
};
// get menu for admin
export const getMenuForAdmin = async (email) => {
  const { data } = await axiosSecure.get(`/menu/${email}`);
  return data;
};
export const deleteMenu = async (id) => {
  const { data } = await axiosSecure.delete(`/menu/${id}`);
  return data;
};
export const updateMenu = async (id, menuItem) => {
  const { data } = await axiosSecure.put(`/menu/${id}`, menuItem);
  return data;
};
