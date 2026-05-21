import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb", // Azul royal muy profesional
    },
    secondary: {
      main: "#4f46e5", // Indigo
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#4b5563",
    },
  },
  typography: {
    fontFamily: `"Outfit", "Inter", sans-serif`,
    h3: { fontWeight: 700, letterSpacing: "-0.5px", color: "#111827" },
    h4: { fontWeight: 600, letterSpacing: "-0.5px", color: "#111827" },
    h5: { fontWeight: 500 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
          backgroundImage: "radial-gradient(circle at 50% -20%, #eef2ff 0%, #f8f9fa 40%, #f8f9fa 100%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          color: "#111827",
        },
        "::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#c1c1c1",
          borderRadius: "4px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#a8a8a8",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            border: "1px solid #d1d5db",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e5e7eb",
          boxShadow: "none",
          color: "#111827",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
