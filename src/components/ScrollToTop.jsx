import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router conserva la posición de scroll al cambiar de ruta.
 * Sin esto, al ir del pie de una página a otra aterrizas a media página.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }, [pathname]);

  return null;
}
