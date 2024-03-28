import { axiosSecure } from ".";

export const addCart = async (cartInfo) => {
  const { data } = await axiosSecure.post("/carts", cartInfo);

  return data;
};
export const getCart = async (email) => {
  const { data } = await axiosSecure.get(`/carts/${email}`);
  return data;
};
// deleteCart
export const deleteCart = async (id) => {
  const { data } = await axiosSecure.delete(`/carts/${id}`);
  return data;
};
