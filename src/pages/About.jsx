import { useHead } from "../useHead";
import { reveal } from "../reveal";
import retrato from "../assets/alejandra-blanco.webp";

const comoTrabajo = [
  ["Conectado al CMS", "Tengo Claude enchufado a WordPress por MCP. Crea y actualiza contenido, sube media, audita SEO, genera y valida schema, mide rendimiento y gestiona la caché directamente sobre el sitio. No le pido texto para pegar a mano: trabaja contra la tienda."],
  ["Llamadas a APIs", "Integraciones entre el CMS y servicios externos, y snippets propios cuando lo que hace falta no existe como plugin."],
  ["Saber pedir", "La mitad del oficio ahora es dar buenas instrucciones: acotar la tarea, dar el contexto justo y decir también qué no hacer. Es una habilidad, y la estoy afilando."],
  ["Que se acuerde", "Lo que repito queda guardado para no volver a explicarlo cada vez. Con el tiempo se convierte en una forma de trabajar, no en una conversación suelta."],
];

const herramientas = [
  ["Con lo que trabajo a diario", ["WordPress", "WooCommerce", "Elementor", "PHP", "JavaScript", "CSS"]],
  ["Con lo que he construido producto", ["React", "Astro", "TypeScript", "Next.js", "Tailwind", "Material UI"]],
  ["Lo que mido", ["Search Console", "Analytics", "Merchant Center", "PageSpeed", "SEO"]],
  ["Con lo que me ayudo", ["Claude Code", "MCP", "APIs REST"]],
];

export default function About() {
  useHead({
    title: "Sobre mí | Alejandra Sánchez",
    description:
      "Alejandra Sánchez: dieciocho años como técnica de laboratorio hospitalario y, desde 2023, desarrollo frontend. Me gusta hacerme cargo del asunto entero.",
    canonical: "https://www.alejandrasanchezdev.es/about",
  });

  return (
    <main className="page">
      <div className="container">
        <p {...reveal(0, "kicker")}>Sobre mí</p>
        <h1 {...reveal(1, "display")} style={{ marginBlockStart: "0.7rem", maxWidth: "16ch" }}>
          Me gusta enterarme de cómo funciona todo.
        </h1>

        <div className="split split--text section--tight">
          <div {...reveal(2)}>
            <p className="h3" style={{ fontWeight: 500, lineHeight: 1.4, marginBlockEnd: "1.5rem" }}>
              Durante dieciocho años fui técnica de laboratorio en un hospital. Manejaba los
              aparatos, hacía extracciones de sangre y daba de alta a pacientes en el sistema.
            </p>
            <div className="stack-md muted" style={{ maxWidth: "62ch" }}>
              <p>
                Eran tres oficios distintos dentro del mismo puesto, y ésa fue siempre la parte que
                más me gustaba. Lo que se me da bien no es una tecnología concreta: es agarrar un
                asunto entero y no soltarlo hasta saber de qué va.
              </p>
              <p>
                En Lucio J&amp;M entré para llevar la web. Acabé llevando también el catálogo, el
                SEO, la analítica y el rendimiento. No porque me lo pidieran, sino porque no sé
                hacerlo de otra manera: si algo forma parte de que la tienda venda, quiero saber cómo
                está montado.
              </p>
              <p>
                Empecé a programar por mi cuenta en 2023 y en 2024 hice un bootcamp. Vengo de un
                sitio donde un decimal mal leído tiene consecuencias, así que reviso las cosas dos
                veces.
              </p>
            </div>
          </div>

          <img
            {...reveal(3)}
            src={retrato}
            width={1400}
            height={933}
            loading="lazy"
            decoding="async"
            alt="Retrato de Alejandra Sánchez"
            style={{
              width: "100%", aspectRatio: "3 / 4", objectFit: "cover",
              objectPosition: "center 35%", background: "var(--surface)",
              border: "1px solid var(--line)",
            }}
          />
        </div>

        <section className="section">
          <h2 {...reveal(0, "kicker")}>Cómo trabajo</h2>
          <p {...reveal(1, "h3")} style={{ fontWeight: 500, lineHeight: 1.4, marginBlock: "1.25rem 2.5rem", maxWidth: "40ch" }}>
            Trabajo con Claude todos los días. No copiando respuestas: dándole acceso a las cosas.
          </p>
          <div className="rows">
            {comoTrabajo.map(([t, v], i) => (
              <div className="row row--wide" key={t} {...reveal(i + 2)}>
                <p style={{ fontWeight: 500 }}>{t}</p>
                <p className="row__body">{v}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 {...reveal(0, "kicker")}>Herramientas</h2>
          <div className="rows" style={{ marginBlockStart: "0.5rem" }}>
            {herramientas.map(([grupo, items], i) => (
              <div className="row row--wide" key={grupo} {...reveal(i + 1)} style={{ alignItems: "baseline" }}>
                <p>{grupo}</p>
                <div className="tags">
                  {items.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
