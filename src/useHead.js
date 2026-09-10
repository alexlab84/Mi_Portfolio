import { useEffect } from "react";

/**
 * Título y metadatos por página.
 *
 * Sustituye a react-helmet-async, que traía un contexto, un proveedor y
 * soporte de renderizado en servidor que aquí no se usa. Esto hace lo
 * mismo para lo que hace falta: escribir en document.head al montar.
 */
function meta(attr, key, content) {
  if (content == null) return;
  const sel = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(sel);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function link(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useHead({ title, description, canonical, noindex = false }) {
  useEffect(() => {
    if (title) document.title = title;
    meta("name", "description", description);
    meta("property", "og:title", title);
    meta("property", "og:description", description);
    meta("property", "og:url", canonical);
    meta("name", "twitter:title", title);
    meta("name", "twitter:description", description);
    link("canonical", canonical);
    // Se escribe siempre, no solo cuando es noindex: así al salir de la
    // 404 el valor se restaura solo en vez de quedarse pegado.
    meta("name", "robots", noindex ? "noindex" : "index, follow");
  }, [title, description, canonical, noindex]);
}
