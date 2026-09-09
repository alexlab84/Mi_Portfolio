/**
 * Design tokens — única fuente de verdad de color, tipografía y espacio.
 *
 * Regla: ningún componente escribe un hex a pelo. Todo sale de aquí.
 * Si algún día el acento deja de convencer, se cambia SOLO `accent`
 * y cambia la web entera.
 */

export const color = {
  // Papel y tinta
  bg: "#FBFAF8", // fondo, blanco roto cálido
  surface: "#FFFFFF", // tarjetas y bloques elevados
  ink: "#0F0E0D", // texto principal — 18.5:1 sobre bg
  inkMuted: "#6B6764", // texto secundario — 5.4:1 sobre bg (AA)
  line: "#E6E3DE", // hairlines y separadores
  lineStrong: "#CFCAC2", // bordes decorativos
  control: "#948C81", // bordes de controles — 3.18:1 sobre bg, cumple WCAG 1.4.11

  // Único acento. Se usa con cuentagotas: enlaces, CTA, un dato por página.
  accent: "#C2410C", // 4.96:1 sobre bg — AA para texto normal
  accentInk: "#9A330A", // versión oscura para hover / texto pequeño
  accentWash: "#FDF1EA", // fondo teñido, muy sutil

  // Bloque oscuro para romper la página una vez
  inkBlock: "#161412",
  onInk: "#F5F2EE",
  onInkMuted: "#9C958D",
};

export const font = {
  display: `"Archivo", "Inter", system-ui, sans-serif`,
  body: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
  mono: `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
};

/** Escala tipográfica fluida: sin breakpoints, sin saltos. */
export const size = {
  display: "clamp(2.5rem, 1.4rem + 3.6vw, 4.25rem)",
  h2: "clamp(1.75rem, 1.1rem + 2.6vw, 3rem)",
  h3: "clamp(1.3rem, 1.05rem + 1vw, 1.75rem)",
  lead: "clamp(1.05rem, 0.98rem + 0.35vw, 1.3rem)",
  body: "1.0625rem",
  small: "0.9375rem",
  label: "0.75rem", // etiquetas mono en versalitas
};

/** Un solo radio, discreto. Nada de 32px por todas partes. */
export const radius = {
  sm: "2px",
  md: "4px",
  lg: "8px",
  pill: "999px",
};

/**
 * Sin sombras de colores. La jerarquía la dan el espacio y las líneas,
 * no diez capas de box-shadow.
 */
export const shadow = {
  none: "none",
  subtle: "0 1px 2px rgba(15, 14, 13, 0.04)",
  lifted: "0 8px 24px -12px rgba(15, 14, 13, 0.12)",
};

export const easing = "cubic-bezier(0.22, 1, 0.36, 1)";
