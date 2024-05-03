import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import AppRoute from "./routes/AppRoute.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient/queryClient.ts";
import { configureAmplify } from "./services/amplify/configureAmplify.ts";
import { AppContextProvider } from "./context/index.tsx";

configureAmplify();

function App() {
  return (
    <div className="mainContainer">
      <AppContextProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppRoute />
          </ThemeProvider>
        </QueryClientProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
