import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/signup/Signup.page.tsx";
import Signin from "../pages/signin/Signin.page.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import PublicRoute from "./PublicRoute.tsx";
import OrganizationHome from "../pages/home/OrganizationHome.page.tsx";
import OrganizationOnboarding from "../pages/onboarding/OrganizationOnboarding.page.tsx";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/onboarding" element={<OrganizationOnboarding />} />
          <Route path="/" element={<OrganizationHome />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
