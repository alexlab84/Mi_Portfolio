import { useHead } from "../useHead";
import { Link } from "react-router-dom";

export default function NotFound() {
  useHead({
    title: "Página no encontrada — Alejandra Sánchez",
    canonical: "https://www.alejandrasanchezdev.es/",
    noindex: true,
  });

  return (
    <main className="page" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <p className="kicker">Error 404</p>
        <h1 className="display" style={{ marginBlockStart: "0.7rem", maxWidth: "16ch" }}>
          Esta página no existe.
        </h1>
        <p className="lead" style={{ marginBlockStart: "1.5rem", maxWidth: "44ch" }}>
          O la he movido, o el enlace venía mal. Las dos cosas tienen arreglo.
        </p>
        <Link to="/" className="btn btn--solid" style={{ marginBlockStart: "2rem" }}>
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
