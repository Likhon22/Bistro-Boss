import { Navigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
import useAuth from "./../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useAuth();
  if (loader) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
