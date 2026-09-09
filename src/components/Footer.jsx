import { Link } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { color, font, size, easing } from "../tokens";

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/alexlab84" },
  { label: "GitHub", href: "https://github.com/alexlab84" },
  { label: "Email", href: "mailto:alejandra.sachez.garcia@gmail.com" },
];

const linkSx = {
  fontSize: size.small,
  color: color.inkMuted,
  textDecoration: "none",
  transition: `color .2s ${easing}`,
  "&:hover": { color: color.accent },
};

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: `1px solid ${color.line}`, py: { xs: 5, md: 6 } }}>
      <Container>
        <Box sx={{
          display: "flex", flexWrap: "wrap", gap: 3,
          justifyContent: "space-between", alignItems: "baseline",
        }}>
          <Box>
            <Typography component={Link} to="/" sx={{
              fontFamily: font.display, fontWeight: 700, letterSpacing: "-0.03em",
              fontSize: "1.05rem", color: color.ink, textDecoration: "none",
              "&:hover": { color: color.accent },
            }}>
              Alejandra Sánchez
            </Typography>
            <Typography sx={{ mt: 0.5, fontSize: size.small, color: color.inkMuted }}>
              Frontend Developer
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, alignItems: "baseline" }}>
            {links.map((l) => (
              <Box key={l.label} component="a" href={l.href}
                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                sx={linkSx}>
                {l.label}
              </Box>
            ))}
            <Box component={Link} to="/colofon" sx={linkSx}>
              Cómo está hecha esta web
            </Box>
          </Box>
        </Box>

        <Typography sx={{
          mt: 4, fontFamily: font.mono, fontSize: size.label,
          letterSpacing: "0.08em", color: color.inkMuted,
        }}>
          © 2026
        </Typography>
      </Container>
    </Box>
  );
}
