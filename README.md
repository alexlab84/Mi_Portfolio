# alejandrasanchezdev.es

Mi portfolio. React + Vite, desplegado en Vercel.

**→ [www.alejandrasanchezdev.es](https://www.alejandrasanchezdev.es)**

---

## Arrancarlo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run lint
npm test         # vitest
npm run test:watch
```

También hay un `Dockerfile` multietapa que compila con Node y sirve el
resultado con Nginx, por si hace falta desplegarlo fuera de Vercel.

## Cómo está organizado

```
src/
├── styles/
│   ├── tokens.css     color, tipografía y espacio. Fuente única.
│   ├── base.css       reset, tipografía base y el revelado de entrada
│   └── app.css        clases de composición y componentes
├── useHead.js         título y metadatos por página
├── reveal.js          props del revelado escalonado
├── App.jsx            rutas, con carga diferida por página
├── components/
│   ├── NavBar.jsx
│   ├── Footer.jsx
│   └── ScrollToTop.jsx
└── pages/
    ├── Home.jsx
    ├── Projects.jsx       listado de trabajo
    ├── CaseLucio.jsx      caso completo de Lucio J&M
    ├── Experience.jsx
    ├── About.jsx
    ├── Contact.jsx
    ├── Colofon.jsx        las decisiones de esta web
    └── NotFound.jsx
```

## Decisiones

**Un solo archivo de tokens.** Antes había 119 valores hexadecimales
escritos a mano repartidos por las páginas. Cambiar el color de acento
eran 119 ediciones; ahora es una línea en `tokens.js`.

**El contenido es visible por defecto.** La animación de entrada se hace
con CSS y solo se aplica si el navegador declara
`prefers-reduced-motion: no-preference`. La primera versión usaba
framer-motion arrancando desde `opacity: 0`: si el JavaScript no llegaba
a ejecutarse, la página se quedaba en blanco. Ahora, si la animación no
corre, el texto sigue estando.

**Contrastes medidos, no estimados.** 18,5:1 el texto principal, 5,4:1 el
secundario, 4,96:1 el acento y 3,18:1 el borde de los controles — este
último porque WCAG 1.4.11 pide 3:1 para el contorno de un elemento
interactivo, y se quedaba en 1,56:1. La tabla completa está en
[/colofon](https://www.alejandrasanchezdev.es/colofon).

**Sin librería de componentes ni CSS en tiempo de ejecución.** Todo son
custom properties y clases en tres archivos de CSS. Antes eran 136 kB
comprimidos en la primera carga, de los que 119 eran MUI y Emotion: doce
componentes de los que once eran un `div` con estilos. Ahora son 78 kB, y
lo que queda es casi todo React. Los tres iconos van en línea como SVG y
el título y los metadatos por página los pone un hook de treinta líneas
en lugar de react-helmet-async.

**Una ruta, un fragmento.** Cada página se descarga al visitarla, y las
dependencias van en su propio bloque para que el caché sobreviva a los
cambios de contenido.

**Escala tipográfica fluida.** Los tamaños interpolan con el ancho de la
ventana usando `clamp()`, en vez de saltar en los puntos de ruptura.

**Los contrastes los verifica un test.** `test/tokens.test.js` lee
`src/styles/tokens.css` —el mismo archivo que carga el navegador, no una
copia— calcula el contraste de cada par y falla si alguno baja del mínimo
de WCAG. Existe porque el borde de los botones estuvo a 1,56:1 —la norma
pide 3:1 para un contorno interactivo— y no lo detectó nadie hasta
medirlo a mano. El resto de tests cubren lo que se rompe en silencio: un
solo `h1` por página, la lista de definiciones del hero con sus pares
completos, la descripción en texto del gráfico y el `aria-current` de la
navegación. En cada push corren linter, tests y build.

## Lo que le falta

- No hay modo oscuro.
- El contacto son enlaces, no un formulario.
- 136 kB siguen siendo muchos para seis páginas que son casi todo texto.
  Es el precio de la librería de componentes, y se puede bajar.
- Los 78 kB son casi todos React. Bajar de ahí sería salirse de React, y
  eso ya no es optimizar: es cambiar de herramienta.

## Stack

React 19 · Vite 6 · React Router 7 · Vitest y Testing Library ·
CSS a mano · Archivo, Inter y JetBrains Mono
