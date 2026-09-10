/**
 * Props para el revelado de entrada, escalonado por índice.
 * El retardo va en una custom property y la animación la aplica el CSS
 * solo si el navegador acepta movimiento (ver base.css).
 */
export const reveal = (i = 0, extra = "") => ({
  className: extra ? `reveal ${extra}` : "reveal",
  style: { "--delay": `${i * 80}ms` },
});
