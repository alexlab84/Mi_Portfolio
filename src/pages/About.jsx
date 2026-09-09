import { Helmet } from "react-helmet-async";
import { Box, Container, Typography } from "@mui/material";
import { color, font, size } from "../tokens";
import retrato from "../assets/alejandra-blanco.webp";

const reveal = (i = 0) => ({ className: "reveal", style: { "--delay": `${i * 70}ms` } });

const stack = {
  "Con lo que trabajo a diario": ["WordPress", "WooCommerce", "Elementor", "PHP", "JavaScript", "CSS"],
  "Con lo que he construido producto": ["React", "Astro", "TypeScript", "Next.js", "Tailwind"],
  "Lo que mido": ["Search Console", "Analytics", "Merchant Center", "PageSpeed", "SEO"],
  "Con lo que me ayudo": ["Claude Code", "MCP", "APIs REST"],
  "Lo demás": ["Python", "Django", "PostgreSQL", "Git", "Docker"],
};

export default function About() {
  return (
    <Box component="main" sx={{ pt: { xs: 13, md: 18 }, pb: { xs: 8, md: 14 } }}>
      <Helmet>
        <title>Sobre mí | Alejandra Sánchez</title>
        <meta
          name="description"
          content="Alejandra Sánchez: dieciocho años como técnica de laboratorio hospitalario y, desde 2023, desarrollo frontend. Me gusta hacerme cargo del asunto entero."
        />
        <link rel="canonical" href="https://www.alejandrasanchezdev.es/about" />
      </Helmet>

      <Container>
        <div {...reveal(0)}>
          <Typography variant="overline" component="p" sx={{ color: color.inkMuted, mb: 3 }}>
            Sobre mí
          </Typography>
        </div>
        <div {...reveal(1)}>
          <Typography variant="h1" component="h1" sx={{ color: color.ink, maxWidth: "16ch" }}>
            Me gusta enterarme de cómo funciona todo.
          </Typography>
        </div>

        <Box
          sx={{
            mt: { xs: 6, md: 10 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.35fr 1fr" },
            gap: { xs: 5, md: 8 },
            alignItems: "start",
          }}
        >
          {/* ── Texto ── */}
          <Box {...reveal(2)}>
            {/* Párrafo de entrada, en serif y algo mayor: marca el tono. */}
            <Typography
              sx={{
                fontFamily: font.display,
                fontWeight: 500,
                letterSpacing: "-0.015em",
                fontSize: size.h3,
                lineHeight: 1.4,
                color: color.ink,
                mb: 4,
              }}
            >
              Durante dieciocho años fui técnica de laboratorio en un hospital. Manejaba los
              aparatos, hacía extracciones de sangre y daba de alta a pacientes en el sistema.
            </Typography>

            <Typography sx={{ color: color.inkMuted, fontSize: size.body, mb: 3, maxWidth: "62ch" }}>
              Eran tres oficios distintos dentro del mismo puesto, y ésa fue siempre la parte que más
              me gustaba. Lo que se me da bien no es una tecnología concreta: es agarrar un asunto
              entero y no soltarlo hasta saber de qué va.
            </Typography>

            <Typography sx={{ color: color.inkMuted, fontSize: size.body, mb: 3, maxWidth: "62ch" }}>
              En Lucio J&amp;M entré para llevar la web. Acabé llevando también el catálogo, el SEO,
              la analítica y el rendimiento. No porque me lo pidieran, sino porque no sé hacerlo de
              otra manera: si algo forma parte de que la tienda venda, quiero saber cómo está montado.
            </Typography>

            <Typography sx={{ color: color.inkMuted, fontSize: size.body, maxWidth: "62ch" }}>
              Empecé a programar por mi cuenta en 2023 y en 2024 hice un bootcamp. Vengo de un sitio
              donde un decimal mal leído tiene consecuencias, así que reviso las cosas dos veces.
            </Typography>
          </Box>

          {/* ── Retrato ── */}
          <Box
            {...reveal(3)}
            component="img"
            src={retrato}
            alt="Retrato de Alejandra Sánchez"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            sx={{
              display: "block",
              width: "100%",
              aspectRatio: { xs: "4 / 3", md: "3 / 4" },
              objectFit: "cover",
              objectPosition: "center 35%",
              backgroundColor: color.surface,
              border: `1px solid ${color.line}`,
            }}
          />
        </Box>

        {/* ── Cómo trabajo ──
            Lo concreto es lo que hace creíble esta sección.
            "Uso IA" no dice nada; "MCP contra el CMS" sí. */}
        <Box component="section" sx={{ mt: { xs: 9, md: 14 } }}>
          <div {...reveal(0)}>
            <Typography variant="overline" component="h2" sx={{ color: color.inkMuted, mb: 3 }}>
              Cómo trabajo
            </Typography>
          </div>

          <div {...reveal(1)}>
            <Typography
              sx={{
                fontFamily: font.display,
                fontWeight: 500,
                letterSpacing: "-0.015em",
                fontSize: size.h3,
                lineHeight: 1.4,
                color: color.ink,
                maxWidth: "40ch",
                mb: 5,
              }}
            >
              Trabajo con Claude todos los días. No copiando respuestas: dándole acceso a las cosas.
            </Typography>
          </div>

          {[
            {
              term: "Conectado al CMS",
              body: "Tengo Claude enchufado a WordPress por MCP. Crea y actualiza contenido, sube media, audita SEO, genera y valida schema, mide rendimiento y gestiona la caché directamente sobre el sitio. No le pido texto para pegar a mano: trabaja contra la tienda.",
            },
            {
              term: "Llamadas a APIs",
              body: "Integraciones entre el CMS y servicios externos, y snippets propios cuando lo que hace falta no existe como plugin.",
            },
            {
              term: "Saber pedir",
              body: "La mitad del oficio ahora es dar buenas instrucciones: acotar la tarea, dar el contexto justo y decir también qué no hacer. Es una habilidad, y la estoy afilando.",
            },
            {
              term: "Que se acuerde",
              body: "Lo que repito queda guardado para no volver a explicarlo cada vez. Con el tiempo se convierte en una forma de trabajar, no en una conversación suelta.",
            },
          ].map((item, i) => (
            <Box
              key={item.term}
              {...reveal(i + 2)}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "280px 1fr" },
                gap: { xs: 1, md: 5 },
                py: { xs: 3, md: 3.5 },
                borderTop: `1px solid ${color.line}`,
              }}
            >
              <Typography sx={{ color: color.ink, fontSize: size.body, fontWeight: 500 }}>
                {item.term}
              </Typography>
              <Typography sx={{ color: color.inkMuted, fontSize: size.body, maxWidth: "62ch" }}>
                {item.body}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* ── Herramientas, agrupadas por para qué sirven ── */}
        <Box component="section" sx={{ mt: { xs: 9, md: 14 } }}>
          <div {...reveal(0)}>
            <Typography variant="overline" component="h2" sx={{ color: color.inkMuted, mb: 1 }}>
              Herramientas
            </Typography>
          </div>

          {Object.entries(stack).map(([group, items], i) => (
            <Box
              key={group}
              {...reveal(i + 1)}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "280px 1fr" },
                gap: { xs: 1.5, md: 5 },
                py: { xs: 3, md: 3.5 },
                borderTop: `1px solid ${color.line}`,
                alignItems: "baseline",
              }}
            >
              <Typography sx={{ color: color.ink, fontSize: size.body }}>{group}</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {items.map((tech) => (
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
          ))}
        </Box>
      </Container>
    </Box>
  );
}
