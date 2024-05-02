import { Route, Routes } from "react-router-dom";
import Signup from "../pages/signup/Signup.page.tsx";
import { ProtectedRoute } from "./ProtectedRoute.tsx";
import PlatformHome from "../pages/home/PlatformHome.page.tsx";

const AppRoute = () => {
  return (
    <Routes>
      <Route index element={<Signup />} />
      <Route path="signup" element={<Signup />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <PlatformHome />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoute;
