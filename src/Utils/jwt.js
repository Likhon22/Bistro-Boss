import { axiosSecure } from ".";

export const getToken = async (email) => {
  const user = { email };
  const { data } = await axiosSecure.post("/jwt", user);
  return data;
};

export const clearCookie = async () => {
  const { data } = await axiosSecure.get("/logout");
  return data;
};
