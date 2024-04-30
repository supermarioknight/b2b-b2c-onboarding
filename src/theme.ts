import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["DM Sans", "sans-serif"].join(","),
    h1: {
      fontSize: "2.25rem",
      fontWeight: 500,
      lineHeight: "2.8675rem",
    },
    h2: {
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: "2.5rem",
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: "1.9375",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: "1.2425",
      fontWeight: 400,
    },
  },
  palette: {
    text: {
      primary: "#1F2937",
      secondary: "#374151",
    },
  },
});
