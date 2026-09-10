import { useHead } from "../useHead";
import { Link } from "react-router-dom";
import { reveal } from "../reveal";
import { IconArrowOut } from "../components/icons.jsx";
import luciojm from "../assets/luciojm.webp";
import lavelada from "../assets/la velada v.webp";
import etrivium from "../assets/etrivium.webp";
import quiniela from "../assets/Quiniela.webp";

const proyectos = [
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

function Fila({ p, i }) {
  const contenido = (
    <div className="work__row">
        <div className="work__text">
          <div className="cluster" style={{ gap: "1rem", marginBlockEnd: "0.9rem" }}>
            <span className="kicker" style={{ color: "var(--accent)" }}>{p.kicker}</span>
            <span className="mono muted">{p.year}</span>
          </div>
          <h2 className="h2 work__title" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            {p.title}
            <IconArrowOut className="icon--out" />
          </h2>
          <p className="muted" style={{ marginBlockStart: "0.9rem", maxWidth: "54ch" }}>
            {p.summary}
          </p>
          <div className="tags" style={{ marginBlockStart: "1.25rem" }}>
            {p.stack.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="work__media">
          <img
            className="work__img"
            src={p.image}
            alt={`Captura del proyecto ${p.title}`}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
    </div>
  );

  // Enlace interno al caso, o externo al proyecto.
  return p.to ? (
    <Link className="work" to={p.to}>
      {contenido}
    </Link>
  ) : (
    <a className="work" href={p.href} target="_blank" rel="noopener noreferrer">
      {contenido}
    </a>
  );
}

export default function Projects() {
  useHead({
    title: "Trabajo | Alejandra Sánchez",
    description:
      "Proyectos de Alejandra Sánchez: el e-commerce de Lucio J&M (telas desde 1872), La Velada del Año V con midudev, eTrivium y una app de pronósticos con React y Django.",
    canonical: "https://www.alejandrasanchezdev.es/projects",
  });

  return (
    <main className="page">
      <div className="container">
        <p {...reveal(0, "kicker")}>Trabajo</p>
        <h1 {...reveal(1, "display")} style={{ marginBlockStart: "0.7rem", maxWidth: "15ch" }}>
          Cuatro cosas que he construido.
        </h1>
        <div className="section--tight">
          {proyectos.map((p, i) => (
            <div key={p.title} {...reveal(i)}>
              <Fila p={p} i={i} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
