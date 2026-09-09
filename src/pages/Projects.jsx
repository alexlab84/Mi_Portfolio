import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import { color, font, size, easing } from "../tokens";
import luciojm from "../assets/luciojm.webp";
import etrivium from "../assets/etrivium.webp";
import lavelada from "../assets/la velada v.webp";
import quiniela from "../assets/Quiniela.webp";

const reveal = (i = 0) => ({ className: "reveal", style: { "--delay": `${i * 70}ms` } });

const projects = [
  {
    title: "Lucio J&M",
    year: "2025 —",
    kicker: "Caso completo",
    summary:
      "La tienda de telas más antigua de España, abierta en 1872. Cuando llegué no tenía una sola página indexada en Google; hoy tiene 1.400. Monté las 1.109 fichas de producto e hice que WooCommerce supiera vender tela por metros fraccionados.",
    stack: ["WordPress", "WooCommerce", "Elementor", "PHP", "JavaScript"],
    image: luciojm,
    to: "/projects/lucio-jm",
  },
  {
    title: "La Velada del Año V",
    year: "2025",
    kicker: "Con midudev",
    summary:
      "Web oficial del evento de Ibai Llanos. Se presentaron unas 21.000 personas para colaborar; entré en el equipo y dejé cuatro pull requests fusionadas: la sección de banners de patrocinadores completa, el gesto de swipe —con ratón y con dedo— sobre la galería de boxeadores, y un refactor de la estructura de carpetas del proyecto.",
    stack: ["Astro", "TypeScript", "Tailwind CSS"],
    image: lavelada,
    href: "https://github.com/midudev/la-velada-web-oficial/pulls?q=is%3Apr+author%3Aalexlab84",
  },
  {
    title: "eTrivium",
    year: "2025",
    kicker: "Producto",
    summary:
      "Funcionalidades nuevas y refactorización sobre una aplicación en marcha, además de mejoras de interfaz. Trabajo de producto: tocar código que ya tiene usuarios sin romperles nada.",
    stack: ["React", "JavaScript", "UX/UI"],
    image: etrivium,
    href: "https://etrivium.es/",
  },
  {
    title: "Pronósticos deportivos",
    year: "2024",
    kicker: "Proyecto propio",
    summary:
      "Aplicación fullstack para gestionar ligas y pronósticos entre amigos: predicciones, resultados y clasificación. La hice entera, del modelo de datos a la interfaz.",
    stack: ["React", "Django", "PostgreSQL"],
    image: quiniela,
    href: "https://parallel-justinn-juanyale-930ef30a.koyeb.app/login",
  },
];

function Row({ project, index }) {
  const isInternal = Boolean(project.to);
  const linkProps = isInternal
    ? { component: Link, to: project.to }
    : { component: "a", href: project.href, target: "_blank", rel: "noopener noreferrer" };

  return (
    <Box
      {...reveal(index)}
      {...linkProps}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1.1fr" },
        gap: { xs: 3, md: 6 },
        alignItems: "center",
        py: { xs: 5, md: 7 },
        borderTop: `1px solid ${color.line}`,
        textDecoration: "none",
        "&:hover .p-title": { color: color.accent },
        "&:hover .p-arrow": { transform: "translate(3px, -3px)", opacity: 1 },
        "&:hover .p-img": { transform: "scale(1.02)" },
      }}
    >
      <Box sx={{ order: { xs: 2, md: 1 } }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "baseline", mb: 2 }}>
          <Typography variant="overline" component="span" sx={{ color: color.accent }}>
            {project.kicker}
          </Typography>
          <Typography
            component="span"
            sx={{ fontFamily: font.mono, fontSize: size.label, color: color.inkMuted }}
          >
            {project.year}
          </Typography>
        </Box>

        <Typography
          component="h2"
          className="p-title"
          sx={{
            fontFamily: font.display,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            fontSize: size.h2,
            lineHeight: 1.1,
            color: color.ink,
            transition: `color .25s ${easing}`,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {project.title}
          <ArrowOutward
            className="p-arrow"
            sx={{
              fontSize: "0.7em",
              color: color.accent,
              opacity: 0.35,
              transition: `transform .25s ${easing}, opacity .25s ${easing}`,
            }}
          />
        </Typography>

        <Typography sx={{ mt: 2, color: color.inkMuted, fontSize: size.body, maxWidth: "54ch" }}>
          {project.summary}
        </Typography>

        <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 1 }}>
          {project.stack.map((tech) => (
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

      <Box sx={{ order: { xs: 1, md: 2 }, overflow: "hidden", border: `1px solid ${color.line}` }}>
        <Box
          component="img"
          className="p-img"
          src={project.image}
          alt={`Captura del proyecto ${project.title}`}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          sx={{
            display: "block",
            width: "100%",
            aspectRatio: "16 / 10",
            objectFit: "cover",
            objectPosition: "top",
            transition: `transform .5s ${easing}`,
          }}
        />
      </Box>
    </Box>
  );
}

export default function Projects() {
  return (
    <Box component="main" sx={{ pt: { xs: 13, md: 18 }, pb: { xs: 8, md: 14 } }}>
      <Helmet>
        <title>Trabajo | Alejandra Sánchez</title>
        <meta
          name="description"
          content="Proyectos de Alejandra Sánchez: el e-commerce de Lucio J&M (telas desde 1872), La Velada del Año V con midudev, eTrivium y una app de pronósticos con React y Django."
        />
        <link rel="canonical" href="https://www.alejandrasanchezdev.es/projects" />
      </Helmet>

      <Container>
        <div {...reveal(0)}>
          <Typography variant="overline" component="p" sx={{ color: color.inkMuted, mb: 3 }}>
            Trabajo
          </Typography>
        </div>
        <div {...reveal(1)}>
          <Typography variant="h1" component="h1" sx={{ color: color.ink, maxWidth: "15ch" }}>
            Cuatro cosas que he construido.
          </Typography>
        </div>

        <Box sx={{ mt: { xs: 6, md: 9 } }}>
          {projects.map((project, i) => (
            <Row key={project.title} project={project} index={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
