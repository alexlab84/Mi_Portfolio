import { useHead } from "../useHead";
import { reveal } from "../reveal";

const contrastes = [
  ["Texto principal", "18,5:1"],
  ["Texto secundario", "5,4:1"],
  ["Acento sobre papel", "4,96:1"],
  ["Texto sobre bloque oscuro", "16,5:1"],
  ["Bordes de botón", "3,2:1"],
];

const secciones = [
  {
    title: "Tipografía",
    items: [
      "Archivo para los titulares, Inter para el texto y JetBrains Mono para fechas, datos y etiquetas. Tres funciones, tres letras.",
      "La escala es fluida: el tamaño interpola con el ancho de la ventana en vez de saltar en los puntos de ruptura. No hay un móvil y un escritorio, hay un continuo.",
      "Los párrafos no pasan de unos 62 caracteres por línea, que es donde el ojo empieza a perder el renglón al volver a la izquierda.",
    ],
  },
  {
    title: "Movimiento",
    items: [
      "El contenido es visible por defecto. La animación de entrada solo se aplica si el navegador declara que el movimiento es bienvenido.",
      "No es solo accesibilidad: si la animación no llega a ejecutarse, el texto sigue estando ahí. Lo aprendí rompiéndolo — la primera versión de esta página se quedaba en blanco.",
    ],
  },
  {
    title: "Rendimiento",
    items: [
      "Sin librería de componentes ni motor de estilos en tiempo de ejecución. Todo es CSS con custom properties, así que el navegador no descarga JavaScript para pintar un botón.",
      "La primera carga son 78 kB comprimidos. Eran 136, y 119 de ellos eran Material UI y Emotion: doce componentes de los que once eran un div con estilos. Para un panel con tablas y formularios habrían valido la pena; para seis páginas de texto, no. Lo que queda es casi todo React, que es el suelo de una aplicación de este tipo.",
      "Una ruta, un fragmento: solo se descarga la página que se visita.",
      "Imágenes en WebP y guardadas al tamaño en que se pintan, no al que salieron de la cámara. Los tres iconos de la interfaz van en línea como SVG.",
    ],
  },
  {
    title: "Verificación",
    items: [
      "Los contrastes de la tabla de arriba no están escritos a mano: los comprueba un test que lee el propio archivo de tokens en cada push. Si alguien cambia un color y deja de cumplir, el CI se pone rojo antes de que llegue a producción.",
      "Ese test existe porque el borde de los botones estuvo a 1,56:1 cuando la norma pide 3:1, y no lo detectó nadie hasta que lo medí a mano. Las cosas que dependen de que alguien se acuerde de mirarlas, tarde o temprano fallan.",
      "El resto de los 33 tests cubren lo que se rompe sin avisar: que haya un solo h1 por página, que la ficha de la portada siga siendo una lista de definiciones con sus pares completos, que el gráfico del caso de Lucio mantenga su descripción en texto, y que la navegación marque la página actual.",
      "Y el menú del móvil, que está escrito a mano: que abra, que cierre con Escape, con el fondo y al elegir un enlace, que bloquee el scroll de detrás y que lo restaure al salir. Cuando venía de una librería se daba por bueno; ahora es mío y se comprueba.",
      "En cada push se ejecutan linter, tests y build. Que compile es parte de que funcione, y eso no lo detecta ni el linter ni los tests.",
    ],
  },
  {
    title: "Interfaz",
    items: [
      "HTML con significado: la ficha de la portada es una lista de definiciones, la trayectoria una lista ordenada, y el gráfico del caso de Lucio lleva su descripción escrita para quien no lo ve.",
      "El foco del teclado es visible en toda la web. Se puede recorrer entera sin ratón, y el menú del móvil se cierra con Escape.",
      "La navegación marca la página actual, y al cambiar de página el scroll vuelve arriba en lugar de dejarte a media altura.",
    ],
  },
];

const falta = [
  "No hay modo oscuro.",
  "El contacto son enlaces, no un formulario.",
  "Los 78 kB son casi todos React. Bajar de ahí significaría salirse de React, y eso ya no es optimizar: es cambiar de herramienta.",
];

export default function Colofon() {
  useHead({
    title: "Cómo está hecha esta web | Alejandra Sánchez",
    description:
      "Las decisiones detrás de este portfolio: tipografía fluida, contrastes verificados por test, movimiento opcional, cero CSS en tiempo de ejecución. Y lo que le falta.",
    canonical: "https://www.alejandrasanchezdev.es/colofon",
  });

  return (
    <main className="page">
      <div className="container">
        <p {...reveal(0, "kicker")}>Colofón</p>
        <h1 {...reveal(1, "display")} style={{ marginBlockStart: "0.7rem", maxWidth: "15ch" }}>
          Cómo está hecha esta web.
        </h1>
        <p {...reveal(2, "lead")} style={{ marginBlockStart: "1.75rem", maxWidth: "56ch" }}>
          Un portfolio que habla de criterio debería poder enseñarlo. Esto es lo que hay debajo de
          esta página, incluido lo que todavía no está bien.
        </p>

        <section className="section">
          <h2 {...reveal(0, "kicker")}>Color</h2>
          <div className="rows" style={{ marginBlockStart: "0.5rem" }}>
            <div className="row row--wide">
              <h3 className="h3">Un solo acento</h3>
              <div>
                <p className="muted" style={{ maxWidth: "62ch", marginBlockEnd: "1.5rem" }}>
                  Todo el color de la web sale de un único archivo de CSS. Cambiar este naranja por
                  otro es cambiar una línea. Los contrastes están{" "}
                  <span style={{ color: "var(--ink)" }}>medidos</span>, no estimados a ojo: la norma
                  AA pide 4,5:1 para texto y 3:1 para el borde de un control. Y los verifica un test,
                  así que siguen siendo verdad.
                </p>
                <dl className="meta" style={{ maxWidth: 440 }}>
                  {contrastes.map(([k, v]) => (
                    <div className="meta__row" key={k}>
                      <dt className="small muted">{k}</dt>
                      <dd className="mono" style={{ color: "var(--ink)" }}>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {secciones.map((s) => (
          <section className="section--tight" key={s.title}>
            <h2 {...reveal(0, "kicker")}>{s.title}</h2>
            <div className="rows" style={{ marginBlockStart: "0.5rem" }}>
              {s.items.map((item, i) => (
                <div className="row row--narrow" key={i} {...reveal(i + 1)}>
                  <span className="mono accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="row__body">{item}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section {...reveal(1, "block section")}>
          <h2 className="kicker">Lo que le falta</h2>
          <p className="h2" style={{ marginBlock: "1.25rem 2rem", maxWidth: "20ch" }}>
            Nada de esto está terminado.
          </p>
          <ul>
            {falta.map((f) => (
              <li
                key={f}
                className="muted"
                style={{ paddingBlock: "1rem", borderTop: "1px solid rgb(245 242 238 / 0.16)", maxWidth: "58ch" }}
              >
                {f}
              </li>
            ))}
          </ul>
        </section>

        <p className="small muted" style={{ marginBlockStart: "2.5rem" }}>
          React · Vite · React Router · react-helmet-async · Vitest · CSS a mano.
        </p>
      </div>
    </main>
  );
}
