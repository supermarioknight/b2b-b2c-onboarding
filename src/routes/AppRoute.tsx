import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/signup/Signup.page.tsx";
import Signin from "../pages/signin/Signin.page.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import PublicRoute from "./PublicRoute.tsx";
import PlatformHome from "../pages/home/PlatformHome.page.tsx";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<PlatformHome />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
      {/* <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<PlatformHome />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes> */}
      {/* <Routes>
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <PlatformHome />
            </ProtectedRoute>
          }
        />
      </Routes> */}
    </BrowserRouter>
  );
};

export default AppRoute;
