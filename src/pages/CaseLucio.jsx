import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { color, font, size } from "../tokens";
import cover from "../assets/luciojm.webp";

const reveal = (i = 0) => ({ className: "reveal", style: { "--delay": `${i * 70}ms` } });

const meta = [
  ["Cliente", "Lucio J&M — telas desde 1872. Madrid."],
  ["Puesto", "Responsable de e-commerce. Media jornada, mañanas."],
  ["Desde", "9 de diciembre de 2025"],
  ["Stack", "WordPress · WooCommerce · Elementor · PHP · JavaScript · CSS"],
  ["Herramientas", "Claude Code vía MCP · APIs REST · Search Console · Analytics"],
];

const before = [
  "La tienda online no vendía.",
  "No había una sola página indexada en Google.",
  "El catálogo estaba sin montar.",
];

const figures = [
  { n: "1.400", label: "páginas indexadas", foot: "Partiendo de cero." },
  { n: "272.000", label: "impresiones", foot: "En búsqueda, últimos 16 meses." },
  { n: "1.109", label: "fichas de producto", foot: "Montadas una a una, en 41 categorías." },
];

const psi = [
  { n: "100", label: "SEO" },
  { n: "100", label: "Accesibilidad" },
  { n: "100", label: "Prácticas recomendadas" },
  { n: "0,002", label: "CLS" },
];

/**
 * Impresiones de búsqueda, may 2025 – sep 2026 (Search Console).
 * Los siete primeros meses son anteriores a mi entrada: sirven de línea base.
 */
const curve = [3, 3, 2, 2, 2, 2, 2, 2, 4, 8, 18, 38, 45, 55, 72, 88, 95];
const START_INDEX = 7; // diciembre de 2025

function Curva() {
  const W = 800, H = 200, PAD_X = 40, TOP = 24, BOTTOM = 172;
  const step = (W - PAD_X * 2) / (curve.length - 1);
  const pt = (v, i) => [
    +(PAD_X + i * step).toFixed(1),
    +(BOTTOM - (v / 100) * (BOTTOM - TOP)).toFixed(1),
  ];
  const points = curve.map(pt);
  const line = points.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `M${points[0][0]},${BOTTOM} L${line.replace(/ /g, " L")} L${points.at(-1)[0]},${BOTTOM} Z`;
  const markX = points[START_INDEX][0];

  return (
    <Box sx={{ mt: 5, overflowX: "auto" }}>
      <Box
        component="svg"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Impresiones de búsqueda de mayo de 2025 a septiembre de 2026: siete meses planos y casi a cero antes de diciembre de 2025, y una subida sostenida a partir de febrero de 2026 hasta multiplicarse por más de veinte."
        sx={{ display: "block", width: "100%", minWidth: 560, height: "auto" }}
      >
        <line x1={PAD_X} y1={BOTTOM} x2={W - PAD_X} y2={BOTTOM} stroke={color.line} strokeWidth="1" />
        <path d={area} fill={color.accentWash} />
        <polyline points={line} fill="none" stroke={color.accent} strokeWidth="2.5"
          strokeLinejoin="round" strokeLinecap="round" />
        {/* Marca de entrada */}
        <line x1={markX} y1={TOP - 6} x2={markX} y2={BOTTOM} stroke={color.ink}
          strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />
        <circle cx={markX} cy={points[START_INDEX][1]} r="4" fill={color.ink} />
        <text x={markX + 10} y={TOP + 6} fill={color.ink} fontSize="13"
          fontFamily={font.mono} letterSpacing="0.06em">
          Entro aquí — dic 2025
        </text>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1.5, px: 1, minWidth: 560 }}>
        {["may 2025", "dic 2025", "sep 2026"].map((t) => (
          <Typography key={t} sx={{ fontFamily: font.mono, fontSize: size.label, color: color.inkMuted }}>
            {t}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

const work = [
  {
    area: "Catálogo",
    body: "Monté las 1.109 fichas de producto y sus 41 categorías. Vender tela no funciona como vender una unidad: el corte es a medida, así que el producto tiene que entender de longitudes y no de cantidades. La ficha resuelve las tres fricciones de comprar tela sin verla: cuántos metros necesitas, no poder tocarla, y que un corte a medida no tiene vuelta atrás.",
  },
  {
    area: "Visibilidad",
    body: "SEO técnico sobre un catálogo con navegación facetada, que es donde se atasca casi todo e-commerce grande: los filtros generan miles de URLs casi idénticas que se comen el presupuesto de rastreo. Dejé los filtros rastreables pero con noindex —para que Google pueda leer la etiqueta y desindexarlos de verdad, en lugar de bloquearlos en robots.txt y que se queden dentro— y fuera del índice los parámetros de atributos y de carrito. Más Search Console y Google Merchant Center. Hoy hay 1.400 páginas dentro del índice y 5.343 URLs de filtros deliberadamente fuera.",
  },
  {
    area: "Contenido",
    body: "Un blog con intención de compra, no de relleno: comparativas del tipo «lino o algodón», «terciopelo o chenilla», «lino natural frente a antimanchas según tu presupuesto». Y una guía para medir cuántos metros necesitas para unas cortinas, que lleva justo a la ficha donde puedes comprar esos metros exactos.",
  },
  {
    area: "Diseño",
    body: "Toda la capa visual que se ve hoy: estilos, plantillas y maquetación.",
  },
  {
    area: "Rendimiento y medición",
    body: "PageSpeed, Analytics y revisión de plugins. Los informes de laboratorio varían entre ejecuciones, así que mido tres veces antes de dar un número por bueno. Deformación profesional de dieciocho años de laboratorio.",
  },
  {
    area: "Herramientas propias",
    body: "Trabajo con Claude conectado al WordPress de la tienda por MCP: contenido, auditorías de SEO, schema, rendimiento y caché contra el sitio real, más integraciones por API. Las tareas que repito quedan guardadas, así que cada semana cuesta menos que la anterior.",
  },
];

export default function CaseLucio() {
  return (
    <Box component="main" sx={{ pt: { xs: 13, md: 18 }, pb: { xs: 8, md: 14 } }}>
      <Helmet>
        <title>Lucio J&M — Caso | Alejandra Sánchez</title>
        <meta
          name="description"
          content="De 0 páginas indexadas a 1.400: cómo llevé el e-commerce de Lucio J&M, tienda de telas de Madrid abierta en 1872. Catálogo, venta por metros sobre WooCommerce, SEO técnico y rendimiento."
        />
        <link rel="canonical" href="https://www.alejandrasanchezdev.es/projects/lucio-jm" />
      </Helmet>

      <Container>
        <div {...reveal(0)}>
          <Typography variant="overline" component="p" sx={{ color: color.inkMuted, mb: 3 }}>
            Caso · E-commerce
          </Typography>
        </div>

        <div {...reveal(1)}>
          <Typography variant="h1" component="h1" sx={{ color: color.ink, maxWidth: "15ch" }}>
            De 0 páginas indexadas a{" "}
            <Box component="span" sx={{ color: color.accent }}>1.400</Box>.
          </Typography>
        </div>

        <div {...reveal(2)}>
          <Typography
            sx={{ mt: 4, maxWidth: "58ch", fontSize: size.lead, lineHeight: 1.55, color: color.inkMuted }}
          >
            Lucio J&amp;M lleva 154 años vendiendo telas al lado de la Plaza Mayor. Es la tienda de
            telas más antigua de España. Cuando entré, su web existía pero Google no la conocía.
          </Typography>
        </div>
      </Container>

      <Box {...reveal(3)} sx={{ mt: { xs: 6, md: 9 }, mb: { xs: 6, md: 10 }, px: { xs: 0, md: 3 } }}>
        <Box
          component="img"
          src={cover}
          alt="Portada de la tienda online de Lucio J&M, con el lema «Telas auténticas, calidad y tradición desde 1872»"
          width={1016}
          height={697}
          sx={{
            display: "block", width: "100%", height: { xs: 240, md: 460 },
            objectFit: "cover", objectPosition: "top", border: `1px solid ${color.line}`,
          }}
        />
      </Box>

      <Container>
        {/* ── Ficha ── */}
        <Box component="dl" {...reveal(4)} sx={{ m: 0, borderTop: `1px solid ${color.line}` }}>
          {meta.map(([term, value]) => (
            <Box key={term} sx={{
              display: "grid", gridTemplateColumns: { xs: "1fr", sm: "170px 1fr" },
              gap: { xs: 0.5, sm: 3 }, py: 2.5, borderBottom: `1px solid ${color.line}`,
            }}>
              <Typography component="dt" variant="overline" sx={{ color: color.inkMuted, pt: 0.5 }}>
                {term}
              </Typography>
              <Typography component="dd" sx={{ m: 0, color: color.ink, fontSize: size.body }}>
                {value}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* ── Cuando llegué ── */}
        <Box component="section" sx={{ mt: { xs: 8, md: 12 } }}>
          <div {...reveal(0)}>
            <Typography variant="overline" component="h2" sx={{ color: color.inkMuted, mb: 4 }}>
              Cuando llegué
            </Typography>
          </div>
          {before.map((line, i) => (
            <Box key={line} {...reveal(i + 1)} sx={{
              py: { xs: 2.5, md: 3 }, borderBottom: `1px solid ${color.line}`,
              display: "flex", gap: { xs: 2, md: 4 }, alignItems: "baseline",
            }}>
              <Typography component="span" sx={{
                fontFamily: font.mono, fontSize: size.label, color: color.accent, flexShrink: 0,
              }}>
                0{i + 1}
              </Typography>
              <Typography sx={{
                fontFamily: font.display, fontWeight: 600, letterSpacing: "-0.02em",
                fontSize: size.h3, lineHeight: 1.3, color: color.ink,
              }}>
                {line}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* ── Los números ── */}
        <Box component="section" sx={{ mt: { xs: 8, md: 12 } }}>
          <div {...reveal(0)}>
            <Typography variant="overline" component="h2" sx={{ color: color.inkMuted, mb: 1 }}>
              Nueve meses después
            </Typography>
          </div>

          <Box sx={{
            display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            borderTop: `1px solid ${color.line}`, mt: 3,
          }}>
            {figures.map((f, i) => (
              <Box key={f.label} {...reveal(i + 1)} sx={{
                py: { xs: 4, md: 5 }, pr: { sm: 3 },
                borderBottom: { xs: `1px solid ${color.line}`, sm: "none" },
              }}>
                <Typography component="p" sx={{
                  fontFamily: font.display, fontWeight: 800,
                  fontVariantNumeric: "lining-nums tabular-nums",
                  fontSize: "clamp(2.5rem, 1.4rem + 3.6vw, 3.75rem)",
                  lineHeight: 1, letterSpacing: "-0.04em", color: color.ink,
                }}>
                  {f.n}
                </Typography>
                <Typography sx={{
                  mt: 1.5, fontFamily: font.mono, fontSize: size.label,
                  letterSpacing: "0.1em", textTransform: "uppercase", color: color.accent,
                }}>
                  {f.label}
                </Typography>
                <Typography sx={{ mt: 1, maxWidth: "26ch", fontSize: size.small, color: color.inkMuted }}>
                  {f.foot}
                </Typography>
              </Box>
            ))}
          </Box>

          <div {...reveal(4)}>
            <Curva />
            <Typography sx={{ mt: 3, maxWidth: "58ch", fontSize: size.small, color: color.inkMuted }}>
              Los siete primeros meses del gráfico son anteriores a mi entrada. Sirven de línea base:
              la curva no se mueve. Empieza a levantar unos dos meses después de empezar yo, que es
              lo que tarda Google en asimilar un cambio técnico.
            </Typography>
          </div>
        </Box>

        {/* ── La calculadora: la pieza técnica del proyecto ── */}
        <Box component="section" {...reveal(1)} sx={{
          mt: { xs: 8, md: 12 }, py: { xs: 5, md: 7 }, px: { xs: 3.5, md: 6 },
          backgroundColor: color.inkBlock, color: color.onInk,
        }}>
          <Typography variant="overline" component="h2" sx={{ color: color.onInkMuted, mb: 3 }}>
            El problema que más me gustó
          </Typography>
          <Typography sx={{
            fontFamily: font.display, fontWeight: 700, letterSpacing: "-0.03em",
            fontSize: size.h2, lineHeight: 1.08, maxWidth: "22ch",
          }}>
            WooCommerce no sabe vender 0,7 metros.
          </Typography>
          <Typography sx={{ mt: 3, maxWidth: "62ch", color: color.onInkMuted, fontSize: size.body }}>
            El campo de cantidad es un entero por diseño: una unidad, dos, tres. Pero la tela se
            corta a medida, con un mínimo de medio metro y en incrementos de diez centímetros.
          </Typography>
          <Typography sx={{ mt: 2.5, maxWidth: "62ch", color: color.onInkMuted, fontSize: size.body }}>
            Así que hice que los aceptara: el campo con su mínimo y su paso, la validación de stock
            —que redondeaba a entero y convertía 0,7 en cero, agotando el producto sola—, el precio
            por metro multiplicado por la fracción y arrastrado hasta el pedido, el inventario en
            decimales y el redondeo, porque sumar de 0,1 en 0,1 en coma flotante da los disgustos de
            siempre.
          </Typography>
          <Typography sx={{ mt: 2.5, maxWidth: "62ch", color: color.onInk, fontSize: size.body }}>
            En resumen: una plataforma que solo entiende unidades enteras vendiendo materia continua.
          </Typography>
        </Box>

        {/* ── El trabajo ── */}
        <Box component="section" sx={{ mt: { xs: 8, md: 12 } }}>
          <div {...reveal(0)}>
            <Typography variant="overline" component="h2" sx={{ color: color.inkMuted, mb: 1 }}>
              Lo que he hecho
            </Typography>
          </div>
          {work.map((item, i) => (
            <Box key={item.area} {...reveal(i + 1)} sx={{
              display: "grid", gridTemplateColumns: { xs: "1fr", md: "260px 1fr" },
              gap: { xs: 1.5, md: 5 }, py: { xs: 3.5, md: 4.5 },
              borderTop: `1px solid ${color.line}`,
            }}>
              <Typography component="h3" sx={{
                fontFamily: font.display, fontWeight: 700, letterSpacing: "-0.02em",
                fontSize: size.h3, color: color.ink, lineHeight: 1.2,
              }}>
                {item.area}
              </Typography>
              <Typography sx={{ color: color.inkMuted, fontSize: size.body, maxWidth: "64ch" }}>
                {item.body}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* ── PageSpeed ── */}
        <Box component="section" sx={{ mt: { xs: 8, md: 12 } }}>
          <div {...reveal(0)}>
            <Typography variant="overline" component="h2" sx={{ color: color.inkMuted, mb: 1 }}>
              PageSpeed, móvil
            </Typography>
          </div>
          <Box sx={{
            display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            borderTop: `1px solid ${color.line}`, mt: 3,
          }}>
            {psi.map((s, i) => (
              <Box key={s.label} {...reveal(i + 1)} sx={{ py: { xs: 3.5, md: 4.5 }, pr: 2 }}>
                <Typography component="p" sx={{
                  fontFamily: font.display, fontWeight: 800,
                  fontVariantNumeric: "lining-nums tabular-nums",
                  fontSize: "clamp(2rem, 1.4rem + 2vw, 2.75rem)",
                  lineHeight: 1, letterSpacing: "-0.03em", color: color.ink,
                }}>
                  {s.n}
                </Typography>
                <Typography sx={{
                  mt: 1.2, fontFamily: font.mono, fontSize: size.label,
                  letterSpacing: "0.08em", textTransform: "uppercase", color: color.inkMuted,
                }}>
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>
          <Typography sx={{ mt: 2, maxWidth: "60ch", fontSize: size.small, color: color.inkMuted }}>
            Rendimiento, 74. Es el que queda por subir y sé dónde está: imágenes y dependencias de
            terceros, no JavaScript bloqueando.
          </Typography>
        </Box>

        {/* ── Cierre ── */}
        <Box {...reveal(1)} sx={{
          mt: { xs: 8, md: 12 }, py: { xs: 5, md: 7 }, px: { xs: 3.5, md: 6 },
          border: `1px solid ${color.line}`,
        }}>
          <Typography sx={{
            fontFamily: font.display, fontWeight: 700, letterSpacing: "-0.03em",
            fontSize: size.h2, lineHeight: 1.08, maxWidth: "20ch", color: color.ink,
          }}>
            Nueve meses. Media jornada.
          </Typography>
          <Typography sx={{ mt: 3, maxWidth: "56ch", color: color.inkMuted, fontSize: size.body }}>
            No es una tienda que rehiciera de cero: es una que llevaba 154 años funcionando y a la
            que había que ponerle la parte de internet. Sigo en ello cada mañana.
          </Typography>
          <Stack direction="row" spacing={1.5} sx={{ mt: 4, flexWrap: "wrap", gap: 1.5 }}>
            <Button href="https://www.luciojm.es" target="_blank" rel="noopener noreferrer"
              variant="contained" color="primary">
              Ver la tienda
            </Button>
            <Button component={Link} to="/projects" variant="outlined" color="primary">
              Resto del trabajo
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
