import { axiosSecure } from ".";

export const getRating = async () => {
  const { data } = await axiosSecure.get("/ratings");
  return data;
};
