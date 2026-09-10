import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Suspense } from "react";
import {
  lazyPage,
  limpiarMarcaDeRecarga,
  manejarFalloDeFragmento,
  MARCA,
} from "../src/lazyPage";

/**
 * Al publicar una versión nueva los fragmentos de la anterior
 * desaparecen, y una pestaña abierta se queda en blanco al navegar.
 * Esto comprueba que se recupera recargando y que no entra en bucle.
 */
describe("manejarFalloDeFragmento", () => {
  beforeEach(() => sessionStorage.clear());

  it("recarga la primera vez y deja marca", () => {
    const recargar = vi.fn();
    const r = manejarFalloDeFragmento(new Error("404"), recargar);

    expect(recargar).toHaveBeenCalledTimes(1);
    expect(sessionStorage.getItem(MARCA)).toBe("1");
    expect(r).toBeInstanceOf(Promise);
  });

  it("la promesa que devuelve no resuelve, para que no se pinte nada mientras recarga", async () => {
    const r = manejarFalloDeFragmento(new Error("404"), vi.fn());
    const centinela = Symbol("sin resolver");
    const ganador = await Promise.race([
      r,
      new Promise((res) => setTimeout(() => res(centinela), 30)),
    ]);
    expect(ganador).toBe(centinela);
  });

  it("si ya se intentó, propaga el error y NO recarga otra vez", () => {
    sessionStorage.setItem(MARCA, "1");
    const recargar = vi.fn();
    const error = new Error("sigue fallando");

    expect(() => manejarFalloDeFragmento(error, recargar)).toThrow("sigue fallando");
    expect(recargar).not.toHaveBeenCalled();
  });

  it("sin sessionStorage propaga el error en vez de arriesgar un bucle", () => {
    const original = Object.getOwnPropertyDescriptor(window, "sessionStorage");
    Object.defineProperty(window, "sessionStorage", {
      configurable: true,
      get() {
        throw new Error("almacenamiento bloqueado");
      },
    });
    const recargar = vi.fn();
    try {
      expect(() => manejarFalloDeFragmento(new Error("404"), recargar)).toThrow("404");
      expect(recargar).not.toHaveBeenCalled();
    } finally {
      Object.defineProperty(window, "sessionStorage", original);
    }
  });
});

describe("limpiarMarcaDeRecarga", () => {
  it("borra la marca tras un arranque correcto", () => {
    sessionStorage.setItem(MARCA, "1");
    limpiarMarcaDeRecarga();
    expect(sessionStorage.getItem(MARCA)).toBeNull();
  });
});

describe("lazyPage", () => {
  beforeEach(() => sessionStorage.clear());

  it("una carga correcta pinta el componente sin tocar la marca", async () => {
    const Bien = lazyPage(() => Promise.resolve({ default: () => <p>hola</p> }));
    render(
      <Suspense fallback={<p>cargando</p>}>
        <Bien />
      </Suspense>
    );
    expect(await screen.findByText("hola")).toBeInTheDocument();
    expect(sessionStorage.getItem(MARCA)).toBeNull();
  });
});
