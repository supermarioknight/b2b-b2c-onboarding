import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import AppLoader from "../components/common/loader/AppLoader";

const ProtectedRoute: React.FC = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <AppLoader />;

  return user ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
