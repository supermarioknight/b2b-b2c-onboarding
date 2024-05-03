import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import AppLoader from "../components/common/loader/AppLoader";

const PublicRoute = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <AppLoader />;

  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoute;
