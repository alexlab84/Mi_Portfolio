/* eslint-disable no-unused-vars */

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
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #121212, #1a1a2e)",
        color: "#fff",
        padding: "40px 0",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center", mt: 8 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h3" gutterBottom>
            <span style={{ color: "#80DEEA", fontWeight: "bold" }}>
              Frontend Developer enfocada en rendimiento y experiencia de usuario
            </span>
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            variant="h6"
            paragraph
            sx={{ fontSize: "1.2rem", textAlign: "justify" }}
          >
            Soy una desarrolladora web apasionada por crear interfaces digitales
            que destaquen tanto por su estética premium como por su funcionalidad y rendimiento.
            Mi enfoque principal es el desarrollo Frontend, donde combino mi creatividad con un sólido conocimiento técnico para construir experiencias de usuario excepcionales.
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{ fontSize: "1.2rem", textAlign: "justify" }}
          >
            A lo largo de mi trayectoria, he colaborado en proyectos de alto impacto como la web de
            <a href="https://github.com/midudev/la-velada-web-oficial" target="_blank" rel="noopener noreferrer" style={{color: "#80DEEA", textDecoration: "none", fontWeight: "bold"}}> La Velada del Año V </a> junto al equipo de Midudev, he contribuido al crecimiento de eTrivium,
            y actualmente coordino toda la estrategia digital, CRO y desarrollo web de <a href="https://www.luciojm.es" target="_blank" rel="noopener noreferrer" style={{color: "#80DEEA", textDecoration: "none", fontWeight: "bold"}}>Lucio J&M</a>,
            una marca premium donde gestiono tanto la infraestructura en WordPress/WooCommerce como el diseño UI/UX.
            Mi stack principal se centra en React, JavaScript y Material-UI, y destaco por mi capacidad para adaptarme rápidamente a las tecnologías que requiera cada proyecto.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#80DEEA", fontWeight: "bold", mt: 4 }}
          >
            Mi propósito es claro: construir tecnología que haga la vida más
            sencilla, conectando creatividad con funcionalidad.
          </Typography>
        </motion.div>

        <Box mt={4}>
          <Grid container spacing={3} justifyContent="center">
            {[
              { src: htmlIcon, alt: "HTML5" },
              { src: cssIcon, alt: "CSS3" },
              { src: jsIcon, alt: "JavaScript" },
              { src: reactIcon, alt: "React" },
              { src: materialuiIcon, alt: "Material-UI" },
              { src: pythonIcon, alt: "Python" },
              { src: djangoIcon, alt: "Django" },
            ].map((tech, index) => (
              <Grid item key={index}>
                <motion.img
                  src={tech.src}
                  alt={tech.alt}
                  width={65}
                  height={65}
                  style={{ margin: "0 10px" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
