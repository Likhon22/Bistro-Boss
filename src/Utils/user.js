import { axiosSecure } from ".";

export const saveUser = (userInfo) => {
  const currentUser = {
    name: userInfo?.displayName,
    email: userInfo?.email,
    role: "Guest",
  };
  const { data } = axiosSecure.post(`/users/${userInfo?.email}`, currentUser);
  return data;
};

export const getRole = async (email) => {
  const { data } = await axiosSecure.get(`/users/${email}`);
  return data?.role;
};
export const getUser = async () => {
  const { data } = await axiosSecure.get("/users");
  return data;
};
export const updateUserRole = async (roleInfo, email) => {
  const { data } = await axiosSecure.put(`/users/${email}`, roleInfo);
  return data;
};
