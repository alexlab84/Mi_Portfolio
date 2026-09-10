import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconMenu, IconClose } from "./icons.jsx";

const links = [
  { name: "Trabajo", path: "/projects" },
  { name: "Trayectoria", path: "/experience" },
  { name: "Sobre mí", path: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Cerrar con Escape y bloquear el scroll del fondo mientras está abierto.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previo;
    };
  }, [open]);

  const actual = (path) => (pathname === path ? "page" : undefined);

  return (
    <>
      <header className="nav">
        <div className="container nav__inner">
          <Link to="/" className="nav__brand">
            Alejandra Sánchez
          </Link>

          <nav className="nav__links" aria-label="Principal">
            {links.map((l) => (
              <Link key={l.path} to={l.path} className="nav__link" aria-current={actual(l.path)}>
                {l.name}
              </Link>
            ))}
            <Link to="/contact" className="btn btn--solid" style={{ marginInlineStart: "0.75rem" }}>
              Escríbeme
            </Link>
          </nav>

          <button
            type="button"
            className="nav__burger"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <IconMenu />
          </button>
        </div>
      </header>

      <div className="drawer" hidden={!open}>
        <div className="drawer__scrim" onClick={() => setOpen(false)} />
        <nav className="drawer__panel" aria-label="Menú">
          <button
            type="button"
            className="drawer__close"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          >
            <IconClose />
          </button>
          {[...links, { name: "Escríbeme", path: "/contact" }].map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="drawer__link"
              aria-current={actual(l.path)}
              onClick={() => setOpen(false)}
            >
              {l.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
