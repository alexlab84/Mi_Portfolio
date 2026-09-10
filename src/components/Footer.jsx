import { Link } from "react-router-dom";

const externos = [
  { label: "LinkedIn", href: "https://linkedin.com/in/alexlab84" },
  { label: "GitHub", href: "https://github.com/alexlab84" },
  { label: "Email", href: "mailto:alejandra.sachez.garcia@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <Link to="/" className="nav__brand" style={{ fontSize: "1.05rem" }}>
              Alejandra Sánchez
            </Link>
            <p className="small muted" style={{ marginBlockStart: "0.25rem" }}>
              Frontend Developer
            </p>
          </div>
          <div className="footer__links">
            {externos.map((l) => (
              <a
                key={l.label}
                className="footer__link"
                href={l.href}
                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {l.label}
              </a>
            ))}
            <Link className="footer__link" to="/colofon">
              Cómo está hecha esta web
            </Link>
          </div>
        </div>
        <p className="mono muted" style={{ marginBlockStart: "2rem" }}>
          © 2026
        </p>
      </div>
    </footer>
  );
}
