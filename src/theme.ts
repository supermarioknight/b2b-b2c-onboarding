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
      color: "#374151",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: "1.2425",
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: "#FDE047",
    },
    secondary: {
      main: "#374151",
    },
    text: {
      primary: "#1F2937",
      secondary: "#374151",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          maxHeight: 52,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 0,
          paddingRight: 8,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          alignItems: "flex-start",
          padding: 0,
          paddingBottom: 24,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0.875",
          paddingLeft: 3,
          paddingRight: 3,
          fontWeight: 500,
          textTransform: "initial",
          letterSpacing: "0.02em",
          lineHeight: 2,
          minHeight: 48,
          fontSize: 16,
        },
        // containedPrimary: {
        //   backgroundColor: "#FDE047",
        // },
        // colorInherit: {
        //   color: "#6E7581",
        //   borderColor: "#E9EFFA",
        //   "&:hover": {
        //     backgroundColor: "#E9EFFA",
        //   },
        // },
        // sizeSmall: {
        //   padding: "0.5rem 1rem",
        //   "&$outlinedSizeSmall": {
        //     padding: "7.5px 1rem",
        //   },
        // },
        // sizeLarge: {
        //   padding: "1rem 1.5rem",
        // },
        // outlined: {
        //   padding: "0.8125rem 1rem",
        // },
      },
    },
  },
});
