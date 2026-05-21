import { Container, Typography, Card, CardContent, CardMedia, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import quiniela from "../assets/Quiniela.jpg";
import luciojm from "../assets/luciojm.png";
import etrivium from "../assets/etrivium.png";
import lavelada from "../assets/la velada v.png";

const projects = [
  {
    title: "Lucio J&M (E-Commerce)",
    description: "Desarrollo, mantenimiento y optimización (CRO) de la plataforma e-commerce de Lucio J&M. Diseño y maquetación con WordPress y Elementor enfocados en el rendimiento y experiencia de usuario.",
    image: luciojm,
    url: "https://www.luciojm.es",
  },
  {
    title: "eTrivium",
    description: "Desarrollo de nuevas funcionalidades y mejora de la experiencia de usuario (UX/UI). Contribución activa a la refactorización para lograr un código más limpio y escalable.",
    image: etrivium,
    url: "https://etrivium.es/",
  },
  {
    title: "La Velada del Año V",
    description: "Colaboración en el desarrollo del sitio web oficial del evento de Ibai Llanos junto al equipo de Midudev. Uso de Astro, TypeScript y Tailwind CSS para un rendimiento excepcional.",
    image: lavelada,
    url: "https://github.com/midudev/la-velada-web-oficial",
  },
  {
    title: "Quiniela Parkour (Fullstack)",
    description: "Aplicación para gestionar quinielas, permitiendo a los usuarios hacer predicciones y comparar resultados en tiempo real. Creado con React, Django y PostgreSQL.",
    image: quiniela,
    url: "https://parallel-justinn-juanyale-930ef30a.koyeb.app/login",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 8, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          
          <Box sx={{ mb: 8, textAlign: { xs: "center", md: "left" } }}>
            <motion.div variants={itemVariants}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: "3rem", sm: "4rem", md: "5rem" }, 
                  fontWeight: 800, 
                  lineHeight: 1.1, 
                  letterSpacing: "-0.04em",
                  color: "#111827",
                  mb: 2
                }}
              >
                Proyectos <br />
                <span style={{ 
                  background: "linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  Destacados.
                </span>
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants} style={{ height: "100%" }}>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <Card sx={{ 
                      height: "100%", 
                      borderRadius: "32px", 
                      border: "1px solid #f3f4f6",
                      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.15)",
                        borderColor: "#e5e7eb",
                        "& .MuiCardMedia-root": { transform: "scale(1.05)" }
                      }
                    }}>
                      <Box sx={{ overflow: "hidden", height: { xs: 200, sm: 250 } }}>
                        <CardMedia
                          component="img"
                          image={project.image}
                          alt={project.title}
                          sx={{ 
                            height: "100%", 
                            width: "100%", 
                            objectFit: "cover",
                            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" 
                          }}
                        />
                      </Box>
                      <CardContent sx={{ p: { xs: 3, md: 4 }, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Typography variant="h4" sx={{ color: "#111827", fontWeight: 800, mb: 2, letterSpacing: "-0.02em" }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#4b5563", fontSize: "1.1rem", lineHeight: 1.6 }}>
                          {project.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              </Grid>
            ))}
          </Grid>

        </motion.div>
      </Container>
    </Box>
  );
}
