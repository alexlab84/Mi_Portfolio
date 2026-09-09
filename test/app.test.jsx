import { describe, it, expect, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import Home from "../src/pages/Home";
import NotFound from "../src/pages/NotFound";
import CaseLucio from "../src/pages/CaseLucio";
import Navbar from "../src/components/NavBar";

beforeAll(() => {
  // jsdom no implementa matchMedia y ScrollToTop lo usa
  window.matchMedia ||= () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
});

function montar(ui, ruta = "/") {
  return render(
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[ruta]}>{ui}</MemoryRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

describe("portada", () => {
  it("el titular es el h1 de la página", () => {
    montar(<Home />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent(/dieciocho años/i);
    expect(h1).toHaveTextContent(/ahora leo código/i);
  });

  it("hay un solo h1", () => {
    montar(<Home />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("los tres datos están en la página", () => {
    montar(<Home />);
    for (const dato of ["18", "21.000", "1872"]) {
      expect(screen.getByText(dato)).toBeInTheDocument();
    }
  });

  it("la ficha del hero es una lista de definiciones, no una tabla falsa", () => {
    const { container } = montar(<Home />);
    const dl = container.querySelector("dl");
    expect(dl).toBeTruthy();
    expect(dl.querySelectorAll("dt").length).toBe(dl.querySelectorAll("dd").length);
  });
});

describe("caso de Lucio", () => {
  it("el gráfico tiene descripción en texto para quien no lo ve", () => {
    montar(<CaseLucio />);
    const grafico = screen.getByRole("img", { name: /impresiones de búsqueda/i });
    expect(grafico.getAttribute("aria-label")).toMatch(/\d/);
  });

  it("la imagen de portada tiene alt descriptivo", () => {
    montar(<CaseLucio />);
    const img = screen.getByAltText(/lucio j&m/i);
    expect(img.getAttribute("alt").length).toBeGreaterThan(20);
  });
});

describe("navegación", () => {
  it("marca la página actual con aria-current", () => {
    montar(<Navbar />, "/projects");
    expect(screen.getByRole("link", { name: "Trabajo" })).toHaveAttribute("aria-current", "page");
  });

  it("no marca las demás", () => {
    montar(<Navbar />, "/projects");
    expect(screen.getByRole("link", { name: "Sobre mí" })).not.toHaveAttribute("aria-current");
  });
});

describe("página 404", () => {
  it("dice que no existe y ofrece salida", () => {
    montar(<NotFound />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/no existe/i);
    expect(screen.getByRole("link", { name: /volver al inicio/i })).toBeInTheDocument();
  });
});
