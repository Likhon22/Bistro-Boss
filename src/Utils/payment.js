import { axiosSecure } from ".";
export const savePaymentInfo = async (info) => {
  const { data } = await axiosSecure.post("/payments", info);
  return data;
};
// getPaymentHistory for user
export const getPaymentHistoryForUser = async (email) => {
  const { data } = await axiosSecure.get(`/payments/${email}`);
  return data;
};
