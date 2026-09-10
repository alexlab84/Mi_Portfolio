import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../src/components/NavBar";

/**
 * El cajón del móvil está escrito a mano, así que su comportamiento se
 * comprueba. Antes venía del Drawer de MUI y se daba por bueno.
 */
const montar = (ruta = "/") =>
  render(
    <MemoryRouter initialEntries={[ruta]}>
      <Navbar />
    </MemoryRouter>
  );

const cajon = () => document.querySelector(".drawer");
const abrir = () => fireEvent.click(screen.getByRole("button", { name: /abrir menú/i }));

describe("menú del móvil", () => {
  it("arranca cerrado", () => {
    montar();
    expect(cajon()).toHaveAttribute("hidden");
    expect(screen.getByRole("button", { name: /abrir menú/i })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  it("se abre al pulsar el botón", () => {
    montar();
    abrir();
    expect(cajon()).not.toHaveAttribute("hidden");
    expect(screen.getByRole("button", { name: /abrir menú/i })).toHaveAttribute(
      "aria-expanded",
      "true"
    );
  });

  it("se cierra con la tecla Escape", () => {
    montar();
    abrir();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(cajon()).toHaveAttribute("hidden");
  });

  it("se cierra al pulsar el fondo", () => {
    montar();
    abrir();
    fireEvent.click(document.querySelector(".drawer__scrim"));
    expect(cajon()).toHaveAttribute("hidden");
  });

  it("se cierra al elegir un enlace", () => {
    montar();
    abrir();
    fireEvent.click(document.querySelectorAll(".drawer__link")[0]);
    expect(cajon()).toHaveAttribute("hidden");
  });

  it("bloquea el scroll del fondo mientras está abierto y lo restaura al cerrar", () => {
    montar();
    abrir();
    expect(document.body.style.overflow).toBe("hidden");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(document.body.style.overflow).not.toBe("hidden");
  });

  it("el botón de cerrar tiene nombre accesible", () => {
    montar();
    abrir();
    expect(screen.getByRole("button", { name: /cerrar menú/i })).toBeInTheDocument();
  });
});
