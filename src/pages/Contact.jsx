import { Helmet } from "react-helmet-async";
import { Box, Container, Typography } from "@mui/material";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import { color, font, size, easing } from "../tokens";

const reveal = (i = 0) => ({ className: "reveal", style: { "--delay": `${i * 70}ms` } });

const channels = [
  {
    label: "Email",
    value: "alejandra.sachez.garcia@gmail.com",
    href: "mailto:alejandra.sachez.garcia@gmail.com",
  },
  { label: "LinkedIn", value: "in/alexlab84", href: "https://linkedin.com/in/alexlab84" },
  { label: "GitHub", value: "alexlab84", href: "https://github.com/alexlab84" },
  {
    label: "Agenda",
    value: "30 minutos, cuando te venga bien",
    href: "https://calendly.com/alejandra-sachez-garcia/30min",
  },
];

export default function Contact() {
  return (
    <Box component="main" sx={{ pt: { xs: 13, md: 18 }, pb: { xs: 8, md: 14 } }}>
      <Helmet>
        <title>Contacto | Alejandra Sánchez</title>
        <meta
          name="description"
          content="Escríbeme. Las mañanas las tengo en Lucio J&M; las tardes las tengo libres para proyectos de desarrollo web y e-commerce."
        />
        <link rel="canonical" href="https://www.alejandrasanchezdev.es/contact" />
      </Helmet>

      <Container>
        <div {...reveal(0)}>
          <Typography variant="overline" component="p" sx={{ color: color.inkMuted, mb: 3 }}>
            Contacto
          </Typography>
        </div>
        <div {...reveal(1)}>
          <Typography variant="h1" component="h1" sx={{ color: color.ink, maxWidth: "12ch" }}>
            Escríbeme.
          </Typography>
        </div>
        <div {...reveal(2)}>
          <Typography
            sx={{ mt: 4, maxWidth: "50ch", fontSize: size.lead, lineHeight: 1.55, color: color.inkMuted }}
          >
            Las mañanas las tengo en Lucio J&amp;M, de lunes a viernes. Las tardes las tengo libres,
            así que si tienes algo entre manos, cuéntamelo.
          </Typography>
        </div>

        <Box sx={{ mt: { xs: 7, md: 10 }, maxWidth: "820px" }}>
          {channels.map((channel, i) => (
            <Box
              key={channel.label}
              {...reveal(i + 3)}
              component="a"
              href={channel.href}
              {...(channel.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr auto", sm: "150px 1fr auto" },
                gap: 2,
                alignItems: "center",
                py: { xs: 3, md: 3.5 },
                borderTop: `1px solid ${color.line}`,
                textDecoration: "none",
                "&:last-of-type": { borderBottom: `1px solid ${color.line}` },
                "&:hover .c-value": { color: color.accent },
                "&:hover .c-arrow": { transform: "translate(3px, -3px)", opacity: 1 },
              }}
            >
              <Typography variant="overline" component="span" sx={{ color: color.inkMuted }}>
                {channel.label}
              </Typography>
              <Typography
                className="c-value"
                component="span"
                sx={{
                  fontFamily: font.display,
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                  fontSize: { xs: "1.15rem", md: "1.4rem" },
                  color: color.ink,
                  transition: `color .25s ${easing}`,
                  gridColumn: { xs: "1 / -2", sm: "auto" },
                  wordBreak: "break-word",
                }}
              >
                {channel.value}
              </Typography>
              <ArrowOutward
                className="c-arrow"
                sx={{
                  fontSize: "1rem",
                  color: color.accent,
                  opacity: 0.35,
                  transition: `transform .25s ${easing}, opacity .25s ${easing}`,
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
