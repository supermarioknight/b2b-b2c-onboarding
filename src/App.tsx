import "./App.css";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./theme.ts";
import Signup from "./features/signup/Signup.page.tsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Signup />
    </ThemeProvider>
  );
}

export default App;
