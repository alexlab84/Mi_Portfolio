import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673AB7",
    },
    secondary: {
      main: "#FFC107",
    },
    background: {
      default: "#1E1E1E",
      paper: "#292929",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0BEC5",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Arial", sans-serif`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          background: "linear-gradient(-45deg, #262626, #323232, #262626)",

          backgroundSize: "400% 400%",
          animation: "gradient 8s ease infinite",
          color: "#FFFFFF",
        },
        "@global": {
          "@keyframes gradient": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        },
      },
    },
  },
});

export default theme;
