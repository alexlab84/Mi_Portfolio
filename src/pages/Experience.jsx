import { Helmet } from "react-helmet-async";
import { Box, Container, Typography } from "@mui/material";
import { color, font, size } from "../tokens";

const reveal = (i = 0) => ({ className: "reveal", style: { "--delay": `${i * 60}ms` } });

/**
 * El laboratorio va en la misma línea de tiempo, no aparte.
 * Dieciocho años de trabajo no son un prólogo: son la mitad larga de la tabla.
 */
const roles = [
  {
    role: "Responsable de e-commerce",
    org: "Lucio J&M",
    link: "https://www.luciojm.es",
    period: "Dic 2025 — hoy",
    note: "Media jornada",
    body: "Catálogo, capa visual, desarrollo a medida sobre WooCommerce, SEO, analítica y rendimiento de la tienda online de una casa de telas abierta en 1872.",
    stack: ["WordPress", "WooCommerce", "Elementor", "PHP", "JavaScript", "SEO"],
  },
  {
    role: "Frontend Developer",
    org: "eTrivium",
    link: "https://etrivium.es/",
    period: "Jul — Dic 2025",
    body: "Funcionalidades nuevas y refactorización sobre una aplicación con usuarios reales, además de mejoras de interfaz.",
    stack: ["React", "JavaScript", "UX/UI"],
  },
  {
    role: "Frontend Developer",
    org: "La Velada del Año V — midudev",
    link: "https://github.com/midudev/la-velada-web-oficial/pulls?q=is%3Apr+author%3Aalexlab84",
    period: "Abr — May 2025",
    body: "Web oficial del evento de Ibai Llanos. Unas 21.000 personas se presentaron para colaborar. Entré en el equipo y dejé cuatro PRs fusionadas: la sección de banners de patrocinadores —componente, tipos y datos—, el swipe con ratón y táctil sobre la galería de boxeadores que ya existía, y mover los componentes a «sections».",
    stack: ["Astro", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer",
    org: "AdoptaUnJunior",
    period: "Oct — Dic 2024",
    body: "Proyecto Cloudsolute, en un entorno de equipo con las prácticas de un desarrollo real.",
    stack: ["Next.js", "TypeScript", "React"],
  },
  {
    role: "Técnica de laboratorio",
    org: "Hospital",
    period: "2006 — 2024",
    note: "18 años",
    body: "Manejo de los aparatos de laboratorio, extracciones de sangre y alta de pacientes en el sistema. Tres oficios distintos dentro del mismo puesto, y la costumbre de no soltar un problema hasta entenderlo entero.",
    stack: ["Análisis clínico", "Instrumentación", "Trato con pacientes"],
    past: true,
  },
];

export default function Experience() {
  return (
    <Box component="main" sx={{ pt: { xs: 13, md: 18 }, pb: { xs: 8, md: 14 } }}>
      <Helmet>
        <title>Trayectoria | Alejandra Sánchez</title>
        <meta
          name="description"
          content="Trayectoria de Alejandra Sánchez: dieciocho años como técnica de laboratorio hospitalario y, desde 2023, desarrollo frontend en eTrivium, La Velada del Año V y Lucio J&M."
        />
        <link rel="canonical" href="https://www.alejandrasanchezdev.es/experience" />
      </Helmet>

      <Container>
        <div {...reveal(0)}>
          <Typography variant="overline" component="p" sx={{ color: color.inkMuted, mb: 3 }}>
            Trayectoria
          </Typography>
        </div>
        <div {...reveal(1)}>
          <Typography variant="h1" component="h1" sx={{ color: color.ink, maxWidth: "16ch" }}>
            Dos carreras, la misma cabeza.
          </Typography>
        </div>
        <div {...reveal(2)}>
          <Typography
            sx={{ mt: 4, maxWidth: "54ch", fontSize: size.lead, lineHeight: 1.55, color: color.inkMuted }}
          >
            Empecé a programar por mi cuenta en 2023 y en 2024 hice un bootcamp. Antes de eso llevaba
            dieciocho años trabajando, que también cuentan.
          </Typography>
        </div>

        <Box component="ol" sx={{ listStyle: "none", p: 0, mt: { xs: 7, md: 10 } }}>
          {roles.map((item, i) => (
            <Box
              component="li"
              key={`${item.org}-${item.period}`}
              {...reveal(i)}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "200px 1fr" },
                gap: { xs: 1.5, md: 5 },
                py: { xs: 4, md: 5 },
                borderTop: `1px solid ${color.line}`,
                // El puesto anterior se atenúa: sigue ahí, pero no compite.
                opacity: item.past ? 0.75 : 1,
              }}
            >
              <Box>
                <Typography
                  component="p"
                  sx={{ fontFamily: font.mono, fontSize: size.label, color: color.ink, letterSpacing: "0.06em" }}
                >
                  {item.period}
                </Typography>
                {item.note && (
                  <Typography
                    component="p"
                    sx={{ fontFamily: font.mono, fontSize: size.label, color: color.accent, mt: 0.8 }}
                  >
                    {item.note}
                  </Typography>
                )}
              </Box>

              <Box>
                <Typography
                  component="h2"
                  sx={{ fontFamily: font.display, fontWeight: 700, letterSpacing: "-0.02em", fontSize: size.h3, color: color.ink, lineHeight: 1.2 }}
                >
                  {item.role}
                </Typography>

                <Typography component="p" sx={{ mt: 0.5, fontSize: size.small, color: color.inkMuted }}>
                  {item.link ? (
                    <Box
                      component="a"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: color.inkMuted,
                        textDecoration: "underline",
                        textDecorationColor: color.line,
                        textUnderlineOffset: "0.2em",
                        "&:hover": { color: color.accent, textDecorationColor: color.accent },
                      }}
                    >
                      {item.org}
                    </Box>
                  ) : (
                    item.org
                  )}
                </Typography>

                <Typography sx={{ mt: 2, color: color.inkMuted, fontSize: size.body, maxWidth: "60ch" }}>
                  {item.body}
                </Typography>

                <Box sx={{ mt: 2.5, display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {item.stack.map((tech) => (
                    <Typography
                      key={tech}
                      component="span"
                      sx={{
                        fontFamily: font.mono,
                        fontSize: size.label,
                        color: color.inkMuted,
                        border: `1px solid ${color.line}`,
                        px: 1.2,
                        py: 0.5,
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
