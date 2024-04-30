import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import Signup from "./features/signup/Signup.page.tsx";

function App() {
  return (
    <div className="mainContainer">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Signup />
      </ThemeProvider>
    </div>
  );
}

export default App;
