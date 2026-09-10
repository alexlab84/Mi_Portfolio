import { useHead } from "../useHead";
import { Link } from "react-router-dom";
import { reveal } from "../reveal";

/**
 * Ficha del hero. Llena el lado derecho con información en vez de con
 * decoración, y deja caer la disponibilidad como un dato más: es la
 * única forma de decirla sin que suene a anuncio.
 */
const ficha = [
  { term: "Ahora", value: "Lucio J&M", to: "/projects/lucio-jm" },
  { term: "Desde", value: "Dic 2025" },
  { term: "Antes", value: "Laboratorio clínico" },
  { term: "Stack", value: "WordPress · React" },
  { term: "SEO", value: "1.400 indexadas" },
  { term: "Estado", value: "Abierta a proyectos", accent: true },
];

const cifras = [
  { n: "18", unit: "años", cap: "en un laboratorio clínico, antes de esto." },
  { n: "21.000", unit: "candidatos", cap: "a La Velada del Año V. Entré en el equipo." },
  { n: "1872", unit: "", cap: "el año que abrió Lucio J&M. Llevo su tienda online." },
];

export default function Home() {
  useHead({
    title: "Alejandra Sánchez — Frontend Developer",
    description:
      "Alejandra Sánchez, frontend developer. Dieciocho años en laboratorio clínico y ahora en código. Llevo el e-commerce de Lucio J&M, tienda de telas abierta en 1872.",
    canonical: "https://www.alejandrasanchezdev.es/",
  });

  return (
    <main className="page">

      <div className="container">
        <header className="split split--hero">
          <div>
            <p {...reveal(0, "kicker")}>
              Frontend Developer
            </p>

            <h1 {...reveal(1, "display")} style={{ marginBlockStart: "0.7rem" }}>
              Dieciocho años leyendo analíticas clínicas. <em>Ahora leo código.</em>
            </h1>

            <p {...reveal(2, "lead")} style={{ marginBlockStart: "1.75rem", maxWidth: "48ch" }}>
              Soy <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Alejandra Sánchez</strong>.
              Llevo el e-commerce de Lucio J&amp;M, una tienda de telas que abrió en 1872 y sigue
              abierta.
            </p>

            <div {...reveal(3, "cluster")} style={{ marginBlockStart: "1.75rem" }}>
              <Link to="/projects" className="btn btn--solid">
                Ver el trabajo
              </Link>
              <Link to="/contact" className="btn btn--outline">
                Escríbeme
              </Link>
            </div>
          </div>

          <dl {...reveal(2, "meta")}>
            {ficha.map((f) => (
              <div className="meta__row" key={f.term}>
                <dt className="kicker">{f.term}</dt>
                <dd className="meta__value" style={f.accent ? { color: "var(--accent)" } : undefined}>
                  {f.to ? (
                    <Link to={f.to} className="link">
                      {f.value}
                    </Link>
                  ) : (
                    f.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <section className="figures section" aria-label="Datos">
          {cifras.map((c, i) => (
            <div key={c.n} {...reveal(i, "figure")}>
              <p className="figure__n">
                {c.n}
                {c.unit && <span className="figure__unit">{c.unit}</span>}
              </p>
              <p className="figure__cap">{c.cap}</p>
            </div>
          ))}
        </section>

        <section {...reveal(3, "block section")}>
          <p className="h2" style={{ maxWidth: "22ch" }}>
            Me gusta que me den el problema entero, no una parte.
          </p>
          <p className="muted" style={{ marginBlockStart: "1.25rem", maxWidth: "48ch" }}>
            Si tienes uno de esos, cuéntamelo.
          </p>
          <Link to="/contact" className="btn btn--invert" style={{ marginBlockStart: "1.75rem" }}>
            Escríbeme
          </Link>
        </section>
      </div>
    </main>
  );
}
