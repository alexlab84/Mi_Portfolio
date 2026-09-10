import { lazy } from "react";

export const MARCA = "recarga-por-chunk";

/**
 * Decide qué hacer cuando falla la carga de un fragmento.
 *
 * Los nombres de archivo llevan un hash del contenido, así que al
 * publicar cambian. Una pestaña abierta desde antes tiene el index
 * anterior y, al navegar, pide un fragmento que ya se borró del
 * servidor: pantalla en blanco. Recargar lo resuelve, porque el
 * index.html se sirve con must-revalidate.
 *
 * Está separado de lazyPage a propósito: así se puede comprobar sin
 * pasar por React.lazy, cuyas tripas no son públicas.
 *
 * @returns una promesa que nunca resuelve, si va a recargar
 * @throws el error original, si ya se intentó o no hay almacenamiento
 */
export function manejarFalloDeFragmento(error, recargar) {
  let yaSeIntentó;
  try {
    yaSeIntentó = sessionStorage.getItem(MARCA) === "1";
    if (!yaSeIntentó) sessionStorage.setItem(MARCA, "1");
  } catch {
    // Modo privado o almacenamiento bloqueado: sin forma de recordar que
    // ya lo intentamos, así que no se recarga. Un bucle es peor que un error.
    throw error;
  }

  if (yaSeIntentó) throw error;

  recargar();
  // No resuelve a propósito: la página se está recargando.
  return new Promise(() => {});
}

/** `lazy` que se recupera de un fragmento desaparecido. */
export function lazyPage(importar) {
  return lazy(() =>
    importar().catch((error) =>
      manejarFalloDeFragmento(error, () => window.location.reload())
    )
  );
}

/** Se llama al arrancar bien: limpia la marca para la próxima vez. */
export function limpiarMarcaDeRecarga() {
  try {
    sessionStorage.removeItem(MARCA);
  } catch {
    /* sin almacenamiento, nada que limpiar */
  }
}
