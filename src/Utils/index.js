import axios from "axios";
import { clearCookie } from "./jwt";

export const axiosSecure = axios.create({
  baseURL: "https://bistro-server-two.vercel.app",
  withCredentials: true,
});
axiosSecure.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error, "from interceptors");
    const responseCode = error.response.status;
    console.log(responseCode, "code");
    if ((error.response && responseCode === 401) || responseCode === 403) {
      await clearCookie();
      window.location.href("/login");
    }
    return Promise.reject(error);
  }
);
