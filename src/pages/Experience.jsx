import { useHead } from "../useHead";
import { reveal } from "../reveal";

const PRS = "https://github.com/midudev/la-velada-web-oficial/pulls?q=is%3Apr+author%3Aalexlab84";

/**
 * El laboratorio va en la misma línea de tiempo, no aparte.
 * Dieciocho años de trabajo no son un prólogo.
 */
const puestos = [
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
    link: PRS,
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
  useHead({
    title: "Trayectoria | Alejandra Sánchez",
    description:
      "Trayectoria de Alejandra Sánchez: dieciocho años como técnica de laboratorio hospitalario y, desde 2023, desarrollo frontend en eTrivium, La Velada del Año V y Lucio J&M.",
    canonical: "https://www.alejandrasanchezdev.es/experience",
  });

  return (
    <main className="page">
      <div className="container">
        <p {...reveal(0, "kicker")}>Trayectoria</p>
        <h1 {...reveal(1, "display")} style={{ marginBlockStart: "0.7rem", maxWidth: "16ch" }}>
          Dos carreras, la misma cabeza.
        </h1>
        <p {...reveal(2, "lead")} style={{ marginBlockStart: "1.75rem", maxWidth: "54ch" }}>
          Empecé a programar por mi cuenta en 2023 y en 2024 hice un bootcamp. Antes de eso llevaba
          dieciocho años trabajando, que también cuentan.
        </p>

        <ol className="rows section--tight">
          {puestos.map((p, i) => (
            <li
              className="row row--wide"
              key={`${p.org}-${p.period}`}
              {...reveal(i)}
              style={p.past ? { opacity: 0.75 } : undefined}
            >
              <div>
                <p className="mono" style={{ color: "var(--ink)" }}>{p.period}</p>
                {p.note && (
                  <p className="mono accent" style={{ marginBlockStart: "0.4rem" }}>{p.note}</p>
                )}
              </div>
              <div>
                <h2 className="h3">{p.role}</h2>
                <p className="small muted" style={{ marginBlockStart: "0.2rem" }}>
                  {p.link ? (
                    <a className="link" href={p.link} target="_blank" rel="noopener noreferrer">
                      {p.org}
                    </a>
                  ) : (
                    p.org
                  )}
                </p>
                <p className="muted" style={{ marginBlockStart: "0.9rem", maxWidth: "60ch" }}>
                  {p.body}
                </p>
                <div className="tags" style={{ marginBlockStart: "1.1rem" }}>
                  {p.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
