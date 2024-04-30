import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import Signup from "./pages/signup/Signup.page.tsx";
import { Route, Routes } from "react-router-dom";
import CreatePassword from "./pages/createPassword/CreatePassword.page.tsx";
import PlatformHome from "./pages/home/PlatformHome.page.tsx";
import BasicInfo from "./pages/basicInfo/BasicInfo.page.tsx";

function App() {
  return (
    <div className="mainContainer">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/password" element={<CreatePassword />} />
          <Route path="/home" element={<PlatformHome />} />
          <Route path="/info" element={<BasicInfo />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
