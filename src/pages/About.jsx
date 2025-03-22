import { Container, Typography, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";



import htmlIcon from "../assets/html-5.png";
import cssIcon from "../assets/css-3.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.png";
import pythonIcon from "../assets/piton.png";
import djangoIcon from "../assets/django.png";
import materialuiIcon from "../assets/material-ui.png"; 

export default function About() {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 8, color: "text.primary", paddingTop: "30px" }}>
      <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
>
 
</motion.div>
      {/* Título con color turquesa */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Typography variant="h3" gutterBottom>
          <span style={{ color: "#80DEEA", fontWeight: "bold" }}>
            ¿Qué sucede cuando decides reinventarte y encuentras tu verdadera pasión?
          </span>
        </Typography>
      </motion.div>

      {/* Texto descriptivo */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
        <Typography variant="h6" paragraph sx={{ fontSize: "1.3rem", textAlign: "justify" }}>
          Mi viaje hacia el desarrollo Front-End comenzó lejos del teclado. Durante años trabajé en análisis clínicos, un entorno donde la precisión y la resolución de problemas eran esenciales. Sin embargo, siempre sentí curiosidad por cómo la tecnología podía transformar vidas, incluida la mía. Todo cambió cuando descubrí la programación: el desafío intelectual, la creatividad y la posibilidad de construir herramientas útiles me atraparon desde el primer "Hello, World!".
        </Typography>
        <Typography variant="h6" paragraph sx={{ fontSize: "1.3rem", textAlign: "justify" }}>
          Después de completar un bootcamp intensivo en Adalab, me sumergí de lleno en el desarrollo de aplicaciones web, especializándome en HTML5, CSS3, SASS, JavaScript (ES6+), React, Python, Django y Git. Durante este proceso, apliqué metodologías ágiles como Scrum para crear soluciones interactivas y funcionales, destacando mi capacidad para adaptarme rápidamente y resolver problemas complejos.
        </Typography>
      </motion.div>

      {/* Propósito destacado */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1 }}>
        <Typography variant="h5" gutterBottom sx={{ color: "#80DEEA", fontWeight: "bold", mt: 4 }}>
          Mi propósito es claro: construir tecnología que haga la vida más sencilla, conectando creatividad con funcionalidad.
        </Typography>
      </motion.div>

      {/* Tecnologías */}
      <Box mt={4}>
        
        <Grid container spacing={3} justifyContent="center">
          {[ 
            { src: htmlIcon, alt: "HTML5" }, 
            { src: cssIcon, alt: "CSS3" }, 
            { src: jsIcon, alt: "JavaScript" }, 
            { src: reactIcon, alt: "React" }, 
            { src: materialuiIcon, alt: "Material-UI" },
            { src: pythonIcon, alt: "Python" }, 
            { src: djangoIcon, alt: "Django" } 
          ].map((tech, index) => (
            <Grid item key={index}>
              <motion.img
                src={tech.src}
                alt={tech.alt}
                width={60}
                height={60}
                style={{ margin: "0 10px" }} // Espaciado entre iconos
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      
    </Container>
  );
}
