import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import type { ReactNodeProps } from "./types/CommonTypes";

const ProtectedRoute = ({ children }: ReactNodeProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate authentication check
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
