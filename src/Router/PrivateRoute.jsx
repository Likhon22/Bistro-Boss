import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={location} replace></Navigate>;
};

export default PrivateRoute;
