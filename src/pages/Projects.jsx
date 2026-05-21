/* eslint-disable no-unused-vars */

import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import quiniela from "../assets/Quiniela.jpg";
import luciojm from "../assets/luciojm.png";
import etrivium from "../assets/etrivium.png";
import lavelada from "../assets/la velada v.png";

const projects = [
  {
    title: "Lucio J&M (Tienda Online Premium)",
    description:
      "Desarrollo, mantenimiento y optimización (CRO) de la plataforma e-commerce de Lucio J&M. Diseño y maquetación con WordPress y Elementor enfocados en el rendimiento y experiencia de usuario.",
    image: luciojm,
    url: "https://www.luciojm.es",
  },
  {
    title: "eTrivium",
    description:
      "Desarrollo de nuevas funcionalidades y mejora de la experiencia de usuario (UX/UI). Contribución activa a la refactorización para lograr un código más limpio y escalable.",
    image: etrivium,
    url: "https://etrivium.es/", // Enlace a la web comercial aunque trabajases en la herramienta interna
  },
  {
    title: "La Velada del Año V",
    description:
      "Colaboración en el desarrollo del sitio web oficial del evento de Ibai Llanos junto al equipo de Midudev. Uso de Astro, TypeScript y Tailwind CSS para un rendimiento excepcional.",
    image: lavelada,
    url: "https://github.com/midudev/la-velada-web-oficial", // Enlace al repositorio porque la web cambia cada año
  },
  {
    title: "Quiniela Parkour (React, Django, PostgreSQL)",
    description:
      "Aplicación para gestionar quinielas, permitiendo a los usuarios hacer predicciones y comparar resultados en tiempo real. Usuario de prueba: test@test.com, contraseña: quiniela2024.",
    image: quiniela,
    url: "https://parallel-justinn-juanyale-930ef30a.koyeb.app/login",
  }
];

export default function Projects() {
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
      <Container maxWidth="lg" sx={{ textAlign: "center", mt: 5 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "#80DEEA", fontWeight: "bold", marginTop: "20px" }}
          >
            Proyectos
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center" mt={5}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: index * 0.3 }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      maxWidth: 350,
                      height: 420,
                      mx: "auto",
                      backgroundColor: "#222",
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 0px 20px rgba(128, 222, 234, 0.5)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="150"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        width: "85%",
                        margin: "15px auto",
                        borderRadius: 2,
                        transition: "transform 0.3s",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ color: "#80DEEA", mb: 1 }}>
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="gray"
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
