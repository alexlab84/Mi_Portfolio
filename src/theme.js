import { createTheme } from "@mui/material/styles";
import { color, font, size, radius, shadow, easing } from "./tokens";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: color.accent, dark: color.accentInk, contrastText: "#fff" },
    secondary: { main: color.ink },
    background: { default: color.bg, paper: color.surface },
    text: { primary: color.ink, secondary: color.inkMuted },
    divider: color.line,
  },

  shape: { borderRadius: 4 },

  typography: {
    fontFamily: font.body,

    // Titulares en serif editorial. El peso lo da la forma, no el bold.
    h1: {
      fontFamily: font.display,
      fontSize: size.display,
      fontWeight: 800,
      lineHeight: 0.98,
      letterSpacing: "-0.035em",
    },
    h2: {
      fontFamily: font.display,
      fontSize: size.h2,
      fontWeight: 700,
      lineHeight: 1.08,
      letterSpacing: "-0.025em",
    },
    h3: {
      fontFamily: font.body,
      fontSize: size.h3,
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
    },

    // Etiquetas mono en versalitas: fechas, secciones, metadatos.
    overline: {
      fontFamily: font.mono,
      fontSize: size.label,
      fontWeight: 500,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      lineHeight: 1,
    },

    body1: { fontSize: size.body, lineHeight: 1.65 },
    body2: { fontSize: size.small, lineHeight: 1.6 },
    button: { fontSize: size.small, fontWeight: 500, letterSpacing: "0.01em" },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: color.bg,
          color: color.ink,
          // Sin background-attachment: fixed (repintado caro en móvil)
          // y sin degradado radial decorativo.
          WebkitFontSmoothing: "antialiased",
          textRendering: "optimizeLegibility",
        },

        // Foco visible y coherente en toda la web.
        ":focus-visible": {
          outline: `2px solid ${color.accent}`,
          outlineOffset: "3px",
          borderRadius: radius.sm,
        },

        // Respeta la preferencia del sistema. Accesibilidad básica.
        "@media (prefers-reduced-motion: reduce)": {
          "*, *::before, *::after": {
            animationDuration: "0.01ms !important",
            animationIterationCount: "1 !important",
            transitionDuration: "0.01ms !important",
            scrollBehavior: "auto !important",
          },
        },

        /**
         * Revelado por CSS, no por JS.
         * Con `both` el elemento acaba en su estado final aunque la
         * animación no llegue a ejecutarse: si falla el JS, la página
         * se sigue viendo. Con framer-motion el contenido se quedaba
         * en opacity:0 para siempre.
         */
        "@keyframes reveal": {
          from: { opacity: 0, transform: "translateY(14px)" },
          to: { opacity: 1, transform: "none" },
        },
        /**
         * El contenido es visible por defecto. La animación solo se aplica
         * si el navegador dice que el movimiento es bienvenido.
         *
         * Antes estaba al revés: `both` deja el elemento en opacity:0 durante
         * todo su animation-delay, así que si la animación no arrancaba, el
         * texto no aparecía nunca. Accesible y resistente en el mismo cambio.
         */
        "@media (prefers-reduced-motion: no-preference)": {
          ".reveal": {
            animation: `reveal .62s ${easing} both`,
            animationDelay: "var(--delay, 0ms)",
          },
        },

        "::selection": { background: color.accent, color: "#fff" },
        "::-webkit-scrollbar": { width: "10px", height: "10px" },
        "::-webkit-scrollbar-track": { background: color.bg },
        "::-webkit-scrollbar-thumb": {
          background: color.lineStrong,
          borderRadius: radius.pill,
          border: `3px solid ${color.bg}`,
        },
        "::-webkit-scrollbar-thumb:hover": { background: color.inkMuted },
      },
    },

    // Sin hover global: cada uso decide. Antes esto chocaba con los sx de cada página.
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: color.surface,
          border: `1px solid ${color.line}`,
          borderRadius: radius.md,
          boxShadow: shadow.none,
          backgroundImage: "none",
        },
      },
    },

    MuiButton: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: {
          borderRadius: radius.pill,
          textTransform: "none",
          paddingInline: "1.35rem",
          paddingBlock: "0.6rem",
          boxShadow: "none",
          transition: `background-color .25s ${easing}, color .25s ${easing}, border-color .25s ${easing}`,
          "&:hover": { boxShadow: "none" },
        },
        containedPrimary: {
          backgroundColor: color.ink,
          color: color.onInk,
          "&:hover": { backgroundColor: color.accent },
        },
        outlinedPrimary: {
          // El borde de un control necesita 3:1 contra el fondo (WCAG 1.4.11).
          // lineStrong se quedaba en 1.56:1.
          borderColor: color.control,
          color: color.ink,
          "&:hover": {
            borderColor: color.ink,
            backgroundColor: "transparent",
            color: color.accent,
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: font.mono,
          fontSize: size.label,
          letterSpacing: "0.04em",
          borderRadius: radius.sm,
          backgroundColor: "transparent",
          border: `1px solid ${color.line}`,
          color: color.inkMuted,
          height: "26px",
        },
      },
    },

    MuiLink: {
      defaultProps: { underline: "none" },
      styleOverrides: {
        root: {
          color: color.ink,
          textDecoration: "underline",
          textDecorationColor: color.lineStrong,
          textUnderlineOffset: "0.22em",
          textDecorationThickness: "1px",
          transition: `color .2s ${easing}, text-decoration-color .2s ${easing}`,
          "&:hover": {
            color: color.accent,
            textDecorationColor: color.accent,
          },
        },
      },
    },

    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
    },
  },
});

export default theme;
