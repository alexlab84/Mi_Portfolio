import { useHead } from "../useHead";
import { reveal } from "../reveal";
import { IconArrowOut } from "../components/icons.jsx";

const canales = [
  { label: "Email", value: "alejandra.sachez.garcia@gmail.com", href: "mailto:alejandra.sachez.garcia@gmail.com" },
  { label: "LinkedIn", value: "in/alexlab84", href: "https://linkedin.com/in/alexlab84" },
  { label: "GitHub", value: "alexlab84", href: "https://github.com/alexlab84" },
  { label: "Agenda", value: "30 minutos, cuando te venga bien", href: "https://calendly.com/alejandra-sachez-garcia/30min" },
];

export default function Contact() {
  useHead({
    title: "Contacto | Alejandra Sánchez",
    description:
      "Escríbeme. Las mañanas las tengo en Lucio J&M; las tardes las tengo libres para proyectos de desarrollo web y e-commerce.",
    canonical: "https://www.alejandrasanchezdev.es/contact",
  });

  return (
    <main className="page">
      <div className="container">
        <p {...reveal(0, "kicker")}>Contacto</p>
        <h1 {...reveal(1, "display")} style={{ marginBlockStart: "0.7rem", maxWidth: "12ch" }}>
          Escríbeme.
        </h1>
        <p {...reveal(2, "lead")} style={{ marginBlockStart: "1.75rem", maxWidth: "50ch" }}>
          Las mañanas las tengo en Lucio J&amp;M, de lunes a viernes. Las tardes las tengo libres,
          así que si tienes algo entre manos, cuéntamelo.
        </p>

        <div className="section--tight" style={{ maxWidth: 820 }}>
          {canales.map((c, i) => (
            <a
              key={c.label}
              {...reveal(i + 3)}
              className="work"
              href={c.href}
              {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              style={{
                display: "grid", gridTemplateColumns: "1fr auto", gap: "0.5rem 1rem",
                alignItems: "center", paddingBlock: "1.3rem", borderTop: "1px solid var(--line)",
              }}
            >
              <span className="kicker" style={{ gridColumn: "1 / -1" }}>{c.label}</span>
              <span className="h3 work__title" style={{ wordBreak: "break-word" }}>{c.value}</span>
              <IconArrowOut className="icon--out" style={{ width: "1rem", height: "1rem" }} />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
