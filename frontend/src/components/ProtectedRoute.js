import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ token, children }) => {
  if (!token) {
    // Redirect to login if no token is available
    return <Navigate to="/login" />;
  }
  // Render the children (protected component) if authenticated
  return children;
};

export default ProtectedRoute;
