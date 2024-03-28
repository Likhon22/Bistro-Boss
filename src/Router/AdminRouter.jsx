import React from "react";
import useRole from "../hooks/useRole";
import { Navigate } from "react-router-dom";

const AdminRouter = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) {
    return <p>loading.......</p>;
  }

  if (role === "Admin") {
    return children;
  }
  return <Navigate to="/dashboard" />;
};

export default AdminRouter;
