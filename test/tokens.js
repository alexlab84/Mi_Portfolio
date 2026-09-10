import { readFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Lee los colores directamente de src/styles/tokens.css: el mismo archivo
 * que carga el navegador, no una copia paralela que pueda desincronizarse.
 *
 * Se usa fs y no `import ... ?raw` porque la configuración de Vitest tiene
 * css: false, que anula los imports de CSS y devolvía un módulo vacío.
 */
const RUTA = resolve(process.cwd(), "src/styles/tokens.css");
const css = readFileSync(RUTA, "utf8");

export const color = Object.fromEntries(
  [...css.matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{3,8})\s*;/g)].map(([, k, v]) => [k, v])
);

/**
 * Sin esto, si la extracción fallara y devolviera un objeto vacío, los
 * tests que recorren `color` pasarían sin comprobar nada. Un test que
 * puede aprobar sobre cero datos no está comprobando nada.
 */
export const COLORES_ESPERADOS = 13;
