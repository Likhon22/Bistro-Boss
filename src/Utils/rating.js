import { axiosSecure } from ".";

export const getRating = async () => {
  const { data } = await axiosSecure.get("/ratings");
  return data;
};
export const addRating = async (ratingInfo) => {
  const { data } = await axiosSecure.post("/ratings", ratingInfo);
  return data;
};
export const getRatingForUserEmail = async (email) => {
  const { data } = await axiosSecure.get(`/ratings/${email}`);
  return data;
};
