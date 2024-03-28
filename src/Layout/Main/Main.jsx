import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const Main = () => {
  const location = useLocation();
  const noNavbarFooter =
    location?.pathname.includes("/register") ||
    location?.pathname.includes("/login");

  return (
    <div>
      {noNavbarFooter ? "" : <Navbar></Navbar>}
      <Outlet />
      {noNavbarFooter ? "" : <Footer></Footer>}
      <Toaster />
    </div>
  );
};

export default Main;
