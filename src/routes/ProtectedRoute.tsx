import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = "";
  if (!user) {
    return <Navigate to="/signup" replace />;
  }

  return children;
};
