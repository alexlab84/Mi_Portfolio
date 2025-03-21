import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673AB7", // Violeta profesional
    },
    secondary: {
      main: "#FFC107", // Amarillo para contraste
    },
    background: {
      default: "#1E1E1E", // Fondo más oscuro pero no completamente negro
      paper: "#292929", 
    },
    text: {
      primary: "#FFFFFF", // Blanco para contraste
      secondary: "#B0BEC5", // Gris claro para subtítulos
    },
  },
  typography: {
    fontFamily: `"Poppins", "Arial", sans-serif`, // Fuente más moderna
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
