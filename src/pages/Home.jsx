import { Helmet } from "react-helmet-async";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { color, font, size, easing } from "../tokens";

const reveal = (i = 0) => ({ className: "reveal", style: { "--delay": `${i * 80}ms` } });

/**
 * Columna de datos del hero. Llena el lado derecho con información
 * en vez de con decoración, y deja caer la disponibilidad como un dato
 * más — que es la única forma de decirla sin que suene a anuncio.
 */
const facts = [
  { term: "Ahora", value: "Lucio J&M", to: "/projects/lucio-jm" },
  { term: "Desde", value: "Dic 2025" },
  { term: "Antes", value: "Laboratorio clínico" },
  { term: "Stack", value: "WordPress · React" },
  { term: "SEO", value: "1.400 indexadas" },
  { term: "Estado", value: "Abierta a proyectos", accent: true },
];

const figures = [
  { figure: "18", unit: "años", caption: "en un laboratorio clínico, antes de esto." },
  { figure: "21.000", unit: "candidatos", caption: "a La Velada del Año V. Entré en el equipo." },
  { figure: "1872", unit: "", caption: "el año que abrió Lucio J&M. Llevo su tienda online." },
];

export default function Home() {
  return (
    <Box component="main" sx={{ pt: { xs: 14, md: 19 }, pb: { xs: 8, md: 14 } }}>
      <Helmet>
        <title>Alejandra Sánchez — Frontend Developer</title>
        <meta
          name="description"
          content="Alejandra Sánchez, frontend developer. Dieciocho años en laboratorio clínico y ahora en código. Llevo el e-commerce de Lucio J&M, tienda de telas abierta en 1872."
        />
        <link rel="canonical" href="https://www.alejandrasanchezdev.es/" />
        <meta property="og:title" content="Alejandra Sánchez — Frontend Developer" />
        <meta property="og:url" content="https://www.alejandrasanchezdev.es/" />
      </Helmet>

      <Container>
        {/* ───────────── HERO: texto + columna de datos ───────────── */}
        <Box
          component="header"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.35fr 0.65fr" },
            gap: { xs: 5, md: 7 },
            alignItems: "start",
          }}
        >
          <Box>
            <div {...reveal(0)}>
              <Typography variant="overline" component="p" sx={{ color: color.inkMuted, mb: 2.5 }}>
                Frontend Developer
              </Typography>
            </div>

            <div {...reveal(1)}>
              <Typography variant="h1" component="h1" sx={{ color: color.ink, maxWidth: "17ch" }}>
                Dieciocho años leyendo analíticas clínicas.{" "}
                <Box component="em" sx={{ fontStyle: "normal", color: color.accent, display: "block" }}>
                  Ahora leo código.
                </Box>
              </Typography>
            </div>

            <div {...reveal(2)}>
              <Typography
                sx={{
                  mt: 4,
                  maxWidth: "48ch",
                  fontSize: size.lead,
                  lineHeight: 1.55,
                  color: color.inkMuted,
                }}
              >
                Soy{" "}
                <Box component="strong" sx={{ color: color.ink, fontWeight: 500 }}>
                  Alejandra Sánchez
                </Box>
                . Llevo el e-commerce de Lucio J&amp;M, una tienda de telas que abrió en 1872 y
                sigue abierta.
              </Typography>
            </div>

            <div {...reveal(3)}>
              <Stack direction="row" spacing={1.5} sx={{ mt: 4, flexWrap: "wrap", gap: 1.5 }}>
                <Button component={Link} to="/projects" variant="contained" color="primary">
                  Ver el trabajo
                </Button>
                <Button component={Link} to="/contact" variant="outlined" color="primary">
                  Escríbeme
                </Button>
              </Stack>
            </div>
          </Box>

          {/* Ficha de datos */}
          <Box component="dl" {...reveal(2)} sx={{ m: 0, mt: { md: 1 }, borderTop: `1px solid ${color.line}` }}>
            {facts.map((row) => {
              const value = row.to ? (
                <Box
                  component={Link}
                  to={row.to}
                  sx={{
                    color: color.ink,
                    textDecoration: "underline",
                    textDecorationColor: color.lineStrong,
                    textUnderlineOffset: "0.22em",
                    transition: `color .2s ${easing}`,
                    "&:hover": { color: color.accent, textDecorationColor: color.accent },
                  }}
                >
                  {row.value}
                </Box>
              ) : (
                row.value
              );

              return (
                <Box
                  key={row.term}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 2,
                    py: 1.6,
                    borderBottom: `1px solid ${color.line}`,
                  }}
                >
                  <Typography component="dt" variant="overline" sx={{ color: color.inkMuted }}>
                    {row.term}
                  </Typography>
                  <Typography
                    component="dd"
                    sx={{
                      m: 0,
                      textAlign: "right",
                      fontSize: size.small,
                      color: row.accent ? color.accent : color.ink,
                    }}
                  >
                    {value}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* ───────────── LOS TRES HECHOS ───────────── */}
        <Box
          component="section"
          aria-label="Datos"
          sx={{
            mt: { xs: 9, md: 13 },
            borderTop: `1px solid ${color.line}`,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
          }}
        >
          {figures.map((fact, index) => (
            <Box
              key={fact.figure}
              {...reveal(index)}
              sx={{
                py: { xs: 4, md: 5 },
                pr: { sm: 4 },
                borderBottom: { xs: `1px solid ${color.line}`, sm: "none" },
              }}
            >
              <Typography
                component="p"
                sx={{
                  fontFamily: font.display,
                  fontWeight: 800,
                  fontVariantNumeric: "lining-nums tabular-nums",
                  fontSize: "clamp(2.75rem, 1.5rem + 4vw, 4rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: color.ink,
                }}
              >
                {fact.figure}
                {fact.unit && (
                  <Box
                    component="span"
                    sx={{
                      fontFamily: font.mono,
                      fontSize: size.label,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: color.inkMuted,
                      ml: 1.5,
                      verticalAlign: "super",
                    }}
                  >
                    {fact.unit}
                  </Box>
                )}
              </Typography>
              <Typography
                sx={{ mt: 1.5, maxWidth: "24ch", fontSize: size.small, lineHeight: 1.5, color: color.inkMuted }}
              >
                {fact.caption}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* ───────────── CIERRE ───────────── */}
        <div {...reveal(3)}>
          <Box
            sx={{
              mt: { xs: 9, md: 13 },
              py: { xs: 5, md: 7 },
              px: { xs: 3.5, md: 6 },
              backgroundColor: color.inkBlock,
              color: color.onInk,
            }}
          >
            <Typography
              sx={{
                fontFamily: font.display,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                fontSize: size.h2,
                lineHeight: 1.08,
                maxWidth: "22ch",
              }}
            >
              Me gusta que me den el problema entero, no una parte.
            </Typography>
            <Typography sx={{ mt: 3, maxWidth: "48ch", color: color.onInkMuted, fontSize: size.body }}>
              Si tienes uno de esos, cuéntamelo.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                mt: 4,
                backgroundColor: color.onInk,
                color: color.inkBlock,
                "&:hover": { backgroundColor: color.accent, color: "#fff" },
              }}
            >
              Escríbeme
            </Button>
          </Box>
        </div>
      </Container>
    </Box>
  );
}
