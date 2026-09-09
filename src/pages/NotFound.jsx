import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Box, Container, Typography, Button } from "@mui/material";
import { color, font, size } from "../tokens";

export default function NotFound() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 14, md: 20 },
        pb: 10,
      }}
    >
      <Helmet>
        <title>Página no encontrada — Alejandra Sánchez</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Container>
        <Typography variant="overline" component="p" sx={{ color: color.inkMuted, mb: 3 }}>
          Error 404
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontFamily: font.display,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            fontSize: "clamp(2.5rem, 1.2rem + 5vw, 4.5rem)",
            lineHeight: 1.05,
            color: color.ink,
            maxWidth: "16ch",
          }}
        >
          Esta página no existe.
        </Typography>
        <Typography sx={{ mt: 3, mb: 5, maxWidth: "44ch", fontSize: size.lead, color: color.inkMuted }}>
          O la he movido, o el enlace venía mal. Las dos cosas tienen arreglo.
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary">
          Volver al inicio
        </Button>
      </Container>
    </Box>
  );
}
