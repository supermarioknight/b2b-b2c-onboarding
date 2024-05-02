import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import AppRoute from "./routes/AppRoute.tsx";

function App() {
  return (
    <div className="mainContainer">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoute />
      </ThemeProvider>
    </div>
  );
}

export default App;
