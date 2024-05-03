import { createTheme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bodyLg: true;
    titleLg: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  bodyLg: React.CSSProperties;
  titleLg: React.CSSProperties;
}

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
    bodyLg: {
      fontSize: "1.125rem",
      fontWeight: 400,
      lineHeight: "1.744rem",
      fontcolor: "#374151",
    },
    titleLg: {
      fontSize: "1.125rem",
      lineHeight: "1.868rem",
      fontWeight: 500,
      color: "#1F2937",
    },
  } as ExtendedTypographyOptions,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 991,
      lg: 1280,
      xl: 1440,
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
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#3B82F6",
          textDecorationColor: "#3B82F6",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#3B82F6",
          "&.Mui-checked": {
            color: "#3B82F6",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#374151",
          "&.Mui-checked": {
            color: "#374151",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        colorError: "#ff8080",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0.875",
          paddingLeft: 24,
          paddingRight: 24,
          fontWeight: 500,
          textTransform: "initial",
          letterSpacing: "0.02em",
          lineHeight: 2,
          minHeight: 48,
          fontSize: 16,
          borderRadius: 8,
          boxShadow: "none",
          "&.MuiButton-containedInfo": {
            backgroundColor: "#F3F4F6",
            color: "#1F2937",
          },
          "&.MuiButton-containedSecondary": {
            backgroundColor: "#374151",
            // color: "#1F2937",
          },
        },
        colorSecondary: {
          backgroundColor: "#374151",
        },
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
