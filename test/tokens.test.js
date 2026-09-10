import { describe, it, expect } from "vitest";
import { color, COLORES_ESPERADOS } from "./tokens";
import { contrast } from "./contrast";

/**
 * El colofón de la web publica una tabla de contrastes. Estos tests son
 * lo que hace que esa tabla siga siendo verdad dentro de seis meses.
 *
 * Este archivo existe porque un borde de botón se quedó en 1,56:1 sin
 * que nadie se diera cuenta hasta que lo medí a mano. Eso no debería
 * depender de que a alguien se le ocurra comprobarlo.
 */

// WCAG 2.1 AA
const TEXTO = 4.5;      // 1.4.3 — texto normal
const TEXTO_GRANDE = 3; // 1.4.3 — a partir de 24px o 19px en negrita
const CONTROL = 3;      // 1.4.11 — contorno de un elemento interactivo

const sobrePapel = [
  ["texto principal", color.ink],
  ["texto secundario", color['ink-muted']],
  ["acento", color.accent],
  ["acento oscuro (hover)", color['accent-ink']],
];

describe("contraste del texto sobre los fondos claros", () => {
  for (const [nombre, fg] of sobrePapel) {
    it(`${nombre} cumple AA sobre el fondo de página`, () => {
      expect(contrast(fg, color.bg)).toBeGreaterThanOrEqual(TEXTO);
    });
    it(`${nombre} cumple AA sobre superficie blanca`, () => {
      expect(contrast(fg, color.surface)).toBeGreaterThanOrEqual(TEXTO);
    });
  }
});

describe("contraste sobre el bloque oscuro", () => {
  it("el texto principal cumple AA", () => {
    expect(contrast(color['on-ink'], color['ink-block'])).toBeGreaterThanOrEqual(TEXTO);
  });
  it("el texto atenuado cumple AA", () => {
    expect(contrast(color['on-ink-muted'], color['ink-block'])).toBeGreaterThanOrEqual(TEXTO);
  });
  it("el acento se usa sobre claro, no sobre el bloque oscuro", () => {
    // Aquí no se afirma que cumpla: se documenta que NO llega, y por eso
    // en los bloques oscuros el acento no se usa para texto.
    expect(contrast(color.accent, color['ink-block'])).toBeLessThan(TEXTO);
  });
});

describe("contraste de los contornos de control (WCAG 1.4.11)", () => {
  it("el borde de los botones cumple 3:1 sobre el fondo de página", () => {
    expect(contrast(color.control, color.bg)).toBeGreaterThanOrEqual(CONTROL);
  });
  it("el borde de los botones cumple 3:1 sobre superficie blanca", () => {
    expect(contrast(color.control, color.surface)).toBeGreaterThanOrEqual(CONTROL);
  });
  it("las líneas decorativas son deliberadamente suaves y no valen como contorno", () => {
    // Documenta la distinción: `line` y `lineStrong` separan, no delimitan
    // un control. Si algún día se usan para un borde interactivo, este test
    // recuerda que hay que usar `control`.
    expect(contrast(color.line, color.bg)).toBeLessThan(CONTROL);
    expect(contrast(color['line-strong'], color.bg)).toBeLessThan(CONTROL);
  });
});

describe("el acento como texto grande", () => {
  it("cumple de sobra el mínimo para titulares", () => {
    expect(contrast(color.accent, color.bg)).toBeGreaterThanOrEqual(TEXTO_GRANDE);
  });
});

describe("forma de los tokens", () => {
  it("la extracción del CSS ha encontrado todos los colores", () => {
    // Salvaguarda: si esto fallara, los tests de abajo pasarían en vacío.
    expect(Object.keys(color)).toHaveLength(COLORES_ESPERADOS);
  });

  it("todos los colores son hexadecimales de seis dígitos", () => {
    for (const [nombre, valor] of Object.entries(color)) {
      expect(valor, nombre).toMatch(/^#[0-9A-Fa-f]{6}$/);
    }
  });
});
