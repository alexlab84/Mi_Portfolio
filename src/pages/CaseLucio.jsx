import { useHead } from "../useHead";
import { Link } from "react-router-dom";
import { reveal } from "../reveal";
import cover from "../assets/luciojm.webp";

const ficha = [
  ["Cliente", "Lucio J&M — telas desde 1872. Madrid."],
  ["Puesto", "Responsable de e-commerce. Media jornada, mañanas."],
  ["Desde", "9 de diciembre de 2025"],
  ["Stack", "WordPress · WooCommerce · Elementor · PHP · JavaScript · CSS"],
  ["Herramientas", "Claude Code vía MCP · APIs REST · Search Console · Analytics"],
];

const antes = [
  "La tienda online no vendía.",
  "No había una sola página indexada en Google.",
  "El catálogo estaba sin montar.",
];

const cifras = [
  { n: "1.400", label: "páginas indexadas", cap: "Partiendo de cero." },
  { n: "272.000", label: "impresiones", cap: "En búsqueda, últimos 16 meses." },
  { n: "1.109", label: "fichas de producto", cap: "Montadas una a una, en 41 categorías." },
];

const psi = [
  { n: "100", label: "SEO" },
  { n: "100", label: "Accesibilidad" },
  { n: "100", label: "Prácticas recomendadas" },
  { n: "0,002", label: "CLS" },
];

const trabajo = [
  ["Catálogo", "Monté las 1.109 fichas de producto y sus 41 categorías. Vender tela no funciona como vender una unidad: el corte es a medida, así que el producto tiene que entender de longitudes y no de cantidades. La ficha resuelve las tres fricciones de comprar tela sin verla: cuántos metros necesitas, no poder tocarla, y que un corte a medida no tiene vuelta atrás."],
  ["Visibilidad", "SEO técnico sobre un catálogo con navegación facetada, que es donde se atasca casi todo e-commerce grande: los filtros generan miles de URLs casi idénticas que se comen el presupuesto de rastreo. Dejé los filtros rastreables pero con noindex —para que Google pueda leer la etiqueta y desindexarlos de verdad, en lugar de bloquearlos en robots.txt y que se queden dentro— y fuera del índice los parámetros de atributos y de carrito. Hoy hay 1.400 páginas dentro del índice y 5.343 URLs de filtros deliberadamente fuera."],
  ["Contenido", "Un blog con intención de compra, no de relleno: comparativas del tipo «lino o algodón», «terciopelo o chenilla», «lino natural frente a antimanchas según tu presupuesto». Y una guía para medir cuántos metros necesitas para unas cortinas, que lleva justo a la ficha donde puedes comprar esos metros exactos."],
  ["Diseño", "Toda la capa visual que se ve hoy: estilos, plantillas y maquetación."],
  ["Rendimiento y medición", "PageSpeed, Analytics y revisión de plugins. Los informes de laboratorio varían entre ejecuciones, así que mido tres veces antes de dar un número por bueno. Deformación profesional de dieciocho años de laboratorio."],
  ["Herramientas propias", "Trabajo con Claude conectado al WordPress de la tienda por MCP: contenido, auditorías de SEO, schema, rendimiento y caché contra el sitio real, más integraciones por API. Las tareas que repito quedan guardadas, así que cada semana cuesta menos que la anterior."],
];

/** Impresiones de búsqueda, may 2025 – sep 2026 (Search Console). */
const curva = [3, 3, 2, 2, 2, 2, 2, 2, 4, 8, 18, 38, 45, 55, 72, 88, 95];
const ENTRADA = 7; // diciembre de 2025

function Curva() {
  const W = 800, TOP = 24, BASE = 172, PAD = 40;
  const paso = (W - PAD * 2) / (curva.length - 1);
  const pts = curva.map((v, i) => [
    +(PAD + i * paso).toFixed(1),
    +(BASE - (v / 100) * (BASE - TOP)).toFixed(1),
  ]);
  const linea = pts.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `M${pts[0][0]},${BASE} L${linea.replaceAll(" ", " L")} L${pts.at(-1)[0]},${BASE} Z`;
  const mx = pts[ENTRADA][0];

  return (
    <div style={{ marginBlockStart: "2.5rem", overflowX: "auto" }}>
      <svg
        viewBox={`0 0 ${W} 200`}
        role="img"
        aria-label="Impresiones de búsqueda de mayo de 2025 a septiembre de 2026: siete meses planos y casi a cero antes de diciembre de 2025, y una subida sostenida a partir de febrero de 2026 hasta multiplicarse por más de veinte."
        style={{ width: "100%", minWidth: 560, height: "auto" }}
      >
        <line x1={PAD} y1={BASE} x2={W - PAD} y2={BASE} stroke="var(--line)" strokeWidth="1" />
        <path d={area} fill="var(--accent-wash)" />
        <polyline points={linea} fill="none" stroke="var(--accent)" strokeWidth="2.5"
          strokeLinejoin="round" strokeLinecap="round" />
        <line x1={mx} y1={TOP - 6} x2={mx} y2={BASE} stroke="var(--ink)" strokeWidth="1"
          strokeDasharray="3 4" opacity="0.5" />
        <circle cx={mx} cy={pts[ENTRADA][1]} r="4" fill="var(--ink)" />
        <text x={mx + 10} y={TOP + 6} fill="var(--ink)" fontSize="13"
          fontFamily="var(--font-mono)" letterSpacing="0.06em">
          Entro aquí — dic 2025
        </text>
      </svg>
      <div style={{ display: "flex", justifyContent: "space-between", minWidth: 560, marginBlockStart: "0.75rem" }}>
        {["may 2025", "dic 2025", "sep 2026"].map((t) => (
          <span className="mono muted" key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function CaseLucio() {
  useHead({
    title: "Lucio J&M — Caso | Alejandra Sánchez",
    description:
      "De 0 páginas indexadas a 1.400: cómo llevé el e-commerce de Lucio J&M, tienda de telas de Madrid abierta en 1872. Catálogo, venta por metros sobre WooCommerce, SEO técnico y rendimiento.",
    canonical: "https://www.alejandrasanchezdev.es/projects/lucio-jm",
  });

  return (
    <main className="page">

      <div className="container">
        <p {...reveal(0, "kicker")}>Caso · E-commerce</p>
        <h1 {...reveal(1, "display")} style={{ marginBlockStart: "0.7rem", maxWidth: "15ch" }}>
          De 0 páginas indexadas a <span className="accent">1.400</span>.
        </h1>
        <p {...reveal(2, "lead")} style={{ marginBlockStart: "1.75rem", maxWidth: "58ch" }}>
          Lucio J&amp;M lleva 154 años vendiendo telas al lado de la Plaza Mayor. Es la tienda de
          telas más antigua de España. Cuando entré, su web existía pero Google no la conocía.
        </p>
      </div>

      <div {...reveal(3)} style={{ marginBlock: "clamp(2rem,1.5rem+3vw,4rem)" }}>
        <img
          src={cover}
          width={1016}
          height={697}
          alt="Portada de la tienda online de Lucio J&M, con el lema «Telas auténticas, calidad y tradición desde 1872»"
          style={{
            width: "100%", height: "clamp(240px, 30vw, 460px)",
            objectFit: "cover", objectPosition: "top", borderBlock: "1px solid var(--line)",
          }}
        />
      </div>

      <div className="container">
        <dl {...reveal(0, "spec")}>
          {ficha.map(([t, v]) => (
            <div className="spec__row" key={t}>
              <dt className="kicker">{t}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>

        <section className="section">
          <h2 {...reveal(0, "kicker")}>Cuando llegué</h2>
          <div style={{ marginBlockStart: "1.75rem" }}>
            {antes.map((linea, i) => (
              <div
                key={linea}
                {...reveal(i + 1)}
                style={{
                  display: "flex", gap: "1.5rem", alignItems: "baseline",
                  paddingBlock: "1.1rem", borderBottom: "1px solid var(--line)",
                }}
              >
                <span className="mono accent">0{i + 1}</span>
                <p className="h3" style={{ lineHeight: 1.3 }}>{linea}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 {...reveal(0, "kicker")}>Nueve meses después</h2>
          <div className="figures" style={{ marginBlockStart: "1.25rem" }}>
            {cifras.map((c, i) => (
              <div key={c.n} {...reveal(i + 1, "figure")}>
                <p className="figure__n" style={{ fontSize: "clamp(2.5rem,1.4rem + 3.6vw,3.75rem)" }}>
                  {c.n}
                </p>
                <p className="figure__label">{c.label}</p>
                <p className="figure__cap">{c.cap}</p>
              </div>
            ))}
          </div>
          <div {...reveal(4)}>
            <Curva />
            <p className="small muted" style={{ marginBlockStart: "1.25rem", maxWidth: "58ch" }}>
              Los siete primeros meses del gráfico son anteriores a mi entrada. Sirven de línea base:
              la curva no se mueve. Empieza a levantar unos dos meses después de empezar yo, que es lo
              que tarda Google en asimilar un cambio técnico.
            </p>
          </div>
        </section>

        <section {...reveal(1, "block section")}>
          <h2 className="kicker">Lo que tuve que construir</h2>
          <p className="h2" style={{ marginBlockStart: "1.25rem", maxWidth: "24ch" }}>
            El carrito solo dejaba comprar de uno en uno.
          </p>
          <div className="stack-md muted" style={{ marginBlockStart: "1.25rem", maxWidth: "62ch" }}>
            <p>
              WooCommerce cuenta artículos: uno, dos, tres. Nosotros vendemos tela por metros y el
              corte es a medida, así que hacía falta otra cosa: un mínimo de medio metro y, de ahí
              para arriba, de diez en diez centímetros.
            </p>
            <p style={{ color: "var(--on-ink)" }}>
              Eso no venía hecho. Lo tuve que hacer yo para que cuadrara con cómo trabajamos: una
              calculadora en la ficha que te deja pedir los metros que necesitas y te va diciendo lo
              que cuesta antes de añadirlo al carrito.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 {...reveal(0, "kicker")}>Lo que he hecho</h2>
          <div className="rows" style={{ marginBlockStart: "0.5rem" }}>
            {trabajo.map(([area, texto], i) => (
              <div className="row" key={area} {...reveal(i + 1)}>
                <h3 className="h3">{area}</h3>
                <p className="row__body">{texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 {...reveal(0, "kicker")}>PageSpeed, móvil</h2>
          <div className="figures figures--four" style={{ marginBlockStart: "1.25rem" }}>
            {psi.map((s, i) => (
              <div key={s.label} {...reveal(i + 1, "figure figure--sm")}>
                <p className="figure__n">{s.n}</p>
                <p className="figure__label" style={{ color: "var(--ink-muted)" }}>{s.label}</p>
              </div>
            ))}
          </div>
          <p className="small muted" style={{ marginBlockStart: "1rem", maxWidth: "60ch" }}>
            Rendimiento, 74. Es el que queda por subir y sé dónde está: imágenes y dependencias de
            terceros, no JavaScript bloqueando.
          </p>
        </section>

        <section {...reveal(1, "section")} style={{ border: "1px solid var(--line)", padding: "clamp(1.75rem,1rem + 3vw,3.25rem) clamp(1.25rem,0.75rem + 2.5vw,3rem)" }}>
          <p className="h2" style={{ maxWidth: "20ch" }}>Nueve meses. Media jornada.</p>
          <p className="muted" style={{ marginBlockStart: "1.25rem", maxWidth: "56ch" }}>
            No es una tienda que rehiciera de cero: es una que llevaba 154 años funcionando y a la
            que había que ponerle la parte de internet. Sigo en ello cada mañana.
          </p>
          <div className="cluster" style={{ marginBlockStart: "1.75rem" }}>
            <a className="btn btn--solid" href="https://www.luciojm.es" target="_blank" rel="noopener noreferrer">
              Ver la tienda
            </a>
            <Link className="btn btn--outline" to="/projects">Resto del trabajo</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
