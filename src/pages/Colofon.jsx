import { Helmet } from "react-helmet-async";
import { Box, Container, Typography } from "@mui/material";
import { color, font, size } from "../tokens";

const reveal = (i = 0) => ({ className: "reveal", style: { "--delay": `${i * 60}ms` } });

const sections = [
  {
    title: "Tipografía",
    items: [
      "Archivo para los titulares, Inter para el texto y JetBrains Mono para fechas, datos y etiquetas. Tres funciones, tres letras.",
      "La escala es fluida: el tamaño interpola con el ancho de la ventana en vez de saltar en los puntos de ruptura. No hay un móvil y un escritorio, hay un continuo.",
      "Los párrafos no pasan de unos 62 caracteres por línea, que es donde el ojo empieza a perder el renglón al volver a la izquierda.",
    ],
  },
  {
    title: "Movimiento",
    items: [
      "El contenido es visible por defecto. La animación de entrada solo se aplica si el navegador declara que el movimiento es bienvenido.",
      "No es solo accesibilidad: si la animación no llega a ejecutarse, el texto sigue estando ahí. Lo aprendí rompiéndolo — la primera versión de esta página se quedaba en blanco.",
    ],
  },
  {
    title: "Rendimiento",
    items: [
      "Unos 136 kB comprimidos en la primera carga.",
      "Una ruta, un fragmento: solo se descarga la página que se visita.",
      "Imágenes en WebP y guardadas al tamaño en que se pintan, no al que salieron de la cámara.",
      "Ninguna librería de animación. Lo hace el CSS.",
    ],
  },
  {
    title: "Interfaz",
    items: [
      "HTML con significado: la ficha de la portada es una lista de definiciones, la trayectoria una lista ordenada, y el gráfico del caso de Lucio lleva su descripción escrita para quien no lo ve.",
      "El foco del teclado es visible en toda la web. Se puede recorrer entera sin ratón.",
      "La navegación marca la página actual, y al cambiar de página el scroll vuelve arriba en lugar de dejarte a media altura.",
    ],
  },
];

const contrasts = [
  ["Texto principal", "18,5:1"],
  ["Texto secundario", "5,4:1"],
  ["Acento sobre papel", "4,96:1"],
  ["Texto sobre bloque oscuro", "16,5:1"],
  ["Bordes de botón", "3,2:1"],
];

const missing = [
  "No hay tests. Es lo primero que le falta.",
  "No hay modo oscuro.",
  "136 kB siguen siendo muchos para seis páginas que son casi todo texto. Es el precio de la librería de componentes, y se puede bajar.",
];

export default function Colofon() {
  return (
    <Box component="main" sx={{ pt: { xs: 13, md: 18 }, pb: { xs: 8, md: 14 } }}>
      <Helmet>
        <title>Cómo está hecha esta web | Alejandra Sánchez</title>
        <meta
          name="description"
          content="Las decisiones detrás de este portfolio: tipografía fluida, contrastes medidos, movimiento opcional, rendimiento y accesibilidad. Y lo que le falta."
        />
        <link rel="canonical" href="https://www.alejandrasanchezdev.es/colofon" />
      </Helmet>

      <Container>
        <div {...reveal(0)}>
          <Typography variant="overline" component="p" sx={{ color: color.inkMuted, mb: 3 }}>
            Colofón
          </Typography>
        </div>
        <div {...reveal(1)}>
          <Typography variant="h1" component="h1" sx={{ color: color.ink, maxWidth: "15ch" }}>
            Cómo está hecha esta web.
          </Typography>
        </div>
        <div {...reveal(2)}>
          <Typography
            sx={{ mt: 4, maxWidth: "56ch", fontSize: size.lead, lineHeight: 1.55, color: color.inkMuted }}
          >
            Un portfolio que habla de criterio debería poder enseñarlo. Esto es lo que hay debajo de
            esta página, incluido lo que todavía no está bien.
          </Typography>
        </div>

        {/* ── Color y contraste ── */}
        <Box component="section" sx={{ mt: { xs: 8, md: 12 } }}>
          <div {...reveal(0)}>
            <Typography variant="overline" component="h2" sx={{ color: color.inkMuted, mb: 1 }}>
              Color
            </Typography>
          </div>
          <Box sx={{
            display: "grid", gridTemplateColumns: { xs: "1fr", md: "260px 1fr" },
            gap: { xs: 2, md: 5 }, py: { xs: 3.5, md: 4.5 }, borderTop: `1px solid ${color.line}`,
          }}>
            <Typography component="h3" sx={{
              fontFamily: font.display, fontWeight: 700, letterSpacing: "-0.02em",
              fontSize: size.h3, color: color.ink, lineHeight: 1.2,
            }}>
              Un solo acento
            </Typography>
            <Box>
              <Typography sx={{ color: color.inkMuted, fontSize: size.body, maxWidth: "62ch", mb: 3 }}>
                Todo el color de la web sale de un único archivo. Cambiar este naranja por otro es
                cambiar una línea. Los contrastes están <Box component="em" sx={{ fontStyle: "normal", color: color.ink }}>medidos</Box>,
                no estimados a ojo: la norma AA pide 4,5:1 para texto y 3:1 para el borde de un control.
              </Typography>
              <Box component="dl" sx={{ m: 0, borderTop: `1px solid ${color.line}`, maxWidth: "440px" }}>
                {contrasts.map(([label, value]) => (
                  <Box key={label} sx={{
                    display: "flex", justifyContent: "space-between", gap: 2,
                    py: 1.4, borderBottom: `1px solid ${color.line}`,
                  }}>
                    <Typography component="dt" sx={{ fontSize: size.small, color: color.inkMuted }}>
                      {label}
                    </Typography>
                    <Typography component="dd" sx={{
                      m: 0, fontFamily: font.mono, fontSize: size.small, color: color.ink,
                    }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ── Resto de secciones ── */}
        {sections.map((section) => (
          <Box component="section" key={section.title} sx={{ mt: { xs: 6, md: 9 } }}>
            <div {...reveal(0)}>
              <Typography variant="overline" component="h2" sx={{ color: color.inkMuted, mb: 1 }}>
                {section.title}
              </Typography>
            </div>
            {section.items.map((item, i) => (
              <Box key={i} {...reveal(i + 1)} sx={{
                display: "grid", gridTemplateColumns: { xs: "1fr", md: "48px 1fr" },
                gap: { xs: 1, md: 4 }, py: { xs: 2.5, md: 3 },
                borderTop: `1px solid ${color.line}`,
              }}>
                <Typography component="span" sx={{
                  fontFamily: font.mono, fontSize: size.label, color: color.accent, pt: 0.5,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </Typography>
                <Typography sx={{ color: color.inkMuted, fontSize: size.body, maxWidth: "64ch" }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}

        {/* ── Lo que falta ── */}
        <Box component="section" {...reveal(1)} sx={{
          mt: { xs: 8, md: 12 }, py: { xs: 5, md: 7 }, px: { xs: 3.5, md: 6 },
          backgroundColor: color.inkBlock, color: color.onInk,
        }}>
          <Typography variant="overline" component="h2" sx={{ color: color.onInkMuted, mb: 3 }}>
            Lo que le falta
          </Typography>
          <Typography sx={{
            fontFamily: font.display, fontWeight: 700, letterSpacing: "-0.03em",
            fontSize: size.h2, lineHeight: 1.08, maxWidth: "20ch", mb: 4,
          }}>
            Nada de esto está terminado.
          </Typography>
          <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
            {missing.map((item) => (
              <Box component="li" key={item} sx={{
                py: 2, borderTop: "1px solid rgba(245,242,238,.16)",
                color: color.onInkMuted, fontSize: size.body, maxWidth: "58ch",
              }}>
                {item}
              </Box>
            ))}
          </Box>
        </Box>

        <div {...reveal(2)}>
          <Typography sx={{ mt: 5, fontSize: size.small, color: color.inkMuted }}>
            React · Vite · MUI · Escrita con Claude Code, en el editor.
          </Typography>
        </div>
      </Container>
    </Box>
  );
}
